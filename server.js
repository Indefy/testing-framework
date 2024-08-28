import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Sample test data
const testResults = [
  { id: 1, name: 'Test 1', status: 'Passed', duration: '5s' },
  { id: 2, name: 'Test 2', status: 'Failed', duration: '3s' },
  { id: 3, name: 'Test 3', status: 'Passed', duration: '2s' },
];

// Sample settings data using environment variables
const settings = {
  apiKey: process.env.API_KEY,
  environment: process.env.ENVIRONMENT
};

// Endpoint to get test results
app.get('/api/tests', (req, res) => {
  res.json(testResults);
});

// Endpoint to get settings
app.get('/api/settings', (req, res) => {
  res.json(settings);
});

// Endpoint to save settings
app.post('/api/settings', (req, res) => {
  console.log('Saving settings:', req.body);
  res.json({ message: 'Settings saved successfully' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
