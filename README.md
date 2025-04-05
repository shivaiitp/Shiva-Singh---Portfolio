# 🚀 Shiva Singh - Portfolio

A modern, interactive, and beautifully animated personal portfolio built using **React**, **Tailwind CSS**, and **Framer Motion** — deployed on **Vercel**.

Live Demo: [shiva-singh-portfolio.vercel.app](https://shiva-singh-portfolio.vercel.app)

## 🖼️ Features

- 🌟 Elegant Hero Section with Typewriter & Animated Particles
- 👤 About Section with:
  - Coding profile cards (LeetCode, Codeforces, GFG)
  - Education cards
  - Language proficiency bars
- 💼 Projects Section (showcasing key projects visually)
- 📞 Contact Section
  - Modal & inline contact forms using EmailJS
- 🌀 Smooth Scroll navigation
- 📱 Fully responsive design
- 💡 Light animations with Framer Motion

## 🛠️ Built With

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [EmailJS](https://www.emailjs.com/)
- [Vite](https://vitejs.dev/)
- [Vercel](https://vercel.com/)

## 🔧 Setup Instructions

1. **Clone the repo**
   ```bash
   git clone https://github.com/shivaiitp/Shiva-Singh-Portfolio.git
   cd Shiva-Singh-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run locally**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📦 API Integration

- Uses backend APIs (scrapers) to fetch live coding profile data:
  - ✅ LeetCode
  - ✅ Codeforces
  - ⚠️ GFG (CORS issue in production — fallback UI displayed)

## 📁 Folder Structure

```
├── public
├── src
│   ├── assets
│   ├── components
│   ├── constants
│   ├── redux
│   ├── sections
│   ├── App.jsx
│   └── main.jsx
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## 🌐 Deployment

Deployed via [Vercel](https://vercel.com). Auto-builds on push to `main`.

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

MIT

---

Made with ❤️ by [Shiva Singh](https://shiva-singh-portfolio.vercel.app)
