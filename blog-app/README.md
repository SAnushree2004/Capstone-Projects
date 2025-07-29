# 📝 Blog Web Application

A simple blog application built with **Node.js**, **Express.js**, **EJS**, and **Bootstrap**. This project allows users to create, view, edit, and delete blog posts — all within a clean, responsive interface.  
**Note:** Posts do **not persist** across sessions, as no database is used.

---

## 🌐 Live Demo

🔗 Deployed on Render - (https://web-blog-app-fygy.onrender.com)  

---

## 🚀 Features

- ✍️ **Post Creation** – Users can create new blog posts via a form.
- 📄 **Post Viewing** – All posts are displayed on the homepage.
- 🛠️ **Post Editing & Deletion** – Users can update or delete existing posts.
- 🎨 **Responsive Styling with Bootstrap** – Clean, mobile-friendly layout using Bootstrap components and classes.

---

## 🛠️ Tech Stack

- **Node.js** – Backend runtime
- **Express.js** – Web server and routing
- **EJS** – Templating engine
- **Bootstrap 5** – UI framework for responsive styling
- **HTML & CSS** – Structure and custom styling

---

## 📁 Project Structure

blog-app/
│
├── public/
│ └── css/
│ └── style.css # Custom styling (in addition to Bootstrap)
│
├── views/
│ ├── home.ejs # Homepage template
│ ├── compose.ejs # Post creation form
│ ├── edit.ejs # Post editing form
│
├── index.js # Entry point and Express server
├── package.json # Project metadata and dependencies
└── .gitignore # Ignoring node_modules


---

## 🖥️ Getting Started (Local Setup)

1. **Clone the repository**
   ```bash
   git clone https://github.com/SAnushree2004/Capstone-Projects.git
   cd Capstone-Projects/blog-app

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the application**
   ```bash
   npm start
   ```

4. **Open your browser and visit:** http://localhost:3000

## ⚙️ Deployment Notes
- Deployed on Render
- `"start"` script defined in `package.json`
- Render auto-installs dependencies and starts the server
- Root directory for deployment: `blog-app`

## ✅ Deliverables
- Node + Express web app
- At least one EJS template for rendering
- At least one CSS file (custom or Bootstrap)
- Bootstrap-based responsive layout

## 📌 Limitations
- ❌ Posts are not stored permanently (no database used)
- 🧩 Easily extendable with MongoDB or other databases

## 📣 Future Improvements

This blog application is a solid foundation for a full-featured blogging platform. Potential enhancements include:

- 🔐 **User authentication and authorization**
- 🗃️ **Persistent storage** using MongoDB or another database
- 🖼️ **Image uploads** for posts
- 🔍 **Search and filter** functionality
- 🧾 **Pagination** for posts

---

💡 *Contributions, suggestions, and feedback are welcome! Feel free to fork the repo and submit a pull request.*

