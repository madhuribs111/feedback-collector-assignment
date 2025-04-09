import mongoose from 'mongoose';
const FeedbackSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
},
{timestamps: true});

module.exports = mongoose.model('Feedback', FeedbackSchema);
