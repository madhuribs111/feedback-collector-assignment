import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState([]);
  const navigate = useNavigate();

  const fetchFeedbacks = async () => {
    try {
      const res = await axios.get('https://backend-url.com/feedbacks');
      setFeedbacks(res.data);
    } catch {
      alert('Error fetching feedbacks');
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Submitted Feedback</h2>

        <div className="flex justify-end mb-4">
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Back to Form
          </button>
        </div>

        <div className="space-y-4">
          {feedbacks.length === 0 ? (
            <p className="text-center text-gray-500">No feedback submitted yet.</p>
          ) : (
            feedbacks.map(fb => (
              <div key={fb._id} className="bg-white shadow p-4 rounded border">
                <div className="font-semibold">{fb.fullName} ({fb.email})</div>
                <div className="text-sm text-gray-600">{new Date(fb.createdAt).toLocaleString()}</div>
                <p className="mt-2">{fb.message}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default FeedbackList;
