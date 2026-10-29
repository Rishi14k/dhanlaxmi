/**
 * Email Notification Service using EmailJS & Webhook Dispatches
 * Handles lead notifications for Dhanlaxmi Group (Saanjh Luxury Homes)
 */

export async function sendLeadNotification(lead) {
  const serviceId = process.env.emailjs_service_id || process.env.EMAILJS_SERVICE_ID || 'service_esrkgyp';
  const recipientEmail = process.env.email || process.env.NOTIFICATION_EMAIL || 'rishuright14@gmail.com';
  const templateId = process.env.EMAILJS_TEMPLATE_ID || process.env.emailjs_template_id || '';
  const publicKey = process.env.EMAILJS_PUBLIC_KEY || process.env.emailjs_public_key || process.env.EMAILJS_USER_ID || '';
  const privateKey = process.env.EMAILJS_PRIVATE_KEY || process.env.emailjs_private_key || '';

  const templateParams = {
    to_email: recipientEmail,
    to_name: 'Dhanlaxmi Group Sales Desk',
    from_name: lead.fullName,
    customer_name: lead.fullName,
    customer_phone: lead.phone,
    customer_email: lead.email || 'Not provided',
    configuration: lead.configuration,
    enquiry_type: lead.enquiryType,
    preferred_date: lead.preferredVisitDate || 'Not specified',
    preferred_time: lead.preferredTimeSlot || 'Not specified',
    message: lead.message || 'No additional remarks',
    lead_id: lead._id ? lead._id.toString() : 'DEMO-LEAD',
    submitted_at: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
  };

  console.log(`[Email Notification] New Lead Received for ${recipientEmail}:`);
  console.log(`  - Name: ${lead.fullName} (${lead.phone})`);
  console.log(`  - Typology: ${lead.configuration} | Type: ${lead.enquiryType}`);
  console.log(`  - Target EmailJS Service ID: ${serviceId}`);

  // If template_id and public_key are not yet provided in .env, log setup guidance
  if (!templateId || !publicKey) {
    console.log(`[EmailJS Notice] EmailJS Service ID is set to '${serviceId}' and notification email is '${recipientEmail}'.`);
    console.log(`  To deliver direct inbox emails via EmailJS, please also set EMAILJS_TEMPLATE_ID and EMAILJS_PUBLIC_KEY in server/.env.`);
    return {
      sent: false,
      serviceId,
      recipientEmail,
      note: 'Template ID / Public Key pending in .env'
    };
  }

  try {
    const payload = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: templateParams,
    };

    if (privateKey) {
      payload.accessToken = privateKey;
    }

    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      console.log(`[EmailJS Success] Enquiry notification delivered to ${recipientEmail} via EmailJS service ${serviceId}!`);
      return { sent: true, serviceId, recipientEmail };
    } else {
      const errorText = await response.text();
      console.warn(`[EmailJS Response] EmailJS returned status ${response.status}: ${errorText}`);
      return { sent: false, error: errorText };
    }
  } catch (err) {
    console.error(`[EmailJS Error] Could not dispatch email via EmailJS:`, err.message);
    return { sent: false, error: err.message };
  }
}
