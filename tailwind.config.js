/** @type {import('tailwindcss').Config} */
export default {
  content: ["*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pumpkin: "#FF7D1A",
        peachCream: "#FFEDE0",
        shark: "#1D2025",
        paleSky: "#68707D",
        cadetBlue: "#B6BCC8",
        linkWater: "#F7F8FD",
        white: "#FFFFFF",
        dark: "#000000"
      },
    },
  },
  plugins: [],
};
