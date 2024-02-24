/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "primary-110": "#19162d",
      "primary-100": "#2a254b",
      "primary-90": "#534f6e",
      "primary-25": "#cccbd7",
      "primary-10": "#e1e0e9",
      "neutral-100": "#09080d",
      "neutral-90": "#16141c",
      "neutral-80": "#25222b",
      "neutral-70": "#524f59",
      "neutral-30": "#b9b8bd",
      "neutral-20": "#cccbd0",
      "neutral-10": "#e5e4e7",
      "neutral-05": "#f1f0f3",
      white: "#f9f9f9",
      "success-100": "#108575",
      "success-110": "#0a5046",
      "success-90": "#349c8e",
      "success-25": "#a1e1d8",
      "success-10": "#b3ece5",
      "error-100": "#db3939",
      "error-110": "#832222",
      "error-90": "#e26161",
      "error-25": "#f8d7d7",
      "error-10": "#fbebeb",
      "warning-100": "#f7c04b",
      "warning-110": "#9e7a2d",
      "warning-90": "#f9cd6f",
      "warning-25": "#fdf2db",
      "warning-10": "#fef9ed",
      "transparent-15": "#f9f9f9",
      "transparent-30": "#f9f9f9",
    },
    fontFamily: {
      headings: ["Montserrat", "sans"],
      body: ["DM Sans", "sans"],
    },
    fontSize: {
      sm: ["0.875rem", "150%"],
      md: ["1rem", "150%"],
      lg: ["1.125rem", "150%"],
      xl: ["1.25rem", "150%"],
      "2xl": ["1.5rem", "150%"],
      "3xl": ["2rem", "150%"],
      "4xl": ["2.25rem", "150%"],
    },
    extend: {},
  },
  plugins: [],
};
