# TaskLink

🚀 **Live Site:** [https://tasklink-auth.web.app/](https://tasklink-auth.web.app/)  

TaskLink is a freelance task marketplace where users can **post, browse, bid**, and **manage freelance tasks** with ease. Designed with a modern, mobile-responsive UI and packed with essential features for both task creators and freelancers.

---

## 🔥 Key Features

- 🔐 **Authentication System**: Email/password login with Google OAuth and strong password validation.
- 📝 **CRUD Functionality**: Add, update, delete tasks, with live feedback using SweetAlert and toast notifications.
- 🔍 **Task Browsing and Bidding**: Explore all tasks with deadline-based sorting and bid tracking.
- 🛡️ **Private Routes**: Protected pages like "Add Task", "My Posted Tasks", and "Task Details" are accessible only when logged in.
- 🎨 **Modern Design + Theme Toggle**: Includes a dark/light mode toggle and premium animated elements using `lottie-react` and `framer-motion`.

---

## 🧭 Navigation Structure

- **Home**  
  - Slider Banner  
  - Featured Tasks  
  - About Us / How It Works / Trusted Clients (Extra Sections)
- **Add Task** 🔐  
- **Browse Tasks**  
- **My Posted Tasks** 🔐  
- **Login / Signup / Logout**  
- **404 Page**  

---

## 📱 Responsiveness

- ✅ Mobile View
- ✅ Tablet View
- ✅ Desktop View  
Using Tailwind CSS to ensure full responsiveness across all devices.

---

## 🔒 Authentication Details

- **Register**: Name, Email, Photo URL, Password (with validation)
- **Login**: Email, Password, Google Login
- 🔁 Conditional navbar: Changes based on auth state
- 🧠 Hover Tooltip: Shows user display name on hover over profile image

---


## 📦 Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/SaudaTusSahadia/TaskLink.git
   cd TaskLink
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**
   - Copy `.env.example` to `.env.local` and fill in your Firebase and backend API credentials.

4. **Start the development server:**
   ```sh
   npm run dev
   ```

---


## 🛠️ Technology Stack

### Client Side
- `React 19`, `TailwindCSS 4`
- `React Router 7`, `Lottie React`, `Framer Motion`
- `Firebase Authentication`, `React Toastify`, `SweetAlert2`
- `SwiperJS`, `React CountUp`, `React Icons`

### Server Side
- `Express.js`, `MongoDB`, `Vercel Deployment`
- Routes for: Add Task, Get Tasks, Update, Delete, Bid Count, Filter by user

---
