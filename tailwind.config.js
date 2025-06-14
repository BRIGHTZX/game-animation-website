/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        circular: ["var(--font-circular)", "sans-serif"],
        general: ["var(--font-general)", "sans-serif"],
        robertMedium: ["var(--font-robert-medium)", "sans-serif"],
        robertRegular: ["var(--font-robert-regular)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
