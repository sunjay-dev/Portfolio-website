# 🌐 Sunjay Kumar – Personal Portfolio

This is my personal developer portfolio website built using **REACT JS**, **Tailwind CSS**, and **NODE JS**. It showcases my projects, skills, and experience as a full-stack software engineer.

## 🛠 Tech Stack USED IN WEBSITE

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) 
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) 
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) 
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) 
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

## 🚀 Features

- Responsive design (mobile-first)
- Clean UI built with Tailwind CSS
- simple Animations
- Home,About me, skills, projects , and contact section
- Dark mode ready
- Hosted on Vercel

## 📦 Deployment (Run It Yourself)

To run this portfolio locally:

### 🔐 Frontend `.env`

Create a `.env` file inside the `frontend/` folder:

```env
VITE_BACKEND_EMAIL_URL=http://localhost:3000/api/email
VITE_GITHUB_USERNAME=your-github-username
```

> ✏️ To update portfolio content (like your name, skills, projects, etc.), edit the files inside the `frontend/src/data/` folder.

### 🔐 Backend `.env`

Create a `.env` file inside the `backend/` folder:

```env
PORT=3000
SENDER_EMAIL=your-sender-email@example.com
RECIVING_EMAIL=your-receiving-email@example.com
RESEND_EMAIL_API_KEY=your-resend-api-key
FRONT_END_URL=http://localhost:5173
```

### ▶️ Running Locally

1. **Clone the repository**

   ```bash
   git clone https://github.com/sunjay-dev/Portfolio-website.git
   cd Portfolio-website
   ```

2. **Install dependencies**

   * For frontend:

     ```bash
     cd Frontend
     npm install
     ```

   * For backend:

     ```bash
     cd backend
     npm install
     ```

3. **Run backend**

   ```bash
   npm run dev
   ```

4. **Run frontend**

   ```bash
   cd ../frontend
   npm run dev
   ```

Your portfolio should now be live at: `http://localhost:5173`

---

## 🎯 Goals
- <del> Apply Dark Theme to components (6/6 done) </del>
- <del> Migrate the website to React.js (100% done)</del>
- Add 3d Feature using Three.js
- Explore and implement Remix.run

## 📜 License
This project is open-source and available under the MIT License.
