# 🚀 SubSense AI – Autonomous Financial Copilot

> **Predict. Save. Stay Ahead.**  
> An AI-powered financial assistant that automatically scans bills, tracks subscriptions, predicts future expenses, and helps users make smarter financial decisions before they lose money.

---

## 📖 Table of Contents

- Overview
- Problem Statement
- Features
- Tech Stack
- System Architecture
- Folder Structure
- Installation
- Environment Variables
- Running the Project
- API Endpoints
- Database Design
- AI Workflow
- Future Enhancements
- Team
- License

---

# 🌟 Overview

Managing subscriptions and recurring bills has become increasingly difficult. People often forget about active subscriptions, miss payment reminders, or continue paying for services they no longer use. Existing expense trackers only record transactions after they happen—they don't proactively help users avoid unnecessary spending.

**SubSense AI** is an intelligent financial copilot that automatically extracts information from receipts and bills using OCR, detects recurring subscriptions, predicts future expenses with AI, and provides personalized financial recommendations. Instead of simply tracking expenses, SubSense AI helps users understand, optimize, and reduce their spending before money is wasted.

---

# ❗ Problem Statement

Today's users manage multiple recurring expenses including:

- Streaming services
- Cloud storage
- Gym memberships
- Software subscriptions
- Utility bills
- EMIs
- Insurance payments

Common problems include:

- Forgotten subscriptions
- Hidden recurring charges
- No spending predictions
- Manual bill tracking
- Missed renewal dates
- Unnecessary monthly expenses
- Lack of financial insights

These issues lead to avoidable financial losses every month.

---

# 💡 Solution

SubSense AI automates personal financial management using Artificial Intelligence.

The user simply uploads a receipt or bill, and the system automatically:

- Extracts important information using OCR
- Detects recurring subscriptions
- Categorizes expenses
- Predicts future spending
- Calculates monthly subscription costs
- Sends renewal reminders
- Identifies duplicate subscriptions
- Provides AI-powered savings recommendations

---

# ✨ Features

## 📸 Smart Receipt Scanner

- Upload Image or PDF
- OCR-based Text Extraction
- Merchant Detection
- Amount Detection
- Date Recognition
- Category Classification

---

## 💳 Subscription Tracker

Automatically detects recurring subscriptions such as:

- Netflix
- Spotify
- Amazon Prime
- Disney+
- Apple Music
- YouTube Premium
- Adobe Creative Cloud
- Microsoft 365
- And many more...

---

## 📊 Interactive Dashboard

- Total Monthly Spending
- Active Subscriptions
- Upcoming Payments
- Expense Categories
- Recent Bills
- Savings Overview
- Spending Trends

---

## 🔮 AI Expense Prediction

Based on previous spending history, AI predicts:

- Next Month's Expenses
- Upcoming Bills
- Future Subscription Costs
- Spending Trends

---

## 🤖 AI Financial Assistant

Ask questions like:

- How much did I spend this month?
- Which subscriptions should I cancel?
- What is my largest recurring expense?
- How can I reduce my monthly spending?
- Show my entertainment expenses.

---

## 🔔 Smart Notifications

Receive alerts for:

- Upcoming subscription renewals
- Trial expiration
- Bill due dates
- Overspending warnings
- Duplicate subscriptions
- Price increases

---

## 📈 Analytics

Visual reports including:

- Monthly Spending Trend
- Category Breakdown
- Subscription Distribution
- Expense Comparison
- Financial Insights

---

## 🔒 Authentication & Security

- JWT Authentication
- Password Hashing
- Google OAuth Login
- Protected Routes
- Secure API Access

---

# 🛠 Tech Stack

## Frontend

- React.js
- React Router
- Tailwind CSS
- Axios
- Framer Motion
- Chart.js

---

## Backend

- Node.js
- Express.js
- JWT Authentication
- bcrypt
- Multer
- Nodemailer

---

## Database

- MongoDB
- Mongoose

---

## AI & OCR

- Google Gemini API
- OCR Engine
- AI Recommendation System
- Expense Prediction Logic

---

## Development Tools

- Git
- GitHub
- VS Code
- Postman

---

# 🏗️ System Architecture

```
                    User
                      │
                      ▼
             React Frontend
                      │
                REST API Calls
                      │
                      ▼
             Express.js Backend
          ┌───────────┼────────────┐
          │           │            │
          ▼           ▼            ▼
      MongoDB      OCR Engine   Gemini AI
          │           │            │
          └───────────┼────────────┘
                      ▼
              AI Insights & Dashboard
```

---

# 📂 Folder Structure

```
SubSense-AI/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── services/
│   │   └── App.jsx
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── utils/
│   └── server.js
│
├── screenshots/
├── README.md
└── package.json

# 🤖 AI Workflow

```
Upload Receipt
       │
       ▼
OCR Text Extraction
       │
       ▼
Detect Merchant
       │
       ▼
Identify Subscription
       │
       ▼
Store Data in MongoDB
       │
       ▼
Analyze Spending Pattern
       │
       ▼
Gemini AI Processing
       │
       ▼
Generate Predictions
       │
       ▼
Dashboard + Smart Alerts
```

---

# 🎯 Project Highlights

- 🤖 AI-Powered Financial Copilot
- 📸 OCR-Based Receipt Scanning
- 💳 Automatic Subscription Detection
- 📊 Interactive Analytics Dashboard
- 🔮 AI Expense Prediction
- 💬 AI Financial Chat Assistant
- 🔔 Smart Renewal Notifications
- 📈 Spending Insights & Reports
- 🔒 Secure Authentication
- 📱 Fully Responsive Design

---

# 🚀 Future Enhancements

- Gmail Bill Detection
- Bank Statement Integration
- UPI Transaction Analysis
- Investment Portfolio Tracking
- Multi-Currency Support
- Mobile Application
- Voice-Based AI Assistant
- Budget Planning
- Tax Report Generation
- Family Expense Sharing

---

# 👥 Team

| Manvendra Singh | Team Lead • AI Integration • Backend |
| Srishti | Database • API Development |
| Akhil Garg | Frontend • UI/UX • Dashboard Development |

---

# 🤝 Contributing

Contributions are always welcome!

1. Fork the repository
2. Create a new feature branch
3. Commit your changes
4. Push to your branch
5. Create a Pull Request

---

# 📄 License

This project is licensed under the **MIT License**.

---

# ⭐ Support

If you like this project:

⭐ Star this repository

🍴 Fork it

🐛 Report Issues

💡 Suggest New Features

---

## 💙 Built with Passion for Smarter Financial Management

### **"Predict Expenses Before They Predict Your Wallet."**

**SubSense AI — Your Autonomous Financial Copilot**

