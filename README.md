/backend
  ├─ models/       # Mongoose schema (User, etc.)
  ├─ routes/       # Auth routes (signup, login)
  ├─ server.js     # Express server entry point
  └─ .env          # Environment variables (DB URI, JWT secret, PORT)

/frontend         # (or public/ if vanilla HTML/JS)
  ├─ index.html   # Combined login/signup UI
  ├─ dashboard.html  # (or dynamic JS) for post-login welcome + logout
  └─ script.js / main.js  # JS for auth flow & UI logic
