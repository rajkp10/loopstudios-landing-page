/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
        black: "hsl(0, 0%, 0%)",
        "dark-gray": "hsl(0, 0%, 55%)",
        "very-dark-gray": "hsl(0, 0%, 41%)",
      },
      fontFamily: {
        alata: "'Alata', sans-serif",
      },
      backgroundImage: {
        bgHeroMobile:
          "linear-gradient(to right, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.1) 100%),url('/src/images/mobile/image-hero.jpg')",
        bgHeroDesktop:
          "linear-gradient(to right, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.3) 100%),url('/src/images/desktop/image-hero.jpg')",
        bgPlaceholder: "url('/src/images/mobile/image-hero.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
