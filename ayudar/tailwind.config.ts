import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#1E8F62",
        secondary: "#FFC857",
        lightBlue:"#6AB8E2",
        lightGreen:"#7BD4B3",
        customGrey:"#F7F7F7"
      },
    },
  },
  plugins: [],
};
export default config;
