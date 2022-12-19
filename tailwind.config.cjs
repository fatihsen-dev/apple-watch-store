/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            light: "#FFFFFF",
            bluev1: "#B6CCDA",
            bluev2: "#C8DCE5",
            blackv1: "#778190",
            blackv2: "#929497",
            turquoisev1: "#58D7C4",
            turquoisev2: "#90C3BC",
            orangev1: "#FFAA9B",
            orangev2: "#F9CAC2",
         },
      },
   },
   plugins: [],
};
