import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"], // Add fallback fonts
        titleFont: ["Montserrat", "sans-serif"], // Add fallback fonts
      },
      colors: {
        primaryColor: "#111111",
        secondaryColor: "#9b59b6",
        bgColor: "#34495e",
      },
      boxShadow: {
        btnShadow: "0px 0px 18px 3px rgba(52, 73, 94, 1)", // Ensure proper spacing
      },
    },
  },
  plugins: [],
};
  
export default config;