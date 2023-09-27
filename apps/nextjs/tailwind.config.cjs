/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  presets: [require("@acme/tailwind-config")],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#484979",
      metal: "#565584",
      tahiti: "#7DCAF0",
      pink: "#ffdeec",
      "bubble-gum": "#CCB9E9",
      bermuda: "#78dcca",
      black: "#000000",
      myRed: "#cb5c5b",
      yella: "#f4c38e",
      green: "#2D6327",
      plum: "#30043A",
    },
  },
};
