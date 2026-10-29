import mongoose from 'mongoose';

const enquirySchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, 'Full name is required'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters']
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
      match: [/^[0-9+() -]{8,20}$/, 'Please provide a valid phone number']
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      validate: {
        validator: function(v) {
          return !v || /^\S+@\S+\.\S+$/.test(v);
        },
        message: 'Please provide a valid email address'
      },
      default: ''
    },
    configuration: {
      type: String,
      trim: true,
      default: 'Not sure / Both'
    },
    enquiryType: {
      type: String,
      trim: true,
      default: 'General Enquiry'
    },
    preferredVisitDate: {
      type: String,
      default: ''
    },
    preferredTimeSlot: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      maxlength: [1000, 'Message cannot exceed 1000 characters'],
      default: ''
    },
    isDemoSubmission: {
      type: Boolean,
      default: true
    },
    source: {
      type: String,
      default: 'Dhanlaxmi Web Portal'
    }
  },
  {
    timestamps: true
  }
);

export const Enquiry = mongoose.model('Enquiry', enquirySchema);
