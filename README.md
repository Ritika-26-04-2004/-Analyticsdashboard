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

---

## Database Schema

**MongoDB Collections:**

1. **Sales**
```json
{
  "_id": ObjectId,
  "product": "string",
  "category": "string",
  "amount": Number,
  "date": Date,
  "status": "string"
}
2. Users
{
  "_id": ObjectId,
  "name": "string",
  "email": "string",
  "joinedDate": Date,
  "status": "active/inactive"
}
3.Revenue
{
  "_id": ObjectId,
  "month": "string",
  "totalRevenue": Number
}
API Endpoints

Base URL: http://localhost:5000/api

Endpoint	Method	Description
/sales	GET	Fetch all sales data
/sales	POST	Add a new sale
/sales/:id	PUT	Update a sale by ID
/sales/:id	DELETE	Delete a sale by ID
/users	GET	Fetch all users
/revenue	GET	Fetch monthly revenue
/products	GET	Fetch product list
/filter	POST	Filter data by date/category/status
<img width="1366" height="768" alt="Screenshot (81)" src="https://github.com/user-attachments/assets/9218cb8e-05c6-42cd-9f3c-75e3ef61a4c9" />
<img width="1366" height="768" alt="Screenshot (80)" src="https://github.com/user-attachments/assets/06c9d504-b3fc-4b13-9644-c149679aeff0" />
<img width="1366" height="768" alt="Screenshot (82)" src="https://github.com/user-attachments/assets/68fc2689-e95b-4adc-918e-b745b3403529" />

