# Mini CRM Dashboard

A full-stack CRM dashboard for managing client leads — track status, add follow-up notes, and view key stats from a clean, responsive interface.

**Live Demo:** [Frontend](https://future-fs-02-gamma-mocha.vercel.app/) ·
[Backend API](https://future-fs-02-twwf.onrender.com)

## Features

- Admin login
- Full CRUD for leads (create, view, update, delete)
- Lead status tracking and follow-up notes
- Search by name and dashboard statistics
- Responsive UI with dark/light theme

## Tech Stack

**Frontend:** React, Vite, Axios, CSS
**Backend:** Node.js, Express.js, Mongoose
**Database:** MongoDB Atlas
**Deployment:** Vercel (frontend), Render (backend)

## API Reference

| Method | Endpoint          | Description        |
|--------|-------------------|---------------------|
| GET    | `/api/leads`      | Get all leads       |
| POST   | `/api/leads`      | Create a lead        |
| PUT    | `/api/leads/:id`  | Update a lead        |
| DELETE | `/api/leads/:id`  | Delete a lead        |

## Getting Started

```bash
git clone https://github.com/SanaShaikh171/FUTURE_FS_02.git
cd FUTURE_FS_02
```

**Frontend**
```bash
cd frontend
npm install
npm run dev
```

**Backend**
```bash
cd backend
npm install
node server.js
```

Create a `.env` file in `backend/`:
```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

## What I Learned

Building this project strengthened my skills in connecting a React frontend to an Express REST API, designing CRUD operations, modeling data with MongoDB and Mongoose, and deploying a full-stack app across Vercel and Render.

## Author

**Sana Shaikh**
[GitHub](https://github.com/SanaShaikh171)
