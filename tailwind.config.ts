import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        lg: "80px",
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1200px",
      },
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    extend: {
      colors: {
        white: {
          1: '#E5E5E5',
          DEFAULT: '#FFFFFF',
          90: '#E4E4E7',
          95: '#F1F1F3',
          97: '#F7F7F8',
          99: '#FCFCFD',
        },
        black: '#000000',
        green: {
          60: '#CAFF33',
          65: '#D1FF4C',
          70: '#D8FF66',
          80: '#E5FF99',
          90: '#F2FFCC',
          95: '#F8FFE5',
          97: '#FBFFEF',
        },
        grey: {
          10: '#191919',
          11: '#1C1C1C',
          15: '#262626',
          20: '#333333',
          30: '#4C4C4D',
          35: '#59595A',
          40: '#656567',
          60: '#8D8D8A',
          70: '#B0B0B3',
          75: '#EFEFF0',
        },
      },
    },
  },
  plugins: [],
};

export default config;
