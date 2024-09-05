/** @type {import('tailwindcss').Config} */

import withMT from "@material-tailwind/react/utils/withMT";

module.exports = withMT({
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primeColor: "#0C1E4B",
        subColor: "#FFD600",
        textColor: "#2e2e2e",
        textDarkMode: "#FFFFFF",
      },
    },
  },
  plugins: [],
});
