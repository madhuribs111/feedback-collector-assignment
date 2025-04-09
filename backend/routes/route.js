import express from 'express';
const router = express.Router();
import Feedback from '../models/model.js';

// POST /submit-feedback
router.post('/submit-feedback', async (req, res) => {
  const { fullName, email, message } = req.body;
  try {
    const feedback = new Feedback({ fullName, email, message });
    await feedback.save();
    res.status(201).json({ success: true, message: 'Feedback submitted!' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// GET /feedbacks
router.get('/feedbacks', async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.status(200).json(feedbacks);
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error fetching feedbacks' });
  }
});

export default router;
