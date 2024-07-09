/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%": { opacity: 0 },
          "100%": {
            opacity: 1,
          },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in",
      },
    },
  },
  plugins: [],
};
