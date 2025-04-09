📝 Feedback Collector App

A full-stack feedback collection app that allows users to submit feedback and view previously submitted responses. Built using the MERN stack with a clean and responsive UI, including features like clean toast notifications and mobile responsiveness.


🚀 Live Demo

- **Frontend** (Netlify): [https://fascinating-biscotti-6b5812.netlify.app/]
- **Backend - GET(feedbacks API - response)** (Render): [https://feedback-collector-backend-mbvg.onrender.com/api/feedbacks]


📁 Project Structure

feedback/
    ├── backend/ │
        ├── index.js # Entry point for Express backend
        ├── models/ 
            |── model.js # Mongoose model for feedback 
        │── routes/ 
            │── route.js # route and controller/handler functions for GET /feedbacks and POST /submit-feedback 
        │── .env # Environment variable (MONGODB_URI)
        │── package.json # Backend dependencies & scripts 
    ├── frontend/ 
        ├── src/ 
            ├── App.jsx # Main React component 
            ├── main.jsx # Entry point │
            │── FeedbackList.jsx # (ADMIN VIEW) - feedbacks sorted from most recent
            │── Home.jsx # Feedback form 
        │── package.json # Frontend dependencies & scripts 
        │── vite.config.js # Vite configuration 
        │── tailwind.config.js # Tailwindcss configuration 

🛠️ Tech Stack

🔹 Frontend
- React (with Vite)
- TailwindCSS
- Axios
- Toastify
- Mobile-Responsive Layout

🔹 Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS + dotenv


⚙️ Deployments

Frontend : Netlify - [https://fascinating-biscotti-6b5812.netlify.app/]
Backend : Render - (feedbacks API response) [https://feedback-collector-backend-mbvg.onrender.com/api/feedbacks]

📦 Deployment Step Carried

**BACKEND**

1. Pushed code to GitHub.

2. Render Dashboard → New Web Service.

3. Connected GitHub repo : [https://github.com/madhuribs111/feedback-collector-assignment]

4. Set:

Root Directory: backend

Build Command: npm install

Start Command: npm start

Add environment variables (MONGODB_URI).

Clicked "Deploy."

-----

**FRONTEND**

1. Pushed code to GitHub.

2. Visited Netlify → "Add New Site" → "Import from Git".

3. Connected GitHub repo : [https://github.com/madhuribs111/feedback-collector-assignment]

4. Set:

Base Directory: frontend

Build Command: npm run build

Publish Directory: dist

Clicked "Deploy Site".

-------

✨ Features

1. Submit feedback with name, email, and message

2. View submitted feedback on a separate page (ADMIN VIEW)

3. Correct mobile responsiveness

4. Toast notifications for actions

5. Timestamp display for each feedback

6. Form-level validation with user-friendly messages (toast notifications)