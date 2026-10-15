/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Noto Serif', 'Source Serif 4', 'Georgia', 'serif'],
        sans: ['Be Vietnam Pro', 'Segoe UI', 'system-ui', 'sans-serif']
      },
      colors: {
        ink: '#10161C', panel: '#16202A', panel2: '#1C2A37', jade: '#3CFF3C',
        line: '#2A4A3A', gold: '#FFD24A', sky: '#7FDCFF', seal: '#C8452E',
        paper: '#FFF4E6', mist: '#8A9AA8'
      },
      boxShadow: { jade: '0 0 24px rgba(60,255,60,.12)' }
    }
  },
  plugins: []
}
