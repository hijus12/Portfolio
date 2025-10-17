import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 2s ease-in-out infinite' ,
      },


      keyframes: {
        wiggle: {
          "0%": {transform: 'translateX(-100px)'},
          "100%": {transform: 'translateX(0)'},
        },
      },
    }

  },
  plugins: [require("daisyui")],
  
};
