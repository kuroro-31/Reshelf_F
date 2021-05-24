module.exports = {
  mode: 'jit',
  tailwindcss: {
    exposeConfig: true,
  },
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#33C4CC',
        black: '#354247',
        grey: '#86868b',
      },
      backgroundColor: {
        primary: '#33C4CC',
        black: '#354247',
        grey: '#86868b',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
