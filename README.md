# HRMS Lite – Full Stack Assignment

HRMS Lite is a lightweight Human Resource Management System built as part of a full-stack coding assignment.  
The application allows an admin to manage employee records and track daily attendance through a clean, professional web interface.

The focus of this project is correctness, clarity, and real-world usability rather than feature overload.

---

## 🌐 Live Demo

- **Frontend:** https://hrms-lite-dev.netlify.app/
- **Backend API:** https://hrms-lite-xejf.onrender.com
- **API Documentation (Swagger):** https://hrms-lite-xejf.onrender.com/docs
- **GitHub Repository:** https://github.com/DevSingh28/HRMS_Lite

---

---

## 🔧 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Axios
- React Router
- React Icons

### Backend
- Python (FastAPI)
- SQLAlchemy (ORM)
- PostgreSQL
- Pydantic for validation

### Deployment
- Frontend: Netlify
- Backend: Render
- Database: PostgreSQL (hosted)

---

## ✨ Features

### Employee Management
- Add new employees
- View all employees
- Delete employees
- Server-side validation for required fields and email format
- Duplicate employee handling

### Attendance Management
- Mark employee attendance (Present / Absent)
- View attendance history per employee

### General
- RESTful API design
- Clean and professional UI
- Loading, empty, and error states
- Auto-generated API documentation via Swagger
- CORS enabled for frontend-backend communication

---

## 📂 Project Structure

```
├── backend
│ ├── app
│ │ ├── main.py
│ │ ├── database.py
│ │ ├── models.py
│ │ ├── schemas.py
│ │ ├── crud.py
│ │ └── routes
│ ├── requirements.txt
│ └── .env.example
│
├── frontend
│ ├── src
│ │ ├── api
│ │ ├── components
│ │ ├── pages
│ │ └── App.jsx
│ └── package.json
│
└── README.md
```



---

## 🚀 Running the Project Locally

### Backend Setup

```bash
cd backend
python -m venv venv
source venv/Scripts/activate
pip install -r requirements.txt
uvicorn app.main:app --reload

The backend will be available at:
http://localhost:8000

Swagger API documentation:
http://localhost:8000/docs


```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev

The frontend will run at:
http://localhost:5173

```


