/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['/index.html', './src/**/*.{vue,js,ts,tsk}'],
  theme: {
    extend: {
      colors: {
        'warning-col': '#fcefca',
        'primary-col': '#2F80ED',
        'imp-col': '#F2C94C',
        'input-bg': '#F2F2F2',
        gray: '#4F4F4F',
        gray2: '#E0E0E0',
        gray3: '#D9D9D9',
        red: '#EB5757',
        'price-col': '#85E0AB'
      },
      fontFamily: {
        WorkSans: ['Work Sans'],
        SFPro: ['SF-Pro']
      }
    }
  },
  plugins: []
}
