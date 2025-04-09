import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function Home() {
  const [formData, setFormData] = useState({ fullName: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) {
        toast.error('Please fill in all fields!');
        return;
      }
    setLoading(true);
    try {
      await axios.post('https://backend-url.com/submit-feedback', formData);
      toast.success('Feedback submitted successfully!');
    setFormData({ fullName: '', email: '', message: '' });
    } catch {
        toast.error('Error submitting feedback');
        }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-4">
      <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Feedback Collector</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange}
            placeholder="Full Name" required className="w-full p-2 border rounded" />
          <input type="email" name="email" value={formData.email} onChange={handleChange}
            placeholder="Email" required className="w-full p-2 border rounded" />
          <textarea name="message" value={formData.message} onChange={handleChange}
            placeholder="Your Feedback" required className="w-full p-2 border rounded h-24" />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>

      <div className="text-center mt-6">
        <button
          onClick={() => navigate('/feedbacks')}
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 transition"
        >
          View Submitted Feedback
        </button>
      </div>

      <footer className="text-center mt-10 text-gray-500 text-sm">
        
        © 2025 Madhuri B S - Feedback Collector App
      </footer>
    </div>
  );
}

export default Home;
