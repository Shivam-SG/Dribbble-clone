/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        colorChange: {
          '0%': { backgroundColor: '#ffda79' },
          '25%': { backgroundColor: '#ffabe7' },
          '50%': { backgroundColor: '#d2bcf3' },
          '75%': { backgroundColor: '#edf3d8' },
          '100%': { backgroundColor: '#ffda79' },
        },
      },
      animation: {
        colorChange: 'colorChange 8s infinite',
      },
      fontFamily: {
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
