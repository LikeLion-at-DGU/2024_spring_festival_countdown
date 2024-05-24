/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        font: {
          head: "#151515",
          body: "#474747",
          info: "#929292",
          disable: "#C4C4C4",
          white: "#FFFFFF",
        },
        stroke: { main: "#C9CAD3", disable: "#E2E3EC", whiet: "#FFFFFF" },
        background: { main: "#FFFFFF", deep: "#F1F1F1", section: "#FBFBFB" },
        main: { 100: "#FA9487", 400: "#F97C69", 900: "#F7634E" },
      },
      boxShadow: {
        "app-wrapper": "0px 0px 10px 0px rgba(41, 41, 41, 0.25)",
      },
    },
  },
  plugins: [],
};
