# Team Page

This project implements a **Team Page for Armatrix** as part of the Software Development Intern assignment.

It consists of:

- **FastAPI backend** that exposes REST APIs to manage team members.
- **Next.js frontend** that fetches the API and displays the team members.

The goal of the project is to simulate a **real company team page** with a clean UI and responsive layout.

---

# Live Demo

Frontend (Vercel):  
`https://team-page-dusky-phi.vercel.app/`

Backend API (Render / Railway):  
`https://team-page-tlit.onrender.com/`

Example API Endpoint:

```
GET /api/team/
```

---

# Tech Stack

## Frontend
- React
- Next.js
- Tailwind CSS
- Framer Motion (simple animations)

## Backend
- Python
- FastAPI
- Pydantic

## Deployment
- Frontend → Vercel
- Backend → Render / Railway

---

# Features

## Backend
- FastAPI REST API
- CRUD operations for team members
  - Get all team members
  - Get a single member
  - Add a new member
  - Update a member
  - Delete a member
- CORS enabled for frontend communication
- Data stored **in-memory** for simplicity

## Frontend
- `/team` page that displays all team members
- Fetches data dynamically from the backend
- Responsive layout for mobile and desktop
- Clean and minimal card-based design
- Hover effects and small animations
- Loading and error handling states

---

# Team Member Schema

The backend uses a simple schema for team members.

Fields used:

```
id
name
role
bio
photo_url
linkedin
department
```

Example JSON response:

```json
{
  "id": 1,
  "name": "Arjun Mehta",
  "role": "Founder & CEO",
  "bio": "Building secure infrastructure for the modern internet.",
  "photo_url": "https://randomuser.me/api/portraits/men/1.jpg",
  "linkedin": "https://linkedin.com",
  "department": "Leadership"
}
```

---

# Project Structure

```
armatrix-team-page
│
├── backend
│   ├── app
│   │   ├── main.py
│   │   ├── routes
│   │   │   └── team_routes.py
│   │   ├── services
│   │   │   └── team_service.py
│   │   ├── schemas
│   │   │   └── team_schema.py
│   │   └── database
│   │       └── db.py
│   └── requirements.txt
│
└── frontend
    ├── app
    │   └── team
    │       └── page.tsx
    ├── components
    │   ├── TeamCard.tsx
    │   └── TeamGrid.tsx
    └── types
        └── team.ts
```

---

# Backend Setup

### 1. Navigate to backend folder

```
cd backend
```

### 2. Create virtual environment

```
python -m venv venv
```

### 3. Activate environment

Windows:

```
venv\Scripts\activate
```

Mac/Linux:

```
source venv/bin/activate
```

### 4. Install dependencies

```
pip install -r requirements.txt
```

### 5. Run FastAPI server

```
uvicorn app.main:app --reload
```

Backend runs at:

```
http://127.0.0.1:8000
```

API docs:

```
http://127.0.0.1:8000/docs
```

---

# Frontend Setup

### 1. Navigate to frontend folder

```
cd frontend
```

### 2. Install dependencies

```
npm install
```

### 3. Run development server

```
npm run dev
```

Frontend runs at:

```
http://localhost:3000
```

Team page:

```
http://localhost:3000/team
```

---

# Design Decisions

## Simple and Clean UI
The UI is intentionally kept **simple and minimal** because a team page should focus on highlighting the members of the company clearly.

The design prioritizes:
- readability
- clarity
- professional presentation of team members

## In-Memory Data Storage
Team member data is stored **in-memory** for simplicity and quick setup.

This keeps the backend lightweight while still demonstrating full REST API functionality.

## Modular Backend Structure
Backend code is organized into:

- routes
- services
- schemas
- database

This makes the project easier to maintain and extend.

## Responsive Layout
Tailwind CSS grid is used to ensure the page works smoothly across:

- mobile devices
- tablets
- desktops

## Subtle Animations
Small animations and hover effects are added to improve user experience without distracting from the content.

---

# Future Improvements

Potential enhancements:

- Add database (PostgreSQL / SQLite)
- Admin dashboard for managing team members
- Image upload for profile photos
- Search and filtering
- Pagination for large teams

---

# Author

Harsh Kabra
