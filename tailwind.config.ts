import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import { backgroundColors, textColors } from "./app/styles/colors";

export default {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: backgroundColors,
      colors: textColors,
    },
  },
  plugins: [typography],
  darkMode: "class",
} satisfies Config;
