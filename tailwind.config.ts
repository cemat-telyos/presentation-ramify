import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slides/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ramify: {
          gold500: "#EFC27E",
          grey900: "#1E1E1E",
          gold100: "#F8F7F7",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        serif: ["PP Fragment Serif", "Georgia", "serif"],
        sans: ["PP Fragment Sans", "Helvetica Neue", "sans-serif"],
      },
      backgroundImage: {
        "gradient-essential": "linear-gradient(135deg, #F8F7F7, #D9D6D2)",
        "gradient-flagship": "linear-gradient(135deg, #989591, #726F6B)",
        "gradient-elite": "linear-gradient(135deg, #EFC27E, #856432)",
        "gradient-green": "linear-gradient(135deg, #E2F0CF, #879373)",
      },
    },
  },
  plugins: [],
};

export default config;
