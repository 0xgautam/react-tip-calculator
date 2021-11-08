module.exports = {
  // mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "very-dark-cyan": "hsl(183, 100%, 15%)",
        "dark-grayish-cyan-1": "hsl(186, 14%, 43%)",
        "dark-grayish-cyan": "hsl(184, 14%, 56%)",
        "light-grayish-cyan-1": "hsl(185, 41%, 84%)",
        "light-grayish-cyan": "hsl(189, 41%, 97%)",
        primary: "hsl(172, 67%, 45%)",
      },
      fontFamily: {
        "space-mono": ['"Space Mono"'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
