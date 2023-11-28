/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['/index.html', './src/**/*.{vue,js,ts,tsk}'],
  theme: {
    extend: {
      colors: {
        'warning-col': '#fcefca',
        'primary-col': '#2F80ED',
        'imp-col': '#F2C94C',
        'input-bg': '#F2F2F2'
      },
      fontFamily: {
        WorkSans: ['Work Sans'],
        SFPro: ['SF-Pro']
      }
    }
  },
  plugins: []
}
