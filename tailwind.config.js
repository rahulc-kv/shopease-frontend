module.exports = {
  // purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
  content: ['./pages/**/*.tsx', './src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        toryBlue: '#1746A2',
        primary: '#01859A'
      },
      fontFamily: {
        fingerPaint: ['Finger Paint'],
        sourceSans3: ['Source Sans 3']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
