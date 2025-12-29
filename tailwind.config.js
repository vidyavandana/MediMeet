/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // 👈 enables class-based dark mode
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#f9fafb", // light background
          dark: "#0f172a", // dark background (slate-900)
        },
      },
    },
  },
  plugins: [],
};
