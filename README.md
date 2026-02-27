# -Analyticsdashboard
# Data Analytics Dashboard

## Project Overview
The **Data Analytics Dashboard** is a full-stack web application built with **React** (frontend) and **Node.js + Express** (backend). It visualizes business data using multiple charts, enabling users to monitor trends and insights effectively.  

The application connects to a **MongoDB** database to fetch data and displays it in the form of **Bar, Line, Pie, Doughnut, and Area charts**. Users can filter data by **date range, category, or status** for better analysis.

---

## Tech Stack
**Frontend:**  
- React.js  
- Chart.js / Recharts (for charts)  
- Axios (for API calls)  
- Tailwind CSS / Bootstrap (for styling)  

**Backend:**  
- Node.js  
- Express.js  
- MongoDB (Mongoose ORM)  
- Cors & dotenv  

**Tools & Deployment:**  
- Git & GitHub  
- Postman (for API testing)  
- Deployment: Vercel / Render / Railway (optional)  

---

## Folder Structure
project-root/
│
├── backend/
│ ├── models/
│ ├── routes/
│ ├── controllers/
│ ├── server.js
│ └── .env
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── services/
│ │ └── App.js
│ └── public/
