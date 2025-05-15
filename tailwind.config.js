/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", // Inclure tous les fichiers de composant Qwik
    "./index.html",
  ],
  darkMode: "class", // Pour le mode jour/nuit
  theme: {
    extend: {
      colors: {
        primary: "#e5c263",
        secondary: "#d68614",
        accent: "#d5701c",
        danger: "#d85512",
        dark: "#251605",
        brown: "#683e10",
        deepbrown: "#251605;",
        black: "#0c0b0b",
        white: "#fff",
      },
    },
    animation: {
      'chair-rocking': 'chair-rocking 3s ease-in-out infinite',
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
