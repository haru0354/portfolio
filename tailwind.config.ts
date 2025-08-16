import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "slide-out-elliptic-right-bck":
          "slide-out-elliptic-right-bck 0.7s cubic-bezier(0.550, 0.085, 0.680, 0.530)   both",
        "slide-out-elliptic-bottom-bck":
          "slide-out-elliptic-bottom-bck 0.7s cubic-bezier(0.550, 0.085, 0.680, 0.530)   both",
      },
      keyframes: {
        "slide-out-elliptic-bottom-bck": {
          "0%": {
            transform: "translateY(0) rotateX(0) scale(1)",
            "transform-origin": "50% -1400px",
            opacity: "1",
          },
          to: {
            transform: "translateY(600px) rotateX(30deg) scale(0)",
            "transform-origin": "50% 100%",
            opacity: "1",
          },
        },
        "slide-out-elliptic-right-bck": {
          "0%": {
            transform: "translateX(0) rotateY(0) scale(1)",
            "transform-origin": "-1800px 50%",
            opacity: "1",
          },
          to: {
            transform: "translateX(1000px) rotateY(-30deg) scale(0)",
            "transform-origin": "-100% 50%",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
