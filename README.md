/backend       ← Node + Express + MongoDB (auth API)
  ├── models
  │    └── User.js
  ├── routes
  │    └── auth.js
  ├── middleware
  │    └── authMiddleware.js
  └── server.js

/frontend      ← React app (Sign Up / Login / Dashboard UI)
  ├── src
  │    ├── App.js
  │    ├── components
  │    │     ├── Login.jsx
  │    │     ├── Signup.jsx
  │    │     └── Dashboard.jsx
  │    └── … (other frontend files)


















# 1. Clone the repo
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>

# 2. Start backend
cd backend
npm install           # install dependencies
# create .env file with required env variables (e.g. MONGODB_URI, JWT_SECRET, PORT)
npm start             # or `node server.js` / `nodemon server.js` if using nodemon

# 3. Start frontend
cd ../frontend
npm install           # install React dependencies
npm start             # starts development server at default port (e.g. http://localhost:3000)

# 4. In browser, open http://localhost:3000 → you should see login/signup UI
