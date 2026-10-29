import express from 'express';
import mongoose from 'mongoose';
import { Enquiry } from '../models/Enquiry.js';
import { sendLeadNotification } from '../services/emailService.js';

const router = express.Router();

// Fallback in-memory store for demo instances without active MongoDB daemon
const fallbackEnquiries = [];

// POST /api/enquiries - Submit a new lead / enquiry
router.post('/', async (req, res) => {
  try {
    const {
      fullName,
      phone,
      email,
      configuration,
      enquiryType,
      preferredVisitDate,
      preferredTimeSlot,
      message,
      isDemoSubmission = true
    } = req.body;

    // Server-side validation
    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
      return res.status(400).json({
        success: false,
        error: 'Please enter a valid full name (minimum 2 characters).'
      });
    }

    if (!phone || typeof phone !== 'string' || !/^[0-9+() -]{8,20}$/.test(phone.trim())) {
      return res.status(400).json({
        success: false,
        error: 'Please enter a valid phone number.'
      });
    }

    if (email && email.trim() && !/^\S+@\S+\.\S+$/.test(email.trim())) {
      return res.status(400).json({
        success: false,
        error: 'Please enter a valid email address or leave it blank.'
      });
    }

    const leadPayload = {
      fullName: fullName.trim(),
      phone: phone.trim(),
      email: email ? email.trim() : '',
      configuration: configuration || 'Not sure / Both',
      enquiryType: enquiryType || 'General Enquiry',
      preferredVisitDate: preferredVisitDate || '',
      preferredTimeSlot: preferredTimeSlot || '',
      message: message ? message.trim() : '',
      isDemoSubmission: Boolean(isDemoSubmission),
      createdAt: new Date()
    };

    let savedLead;
    const isDbConnected = mongoose.connection.readyState === 1;

    if (isDbConnected) {
      const newEnquiry = new Enquiry(leadPayload);
      savedLead = await newEnquiry.save();
    } else {
      // Save to memory store
      const id = 'DEMO-' + Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
      savedLead = { _id: id, ...leadPayload };
      fallbackEnquiries.unshift(savedLead);
    }

    // Trigger EmailJS / notification dispatch asynchronously
    let emailStatus = { sent: false };
    try {
      emailStatus = await sendLeadNotification(savedLead);
    } catch (emailErr) {
      console.warn('[Notification Warning] Could not dispatch email notification:', emailErr.message);
    }

    return res.status(201).json({
      success: true,
      message: 'Enquiry received successfully and recorded.',
      data: {
        id: savedLead._id,
        fullName: savedLead.fullName,
        enquiryType: savedLead.enquiryType,
        configuration: savedLead.configuration,
        isDbConnected,
        emailNotification: emailStatus
      }
    });
  } catch (err) {
    console.error('Error handling enquiry submission:', err);
    return res.status(500).json({
      success: false,
      error: 'An internal error occurred while processing your request. Please try again or reach out via WhatsApp.'
    });
  }
});

// GET /api/enquiries - Fetch submitted demo leads (for testing/verification)
router.get('/', async (req, res) => {
  try {
    const isDbConnected = mongoose.connection.readyState === 1;
    if (isDbConnected) {
      const leads = await Enquiry.find().sort({ createdAt: -1 }).limit(50);
      return res.json({ success: true, count: leads.length, data: leads, storage: 'MongoDB' });
    } else {
      return res.json({ success: true, count: fallbackEnquiries.length, data: fallbackEnquiries, storage: 'InMemoryDemo' });
    }
  } catch (err) {
    console.error('Error fetching leads:', err);
    return res.status(500).json({ success: false, error: 'Could not fetch records.' });
  }
});

export default router;
