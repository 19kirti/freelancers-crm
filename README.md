
# 📘 Freelancer CRM

A modern, full-stack CRM (Customer Relationship Management) system for freelancers to manage clients, tasks, and invoices efficiently. Built using:

- 🧠 MongoDB, Express, React (Vite), Node.js
- 🎨 Tailwind CSS v4 (with dark UI)
- ⚙️ REST API (MVC Architecture)
- 📦 Component-based frontend
- 🚀 Deploy-ready and scalable

---

## 📁 Project Structure

```
freelancer-crm/
├── client/         # Frontend (React + Vite + Tailwind)
├── server/         # Backend (Express + MongoDB + Mongoose)
├── README.md
└── .gitignore
```

---

## 🚀 Features

- ✅ User-friendly dark UI
- ✅ Client management
- ✅ Task tracking
- ✅ Invoice management
- ✅ RESTful API with MVC structure
- ✅ MongoDB Atlas integration
- ✅ Responsive layout with Tailwind v4

---

## 🛠️ Technologies Used

### Frontend
- React (Vite)
- React Router
- Tailwind CSS v4
- Flowbite UI (Optional)

### Backend
- Node.js
- Express
- MongoDB + Mongoose
- CORS

---

## 🧩 Setup Instructions

### 1. Clone the Repo
```bash
git clone https://github.com/your-username/freelancer-crm.git
cd freelancer-crm
```

---

### 2. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in `server/`:

```env
PORT=4000
MONGO_URI=your_mongo_db_uri_here
```

Start the server:
```bash
npm run dev
```

---

### 3. Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

## 🔁 API Endpoints

| Method | Endpoint            | Description         |
|--------|---------------------|---------------------|
| GET    | `/api/clients`      | Get all clients     |
| POST   | `/api/clients`      | Add a client        |
| GET    | `/api/tasks`        | Get all tasks       |
| POST   | `/api/tasks`        | Add a task          |
| GET    | `/api/invoices`     | Get all invoices    |
| POST   | `/api/invoices`     | Add an invoice      |

---

## 📷 UI Preview

> Insert screenshots or link to a demo here  
> `![Dashboard Screenshot](./assets/dashboard.png)`

---

## 🧠 Folder Overview

### server/
- `models/`: Mongoose schemas
- `controllers/`: Route logic
- `routes/`: API endpoints
- `index.js`: Main server file

### client/
- `pages/`: Dashboard, Invoices, Tasks, Clients
- `components/`: Header, Cards, Forms, etc.
- `App.jsx`: Main routing
- `tailwind.config.js`: Tailwind setup

---

## 🧪 Testing

- Use **Thunder Client** or **Postman** to test API
- Frontend fetches data dynamically using `axios` or `fetch`

---

## 🌐 Deployment (optional)

You can deploy using:

- **Frontend**: Vercel / Netlify
- **Backend**: Render / Railway / Cyclic
- **Database**: MongoDB Atlas (cloud)

---

## 🙌 Credits

Made with 💻 by [Your Name]
