# 🔐 Simple Auth Web App  

A full-stack web application demonstrating a basic Sign Up / Login flow, using a MongoDB + Express backend and a minimal HTML/JS (or React) frontend.  
After login, users are redirected to a dashboard that greets them by their email/username. The app supports signup, login, logout, and basic error handling.

---

## 📌 Live Demo  
**Frontend (live):** https://your-frontend-url.com  
**Backend (API):** https://your-backend-url.com  

*(Replace with your actual deployed URLs)*

---

## 🧰 Tech Stack  

- **Backend:** Node.js, Express.js, MongoDB (Mongoose), JSON Web Tokens (JWT) for authentication  
- **Frontend:** HTML + CSS + JavaScript (vanilla) — or React (if you opted for that)  
- **Storage:** MongoDB (e.g. MongoDB Atlas) for user credentials  
- **Deployment:** Backend deployed on [your choice — e.g. Render / Heroku / Vercel], Frontend on [e.g. Netlify / Vercel / static host]  

---

## 🚀 Features  

- User **Sign Up** with unique email + hashed password storage  
- User **Login** with JWT authentication  
- Protected dashboard — only accessible after login  
- **Logout** — clears session/token and returns to login page  
- Simple, centered UI for login/signup forms  

---

## 📝 Installation / Running Locally  

> **Note:** Ensure you have Node.js and npm installed. And MongoDB — local or cloud (e.g. Atlas).  

1. Clone the repo  
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
