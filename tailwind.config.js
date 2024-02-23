/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#2A254B",
        primary: "#4E4D93",
        "light-gray": "#F9F9F9",
        "border-gray": "#EBE8F4",
        "border-dark": "#CAC6DA",
      },
      fontFamily: {
        headings: ["Montserrat", "sans"],
        body: ["DM Sans", "sans"],
      },
      fontSize: {
        sm: ["0.875rem", "150%"],
        md: ["1rem", "150%"],
        lg: ["1.25rem", "150%"],
        "3xl": ["2rem", "150%"],
      },
    },
  },
  plugins: [],
};
