## ⚡ Modern Developer Portfolio
A minimal, accessible, and responsive developer portfolio built with React, Tailwind CSS, and Vite. Features a sleek dark mode interface, interactive animations, and a fully responsive design suitable for all devices.
# 🚀 Features

⚡ Ultra Fast: Built with Vite for instant server start and hot module replacement.
🎨 Modern UI/UX: Clean dark-mode aesthetic with neon teal accents (slate-950 & teal-500).
📱 Fully Responsive: Mobile-first architecture that scales perfectly from phones to 4K screens.
✨ Interactive Elements: Smooth scroll navigation, active section highlighting, and hover effects.
📧 Contact Form: Integrated form UI with validation states (Idle, Sending, Success).
🔧 Easy to Customize: All content is contained within clean data structures for easy updating.

# 🛠️ Tech Stack
- Frontend: React (Hooks for state management)
- Styling: Tailwind CSS v3
- Icons: Lucide React (with custom SVG fallbacks for brand icons)
- Build Tool: Vite
- Linting: ESLint

# 📂 Directory Structure
```
my-portfolio/
├── src/
│   ├── assets/         # Static assets (images, PDFs)
│   ├── App.jsx         # Main application component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles & Tailwind directives
├── public/             # Public assets (favicon, etc.)
├── tailwind.config.js  # Tailwind configuration
└── vite.config.js      # Vite configuration
```
# 🏁 Getting Started
Follow these instructions to set up the project locally on your machine.

**Prerequisites**
- Node.js (v18 or higher recommended)
- npm or yarn
**Installation**
Clone the repository
```
git clone [https://github.com/yourusername/your-repo-name.git](https://github.com/yourusername/your-repo-name.git)
cd your-repo-name
```
Install dependencies
```npm install```
Run the development server
```npm run dev```
Open your browser
Navigate to ```http://localhost:5173``` to view the app.
# ⚙️ Customization
**Update Personal Info**
Open `src/App.jsx` and look for the data objects near the top or within the JSX.
- Navigation: Update navLinks array.
- Skills: Update the skills array inside the Skills section.
- Projects: Update the mapping array in the Projects section.
**Setup Email Functionality**
The current form simulates a successful send.
To make it functional:
Install EmailJS: npm install @emailjs/browser
Create an account at EmailJS.
Update the handleSubmit function in App.jsx with your Service ID and Template ID.

# 🚀 Deployment
This project is optimized for deployment on Vercel or Netlify.Vercel (Recommended)Push your code to GitHub.Import the project into Vercel.Vercel will detect Vite and deploy automatically.NetlifyDrag and drop the dist folder (run npm run build first) or connect via GitHub.
# 🤝 Contributing
Contributions, issues, and feature requests are welcome!Feel free to check the issues page.Fork the ProjectCreate your Feature Branch (git checkout -b feature/AmazingFeature)Commit your Changes (git commit -m 'Add some AmazingFeature')Push to the Branch (git push origin feature/AmazingFeature)Open a Pull Request
# 📝 License
Distributed under the MIT License. See LICENSE for more information.
<div align="center"><sub>Built by <a href="https://github.com/Aline-eng">Aline Nzikwinkunda</a></sub></div>
