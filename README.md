# 🛒 MyShop – Ecommerce Web Application

A full-stack ecommerce website built using **React**, **Node.js**, **Express**, and **MongoDB**. This application allows users to register, log in, browse products by category, add items to their cart or wishlist, and checkout. Admins can upload products with images using a dedicated dashboard.

---

## ✨ Features

- 🔐 **Authentication** – Sign up, log in, and JWT-based user sessions
- 🛍️ **Product Categories** – Fashion, Skincare, Gadgets, Groceries, Home Decor, and Sale
- 🛒 **Shopping Cart** – Add/Remove items from cart
- ❤️ **Wishlist Support**
- 📷 **Product Upload with Image Support** – via Multer
- 📰 **News Integration** – Using NewsAPI for demo content
- 🧾 **Checkout Page**
- 👁️‍🗨️ **Password Toggle** – Show/Hide passwords on login & signup

---

## 🛠 Tech Stack

### Frontend
- React.js (Vite)
- Context API
- Axios
- Bootstrap 5
- React Icons

### Backend
- Node.js
- Express.js
- MongoDB (via Mongoose)
- Multer (file upload)
- JWT for authentication
- CORS, dotenv

---

## 🗂️ Project Structure

ecommerce/
├── backend/
│ ├── routes/
│ ├── models/
│ ├── uploads/
│ ├── db.js
│ └── index.js
├── src/
│ ├── components/
│ ├── pages/
│ ├── context/
│ └── App.jsx
├── public/
├── README.md
├── package.json
└── vite.config.js
---

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/myshop.git
cd myshop
Setup Backend
bash
Copy
Edit
cd backend
npm install
