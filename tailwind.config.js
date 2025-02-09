/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8ecae6",
        secondary: "#219ebc",
        accent: "#023047",
        background: "#ffb703",
        secBackground: "#fb8500",
      },
    },
  },
  plugins: [require("daisyui")],
};
