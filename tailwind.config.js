/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,jsx,ts,tsx}"
];
export const theme = {
  extend: {
    colors: {
      petmeOrange: "#FF8C42",
      petmeGold: "#FFD166",
      petmeLight: "#FFF3E6",
    },
  },
};
export const plugins = [];
