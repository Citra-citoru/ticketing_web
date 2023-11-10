/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        outline: "0 0 0 2px rgba(0, 0, 0, 0.9)",
      },
      keyframes: {
        slideDown: {
          "0%": { height: "0" },
          "100%": { height: `var(--radix-accordion-content-height)` },
        },
        slideUp: {
          "0%": {
            height: `var(--radix-accordion-content-height)`,
          },
          "100%": {
            height: "0",
          },
        },
      },
      animation: {
        "slide-down": "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        "slide-up": "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-radix")()],
}
