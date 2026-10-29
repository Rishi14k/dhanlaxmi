import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import enquiryRoutes from './routes/enquiryRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Sanitize MongoDB URI against any accidental duplicate 'mongodb+srv:mongodb+srv://' prefixes
const rawUri = process.env.MONGODB_URI || 'mongodb+srv://rishuright14_db_user:wxFPbRvfhEOPbvAI@dhanlaxmi.xnhdfyg.mongodb.net/dhanlaxmi?retryWrites=true&w=majority';
const cleanedUri = rawUri.replace(/^mongodb\+srv:mongodb\+srv:\/\//, 'mongodb+srv://');
const MONGODB_URI = cleanedUri.includes('?') 
  ? cleanedUri 
  : (cleanedUri.endsWith('/') ? `${cleanedUri}dhanlaxmi?retryWrites=true&w=majority` : `${cleanedUri}/dhanlaxmi?retryWrites=true&w=majority`);

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/enquiries', enquiryRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  const dbStatus = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected/in-memory-fallback';
  res.json({
    status: 'healthy',
    project: 'Dhanlaxmi Group Web Portal API',
    database: dbStatus,
    timestamp: new Date().toISOString()
  });
});

// Root ping
app.get('/', (req, res) => {
  res.json({
    message: 'Dhanlaxmi Group Luxury Real Estate API is running.',
    version: '1.0.0',
    documentation: 'Enquiry endpoint: POST /api/enquiries'
  });
});

// Non-blocking MongoDB connection
mongoose.connect(MONGODB_URI, {
  serverSelectionTimeoutMS: 8000,
})
  .then(() => {
    console.log('MongoDB successfully connected to MongoDB Atlas cluster');
  })
  .catch((err) => {
    console.warn('MongoDB connection deferred or offline. Running in graceful In-Memory fallback mode:', err.message);
  });

app.listen(PORT, () => {
  console.log(`Dhanlaxmi Group Server running on http://localhost:${PORT}`);
});
