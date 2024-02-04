/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: [
      "pastel",
      {
        mytheme: {
          "primary": "#181034",
          "secondary": "#6AA6B2",
          "accent": "#d946ef",
          "neutral": "#262626",
          "base-100": "#110D23",
          "info": "#0098ff",
          "success": "#7ece00",
          "warning": "#ff8c00",
          "error": "#ff7b81",
        },
      },
   

    ],
    darkTheme: "mytheme"
  },
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}

