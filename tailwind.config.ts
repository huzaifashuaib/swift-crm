import type { Config } from "tailwindcss";
import {COLORS} from "./src/constants/textColor"
import { BackgroundImage } from "./src/constants/backgroundImage";



const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/(components)/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    extend: {
   
      colors: COLORS,
      backgroundImage:BackgroundImage,
      boxShadow: {
        'custom': '0 4px 10px rgba(0, 0, 0, 0.08)',
      },
      borderWidth: {
        'custom': '0.75px',
      },
      borderColor: {
        'custom-border-color': 'rgba(0, 0, 0, 0.13)',
      },
    },
  },

};
export default config;
