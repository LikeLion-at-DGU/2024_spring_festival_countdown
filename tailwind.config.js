/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "app-wrapper": "0px 0px 10px 0px rgba(41, 41, 41, 0.25)",
      },
    },
  },
  plugins: [],
};
