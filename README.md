🌟 MERN ThinkBoard – Notes App

A full-stack MERN application where users can create, edit, delete and manage notes with a clean UI and smooth interactions.
Built using MongoDB, Express, React (Vite), and Node.js, deployed on Render.

🚀 Live Demo (Optional)

Add your Render or Vercel link here
Example: https://mern-thinkboard-6dv3.onrender.com/

📌 Features
✅ Frontend

Modern UI with TailwindCSS + DaisyUI

Built with React 19

Routing using React Router v7

Toast notifications using react-hot-toast

Fast development with Vite

✅ Backend

REST API using Node.js + Express

MongoDB with Mongoose

CRUD operations for notes

Rate Limiting using Upstash Ratelimit

CORS properly configured

✅ Notes Features

Create new notes

Edit existing notes

Delete notes

View notes in detail

Notes sorted by latest

Auto refresh UI

🛠️ Tech Stack
Frontend

React 19

Vite

TailwindCSS

DaisyUI

Axios

Lucide-React icons

React Router v7

React Hot Toast

Backend

Node.js

Express

MongoDB

Mongoose

Upstash Ratelimit

CORS

📁 Folder Structure
project-root/
 ├── backend/
 │   ├── src/
 │   │   ├── config/
 │   │   ├── controllers/
 │   │   ├── middleware/
 │   │   ├── models/
 │   │   ├── routes/
 │   ├── package.json
 │   └── server.js
 │
 ├── frontend/
 │   ├── src/
 │   ├── public/
 │   ├── package.json
 │   └── vite.config.js
 │
 └── README.md

⚙️ Installation & Setup
1️⃣ Clone the repo
git clone https://github.com/your-username/mern-thinkboard.git
cd mern-thinkboard

▶️ Backend Setup
cd backend
npm install


Create a .env file:

MONGO_URI=your_mongo_db_url
PORT=5001
UPSTASH_REDIS_REST_URL=your_upstash_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_token


Run backend:

npm run start

💻 Frontend Setup

Open a new terminal:

cd frontend
npm install
npm run dev


App opens at:

http://localhost:5173

🚀 Deployment (Render)
Backend:

Create a Web Service

Root directory: /backend

Build command: npm install

Start command: npm run start

Frontend:

Create a Static Site

Root directory: /frontend

Build command: npm run build

Publish directory: dist/

Make sure backend CORS is set to:

app.use(cors({
  origin: /http:\/\/localhost:\d+$/  // or your deployed domain
}));

🧪 API Endpoints
Method	Endpoint	Description
GET	/api/notes	Get all notes
GET	/api/notes/:id	Get single note
POST	/api/notes	Create note
PUT	/api/notes/:id	Update note
DELETE	/api/notes/:id	Delete note

Example Create Note Body:

{
  "title": "My Note",
  "content": "This is my note content"
}

🐛 Common Issues
❗ React-Quill build errors

You must remove:

import "react-quill/dist/quill.snow.css";


And remove react-quill from package.json.

❗ Render CORS error

Use:

app.use(cors({
  origin: /http:\/\/localhost:\d+$/
}));


OR your deployed domain.

❗ Free Render sleep delay

Free Render backend sleeps → first request takes 50 sec to wake up.

Use UptimeRobot to keep it alive.

🙌 Credits

Developed by Alfez Khan
For learning MERN Stack & Production deployment.

📜 License

This project is free to use for learning and portfolio purposes.
