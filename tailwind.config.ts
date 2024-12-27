import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mYellow: "#FFEB3B",
        mBlack: "#212121",
        mBlue: "#81D4FA",
        mGrey: "#F5F5F5",
        mOrange: "#FF7043",
        mGreen: "#C6FF00",
      },
    },
  },
  plugins: [],
} satisfies Config;
