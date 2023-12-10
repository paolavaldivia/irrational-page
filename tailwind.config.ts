import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Bebas Neue"', ...defaultTheme.fontFamily.sans],
        "bebas-neue": ["Bebas Neue", "sans-serif"],
      },
      fontSize: {
        ...defaultTheme.fontSize,
        "8xl": "10rem",
        "9xl": "12rem",
      },
      colors: {
        "desert-sand": "#e0cda7",
        "dusk-orange": "#eaac8b",
        "twilight-lavender": "#957d95",
        "canyon-red": "#cc8b85",
        "sage-brush": "#b7ad99",
      },
    },
  },
  plugins: [],
} as Config;
