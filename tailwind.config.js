/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'card-pulse': 'cardPulse 3s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'border-pulse': 'borderPulse 3s ease-in-out infinite',
        'darken': 'darkenBackground 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};