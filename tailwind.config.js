/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        script: ['"Dancing Script"', 'cursive'],
      },
      colors: {
        cream: {
          50: '#fdfbf7',
          100: '#faf6ee',
          200: '#f5ecd9',
          300: '#ecdcc0',
          400: '#ddc49a',
        },
        brown: {
          400: '#a07b58',
          500: '#8a5a3c',
          600: '#6f4528',
          700: '#563420',
          800: '#3d2418',
          900: '#2a1810',
        },
        gold: {
          300: '#e8c878',
          400: '#dcb04f',
          500: '#c89a3a',
          600: '#a87d2c',
        },
        ember: {
          400: '#e8763a',
          500: '#d85f25',
          600: '#c04a18',
          700: '#9c3a12',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease forwards',
        'slide-up': 'slideUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
};
