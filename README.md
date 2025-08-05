# Mini LinkedIn Community Platform

A minimal LinkedIn-style community platform built with modern full-stack technologies. This platform allows users to register, log in and create/view posts.

---

## 🚀 Tech Stack

### 🔧 Frontend:
- **React 19 (with Vite)**
- **React Router DOM**
- **Axios**
- **Plain CSS** 

### ⚙️ Backend:
- **Node.js**
- **Express.js**
- **JWT (JSON Web Tokens)** for Authentication
- **SQLite** (using `sqlite3` npm package)

---

## 🚀 Features

- 🔐 User registration and login (with JWT auth)
- 👤 View and update user profile with name, email, and bio
- 📝 Create, read, and view text-only posts
- 🏠 Home feed showing all users' posts with author and timestamp
- 🔍 View individual user profiles with their posts
- 💾 SQLite for persistent local storage


## 🛠️ Setup Instructions

### 📁 Clone the Repository
```bash
git clone https://github.com/Renuka-Bandaru/miniLinkedIn.git
cd miniLinkedIn
---
## 💻 Frontend Setup

cd frontend

npm install
npm run dev

##🔌 Backend Setup

cd backend
npm install
node server.js


## Url Live at:https://fullstacklinkedup.netlify.app/
