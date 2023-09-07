import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        basic: ["Montserrat", "sans-serif"],
        secondary: ["Oldenburg", "cursive"],
        braahOne: ["Braah One", "sans-serif"],
      },
      screens: {
        vsm: "400px",
        xmd: "800px",
      },
    },
  },
  plugins: [],
};
export default config;
