import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": {
            opacity: "0",
            display: "none",
          },
        },
      },
      animation: {
        "fade-out": "fade-out 1s forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
export default config;
