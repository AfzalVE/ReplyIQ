# ReplyIQ - AI Email Intelligence Platform

ReplyIQ is an AI-powered email intelligence platform that analyzes business emails, generates professional smart replies, detects potential sales leads, scores lead quality, and organizes email history into an intelligent CRM-like dashboard.

The application combines **FastAPI**, **React + TypeScript**, **PostgreSQL**, and **Groq LLM** to automate email understanding and business lead qualification.

---

# Features

## AI Email Analysis

- Analyze incoming business emails using AI.
- Generate professional, context-aware email replies.
- Detect overall email sentiment.
- Classify emails into business categories.
- Extract sales opportunities automatically.
- Assign lead scores from 0–100.
- Determine lead stages (Hot, Warm, Cold, None).

---

## Smart Reply Generation

ReplyIQ generates business-ready replies that:

- Match the sender's tone.
- Are professional and concise.
- Avoid hallucinating missing information.
- Require minimal editing before sending.

---

## Sentiment Analysis

Every email is classified as:

- Positive
- Neutral
- Negative

---

## Email Categorization

Supported categories include:

- Sales
- Support
- Meeting
- HR
- Finance
- Marketing
- Complaint
- Inquiry
- General

---

## Lead Intelligence

ReplyIQ automatically detects whether an email represents a business opportunity.

For every lead it generates:

- Lead Status
- Lead Score (0–100)
- Lead Stage
    - Hot
    - Warm
    - Cold
    - None

---

## Email History

Every analyzed email is stored in the database.

Users can:

- Browse previous analyses
- Search emails
- View AI-generated replies
- Review lead information
- Access historical conversations

---

## Authentication

Secure JWT Authentication includes:

- User Registration
- User Login
- Protected API Routes
- User-specific Email History
- User-specific Leads

Each user only has access to their own analyzed emails.

---

# Tech Stack

## Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Axios

---

## Backend

- FastAPI
- SQLAlchemy
- Pydantic
- JWT Authentication
- PostgreSQL

---

## AI

- Groq API
- Llama Model (via Groq)

---

# Project Structure

```
replyiq/

├── frontend/
│
│   ├── src/
│   │
│   ├── components/
│   ├── pages/
│   ├── api/
│   ├── types/
│   └── App.tsx
│
└── backend/
    │
    ├── app/
    │
    ├── ai/
    ├── core/
    ├── modules/
    │
    │   ├── auth/
    │   ├── user/
    │   └── email/
    │
    └── main.py
```

---

# Backend Modules

## Authentication

- Register
- Login
- JWT Token Generation
- Protected Routes

---

## Users

- User Management
- User Profile
- Relationship with Emails

---

## Email Intelligence

- Email Analysis
- Smart Reply Generation
- Lead Detection
- Lead Scoring
- Email History

---

# AI Analysis Pipeline

Every submitted email goes through the following pipeline:

```
Email

      ↓

Groq LLM

      ↓

Generate Reply

      ↓

Sentiment Analysis

      ↓

Category Classification

      ↓

Lead Detection

      ↓

Lead Score

      ↓

Lead Stage

      ↓

Save to PostgreSQL
```

---

# AI Output

The AI returns a structured JSON object:

```json
{
  "reply": "...",
  "sentiment": "Positive",
  "category": "Sales",
  "lead_status": "Yes",
  "lead_score": 92,
  "lead_stage": "Hot"
}
```

---

# API Endpoints

## Authentication

### Register

```
POST /auth/register
```

### Login

```
POST /auth/login
```

---

## Email

### Analyze Email

```
POST /email/analyze
```

---

### Email History

```
GET /email/history
```

---

### Leads

```
GET /email/leads
```

---

### Hot Leads

```
GET /email/leads/hot
```

---

### Warm Leads

```
GET /email/leads/warm
```

---

### Cold Leads

```
GET /email/leads/cold
```

---

# Database

## Users

| Column | Type |
|---------|------|
| id | Integer |
| name | String |
| email | String |
| password | String |
| created_at | DateTime |

---

## Emails

| Column | Type |
|---------|------|
| id | Integer |
| user_id | Integer |
| sender | String |
| subject | String |
| email_body | Text |
| smart_reply | Text |
| sentiment | String |
| category | String |
| lead_status | String |
| lead_score | Integer |
| lead_stage | String |
| created_at | DateTime |

---

# Frontend Features

- Login & Registration
- JWT Authentication
- Protected Routes
- Email Analyzer
- Email History Dashboard
- Lead Dashboard
- Search Functionality
- Email Details Modal
- Logout Confirmation Modal

---

# Installation

## Backend

```bash
pip install -r requirements.txt
```

Run the backend:

```bash
uvicorn app.main:app --reload
```

---

## Frontend

```bash
npm install
```

Run the frontend:

```bash
npm run dev
```

---

# Environment Variables

Example `.env`

```env
DATABASE_URL=postgresql://username:password@localhost/replyiq

GROQ_API_KEY=YOUR_GROQ_API_KEY

JWT_SECRET=YOUR_SECRET_KEY

JWT_ALGORITHM=HS256

JWT_EXPIRE_DAYS=7
```

---

# Future Improvements

- Refresh Token Authentication
- Password Reset
- OAuth Login (Google/Microsoft)
- AI Email Summarization
- Attachment Analysis
- Contact Management
- Company Detection
- CRM Integration
- Email Thread Analysis
- Team Collaboration
- Dashboard Analytics
- Lead Conversion Tracking
- Export to CSV/Excel
- Role-Based Access Control (RBAC)
- Email Templates
- Follow-up Recommendations

---

# License

This project is intended for educational and demonstration purposes. Review the licenses and terms of service for all third-party services (including the AI provider) before using it in production.