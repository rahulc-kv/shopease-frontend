module.exports = {
  // purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
  content: ['./pages/**/*.tsx', './src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        toryBlue: '#1746A2'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
