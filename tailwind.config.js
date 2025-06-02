/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}" // for shadcn/ui components
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-animate"), // for shadcn/ui animations
    require("daisyui")              // if you're using daisyUI
  ],
};
