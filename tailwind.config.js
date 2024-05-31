const { Poppins } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      Poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      container: {
        center: true,
        padding: '16px',
      },
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      colors: {
        primary: '#2D918C',
        active: '#1E615D',
        secondary: '#257975',
        accent: '#267975',
        accent1: '#96C8C5',
        accent2: '#73B6B2',
        accent3: '#50A39F',
        accent4: '#091D1C',
        background: '#B9DAD9',
        dark: '#0f172a',
        light: '#D5E9E8',
        abu: '#EDEDED',
        abu1: '#EAEDED',
        white1: '#F9F9F9',
        stroke: '#9AD3D0',
        stroke1: '#9F9F9F',
        stroke2: '#BDBEBE',
        danger: '#BC0000',
      },
      screens: {
        '2xl': '1320px',
      },
      backgroundImage: {
        'paper-patern': 'url("/public/image/bg_paper.svg")',
      }
    },
  },
  plugins: [],
};
