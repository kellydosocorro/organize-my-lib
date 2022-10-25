/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        main: {
          primary: "#67E8F9",
          secondary: "#bf00bf",
          accent: "#f411b8",
          neutral: "#e3dada",
          "base-100": "#fcfcfc",
          info: "#4DACC7",
          success: "#46D883",
          warning: "#F1C946",
          error: "#F33630",
        },
      },
    ],
  },
  plugins: [
    require("daisyui")
  ],
};
