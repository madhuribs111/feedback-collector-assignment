import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import FeedbackList from './FeedbackList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feedbacks" element={<FeedbackList />} />
      </Routes>
    </Router>
  );
}

export default App;



// import { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   const [formData, setFormData] = useState({ fullName: '', email: '', message: '' });
//   const [loading, setLoading] = useState(false);
//   const [feedbacks, setFeedbacks] = useState([]);
//   const [viewFeedback, setViewFeedback] = useState(false);

//   const handleChange = e => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       await axios.post('https://your-backend-url.com/submit-feedback', formData);
//       alert('Feedback submitted!');
//       setFormData({ fullName: '', email: '', message: '' });
//     } catch {
//       alert('Error submitting feedback');
//     }
//     setLoading(false);
//   };

//   const fetchFeedbacks = async () => {
//     const res = await axios.get('https://your-backend-url.com/feedbacks');
//     setFeedbacks(res.data);
//   };

//   useEffect(() => {
//     if (viewFeedback) fetchFeedbacks();
//   }, [viewFeedback]);

//   return (
//     <div className="min-h-screen bg-gray-100 text-gray-800 p-4">
//       <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
//         <h1 className="text-2xl font-bold mb-4">Feedback Collector</h1>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input type="text" name="fullName" value={formData.fullName} onChange={handleChange}
//             placeholder="Full Name" required className="w-full p-2 border rounded" />
//           <input type="email" name="email" value={formData.email} onChange={handleChange}
//             placeholder="Email" required className="w-full p-2 border rounded" />
//           <textarea name="message" value={formData.message} onChange={handleChange}
//             placeholder="Your Feedback" required className="w-full p-2 border rounded h-24" />
//           <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
//             {loading ? 'Submitting...' : 'Submit'}
//           </button>
//         </form>
//       </div>

//       <div className="text-center mt-6">
//         <button onClick={() => setViewFeedback(!viewFeedback)} className="underline text-blue-600">
//           {viewFeedback ? 'Hide Feedbacks' : 'View Submitted Feedback'}
//         </button>
//       </div>

//       {viewFeedback && (
//         <div className="max-w-xl mx-auto mt-4 space-y-3">
//           {feedbacks.map(fb => (
//             <div key={fb._id} className="bg-white p-4 border rounded shadow">
//               <p className="font-bold">{fb.fullName} ({fb.email})</p>
//               <p className="text-sm text-gray-600">{new Date(fb.createdAt).toLocaleString()}</p>
//               <p>{fb.message}</p>
//             </div>
//           ))}
//         </div>
//       )}

//       <footer className="text-center mt-10 text-gray-500 text-sm">
//         © 2025 Madhuri B S - Feedback Collector App
//       </footer>
//     </div>
//   );
// }

// export default App;
