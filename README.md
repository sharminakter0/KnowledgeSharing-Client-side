
# 📚 Knowledge Sharing Platform

A full-stack MERN application that allows users to create, explore, and share educational and technical articles.

The platform encourages knowledge exchange through interactive features such as likes, comments, and category-based article browsing. It provides a collaborative environment where users can publish their knowledge, discover new ideas, and engage with other contributors.

---

## 🌐 Live Demo

🔗 **Live Website:** [Visit Knowledge Sharing Platform](https://assi11-knowledge-sharing.web.app)

## 📸 Project Preview

<p align="center">
  <img
    src="https://i.ibb.co.com/WvmCY75X/Screenshot-2026-11-18-185003.png"
    width="90%"
    alt="Knowledge Sharing Platform Screenshot"
  />
</p>

---

## 🎯 Project Purpose

The purpose of this platform is to create a collaborative knowledge-sharing community where users can publish articles, exchange ideas, and learn from one another.

It covers multiple topics, including Technology, Science, and Arts, while encouraging meaningful discussions and highlighting active contributors.

The platform aims to make sharing and discovering educational content easier through an interactive and user-friendly experience.

---

## ✨ Key Features

- 🔐 **User Authentication:** Secure Email/Password and Google login using Firebase.
- 📝 **Article Management:** Create, read, update, and delete articles.
- 🗂️ **Category Filtering:** Browse articles by category with server-side filtering.
- ❤️ **Interactive Engagement:** Like and comment on articles.
- 👤 **My Articles:** Manage your own published articles.
- 🔒 **JWT Authentication:** Secure private routes and API endpoints.
- 🌙 **Dark & Light Mode:** Switch between different themes.
- 📱 **Responsive Design:** Optimized for desktop, tablet, and mobile devices.
- 🎨 **Smooth Animations:** Interactive UI animations using Framer Motion and AOS.
- 🚫 **Custom 404 Page:** User-friendly error page for unavailable routes.
- 🔄 **State Management:** Manage application state using Redux.

---

## 🛠️ Technology Stack

### 🎨 Frontend

- React.js
- React Router DOM
- Tailwind CSS
- Firebase Authentication
- Framer Motion
- AOS
- Redux

### ⚙️ Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- CORS
- dotenv

### 🔧 Tools & Services

- Firebase
- Git & GitHub
- npm
- MongoDB Atlas

---

## 📦 Dependencies

The following are the main packages and libraries used in the project.

### Client-side Dependencies

| Package | Purpose |
|---|---|
| `react` | Building reusable UI components |
| `react-dom` | Rendering React components |
| `react-router-dom` | Managing application routing |
| `firebase` | User authentication |
| `tailwindcss` | Responsive UI styling |
| `framer-motion` | Creating smooth UI animations |
| `aos` | Adding scroll-based animations |
| `@reduxjs/toolkit` | Managing application state |
| `react-redux` | Connecting Redux with React components |

### Server-side Dependencies

| Package | Purpose |
|---|---|
| `express` | Creating RESTful APIs |
| `mongodb` | Connecting to and interacting with MongoDB |
| `mongoose` | Managing MongoDB data through schemas and models |
| `jsonwebtoken` | Generating and verifying JWT tokens |
| `cors` | Handling cross-origin requests |
| `dotenv` | Managing environment variables |

**Note:** Verify the package names against your actual client and server `package.json` files. Keep only the dependencies installed and used in your project.

---

## 💡 Why I Used These Technologies

- **React.js:** Used to build reusable components and create an interactive user interface.
- **React Router DOM:** Used to navigate between different pages without reloading the application.
- **Tailwind CSS:** Used to create a responsive and consistent design efficiently.
- **Firebase Authentication:** Used to provide Email/Password and Google login functionality.
- **Framer Motion:** Used to create smooth animations and improve user interactions.
- **AOS:** Used to add scroll-based animations to different sections.
- **Redux:** Used to manage shared application state and simplify state handling.
- **Node.js:** Used as the JavaScript runtime environment for the backend.
- **Express.js:** Used to create RESTful APIs and handle client-server communication.
- **MongoDB:** Used to store and manage articles, users, comments, and other application data.
- **Mongoose:** Used to define database schemas and simplify MongoDB operations.
- **JWT:** Used to verify authenticated users when accessing protected API endpoints.
- **CORS:** Used to allow communication between the frontend and backend hosted on different origins.
- **dotenv:** Used to manage sensitive configuration through environment variables.

---

## 🔒 Authentication & Security

- Firebase Authentication for user registration and login.
- Email/Password and Google authentication.
- JWT-based authentication for private API routes.
- Protected routes for authenticated users.
- Secure communication between frontend and backend.
- Environment variables for sensitive configuration.

---

## 🧩 Challenges Faced During Development

While developing this project, I worked on several important technical challenges:

- **Authentication Integration:** Integrating Firebase authentication with the backend JWT verification system.
- **Protected API Endpoints:** Ensuring private API routes are accessible only to authenticated users.
- **Article CRUD Operations:** Managing article creation, editing, deletion, and retrieval while keeping the frontend synchronized with the backend.
- **Category-Based Filtering:** Implementing server-side filtering to retrieve articles based on selected categories.
- **Interactive Engagement:** Managing likes and comments associated with individual articles.
- **State Management:** Organizing shared application data and keeping UI components updated using Redux.
- **Responsive UI:** Maintaining a consistent user experience across desktop, tablet, and mobile devices.
- **UI Animations:** Integrating Framer Motion and AOS without affecting the overall user experience.

---

## ✅ Problems Solved Through This Project

Knowledge Sharing Platform addresses several common challenges in online knowledge exchange:

- **Limited Knowledge Sharing:** Provides a centralized platform where users can publish and share educational content.
- **Content Discovery:** Makes it easier to explore articles through category-based filtering.
- **Content Management:** Allows users to create, update, delete, and manage their own articles.
- **Limited Interaction:** Encourages discussions and engagement through likes and comments.
- **Secure Content Access:** Protects private API endpoints through JWT authentication.
- **User Experience:** Provides responsive layouts, theme switching, and smooth animations for better accessibility and usability.
- **Information Exchange:** Creates an environment where people can share ideas and learn from different contributors.

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally.

### 1. Clone the Client Repository

```bash
git clone https://github.com/sharminakter0/KnowledgeSharing-Client-side.git

cd KnowledgeSharing-Client-side

npm install
```

### 2. Clone the Server Repository

Open another terminal:

```bash
git clone https://github.com/sharminakter0/KnowledgeSharing-Server-site.git

cd KnowledgeSharing-Server-site

npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the appropriate client and server directories.

Configure the required credentials according to your source code.

**Client configuration may include:**
- Firebase configuration values.

**Server configuration may include:**
- MongoDB connection string.
- JWT secret.
- Other required server configuration.

Use the exact environment variable names referenced in your source code.

Keep sensitive credentials private. Never upload `.env` files to GitHub.

### 4. Run the Backend Server

Navigate to the server directory and run the development script configured in its `package.json`.

```bash
npm run dev
```

### 5. Run the Frontend Application

Open another terminal, navigate to the client directory, and run:

```bash
npm run dev
```

The application should now be available at the local URL displayed in your terminal.

**Note:** Check the `scripts` section of both `package.json` files. If your project uses a different development command, use that command instead.

---

## 🔗 Project Links

| Resource | Link |
|---|---|
| 🌐 Live Website | [Knowledge Sharing Platform](https://assi11-knowledge-sharing.web.app) |
| 💻 Client Repository | [GitHub Client](https://github.com/sharminakter0/KnowledgeSharing-Client-side) |
| ⚙️ Server Repository | [GitHub Server](https://github.com/sharminakter0/KnowledgeSharing-Server-site) |
| 👩‍💻 Developer GitHub | [sharminakter0](https://github.com/sharminakter0) |
| 💼 LinkedIn | [Connect with me](https://www.linkedin.com/in/sharmin-akter0s/) |
| 🌐 Portfolio | [Visit My Portfolio](https://sharminaktercode.netlify.app/) |

---

## 🔮 Future Improvements

- Real-time notification system.
- Article reading history.
- Interactive quiz system.
- Role-based dashboard management.
- Additional technology categories.
- Admin dashboard for user management.
- Article moderation and management.
- UI/UX improvements and performance optimization.

---

## 👩‍💻 Developer

**Sharmin Akter**

Full-Stack Web Developer

- GitHub: [sharminakter0](https://github.com/sharminakter0)
- LinkedIn: [Connect with me](https://www.linkedin.com/in/sharmin-akter0s/)
- Portfolio: [Visit My Portfolio](https://sharminaktercode.netlify.app/)

---

<p align="center">
  📚 Share Knowledge, Inspire Ideas, and Learn Together!
</p>

<p align="center">
  ⭐ If you find this project interesting, feel free to explore the repository!
</p>
