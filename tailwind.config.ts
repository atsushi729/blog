import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to right top, rgb(55, 65, 81), rgb(17, 24, 39), rgb(2, 9, 16))",
      },
    },
  },
  plugins: [typography],
  darkMode: "class",
} satisfies Config;
