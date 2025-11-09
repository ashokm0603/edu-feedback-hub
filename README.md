# Student Feedback Form (Full-Stack Web App)

This is a **full-stack web application** designed to collect and manage student feedback easily.  
The system allows students to submit feedback and also provides a view of all submitted records.

##  Tech Stack

| Layer      | Technology Used |
|-----------|----------------|
| Frontend  | React.js, React Router, Axios, React Toastify |
| Backend   | Node.js, Express.js, CORS, Mongoose |
| Database  | MongoDB Atlas (Cloud Database) |
| Deployment| Netlify (Frontend), Render (Backend) |

## Key Features

- Students can submit feedback by selecting:
  - Month  
  - Program  
  - Year  
  - Branch  
  - Feedback Type  
  - Hall Ticket Number  
  - Gender  
- Feedback list page to view stored responses  
- Fully responsive UI (Mobile / Tablet / Desktop)  
- Secure API communication using REST  
- React Router used for navigation  

##  Project Structure

```
student-feedback-form
│
├── frontend  (React UI deployed on Netlify)
└── backend   (Node.js API deployed on Render)
```

##  Requirements

### Frontend (React + Netlify)
- Node.js installed
- Create React App setup
  ```
  npx create-react-app frontend
  ```
- Install required libraries:
  ```
  npm install react-router-dom axios react-toastify
  ```
- Create `_redirects` file in `public/` with:
  ```
  /*   /index.html   200
  ```
- Netlify account for deployment

### Backend (Node.js + Render)
- Install dependencies:
  ```
  npm install express mongoose dotenv cors body-parser
  ```
- MongoDB Atlas account + connection URI
- `.env` file containing:
  ```
  MONGO_URI=your_connection_string
  ```
- Render account for backend deployment
- Enable CORS to allow frontend access

## Deployment Steps

### 1️ Backend (Deploy on Render)
1. Push backend code to GitHub
2. Go to **Render.com → Web Service → Deploy from GitHub**
3. Add environment variable:
   ```
   MONGO_URI=your_mongodb_uri
   ```
4. Whitelist Render IP in MongoDB Atlas
5. Copy your backend deployment URL (Example: `https://feedback-api.onrender.com`)

### 2️ Frontend (Deploy on Netlify)
1. Push frontend code to GitHub
2. Go to **Netlify → New Site from GitHub**
3. Update all API URLs inside React to the Render backend URL
4. Deploy!

##  Final Testing Checklist

| Check | Description |
|------|-------------|
|  Frontend working | Check Netlify URL loads UI |
|  Backend reachable | Test API using Postman or browser |
|  Database connected | Ensure data inserts correctly into MongoDB |
|  Navigation works | React Router page switching works |
|  Responsive UI | Test on multiple devices |

##  Outcome

Your Student Feedback Form is now **live**, fully functional, and accessible from anywhere!  
Perfect for colleges, training centers, or project showcases.

###  If you found this project helpful, don’t forget to star ⭐ the repository!
