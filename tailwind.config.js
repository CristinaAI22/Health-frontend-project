/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#264061",
        accent: "#FC842D",
        background: "#F0F1F3",
        textMain: "#212121",
        textSecondary: "#9B9FAA",
      },
      fontFamily: {
        sans: ["Verdana", "sans-serif"],
      },
      borderRadius: {
        button: "30px",
        card: "10px",
      },
      fontSize: {
        xs: "14px",
        sm: "18px",
        base: "26px",
        lg: "34px",
        xl: "48px",
      },
      spacing: {
        section: "60px",
        card: "20px",
        gap: "16px",
      },
    },
  },
  plugins: [],
};
