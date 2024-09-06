/** @type {import('tailwindcss').Config} */
const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons")

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
    },
    fontFamily: {
      sans: ["lato", "sans-serif"],
    },
    fontSize: {
      "xs": ["10px", "14px"],
      "sm": ["11px", "16px"],
      "base": ["13px", "20px"],
      "lg": ["16px", "24px"],
      "xl": ["20px", "28px"],
      "2xl": ["24px", "32px"],
      "3xl": ["30px", "36px"],
    },
  },
  plugins: [
    iconsPlugin({
      collections: getIconCollections(["mdi"]),
    }),
  ],
}
