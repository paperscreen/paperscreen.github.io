import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        neutral: {
          100: '#f7f7f5',
          200: '#efefeb',
          300: '#d9d9d4',
          400: '#b8b8b2',
          500: '#7f7f78',
          600: '#5f5f59',
          700: '#44443f',
          800: '#2d2d29',
          900: '#121210'
        },
        accent: '#57a66b'
      },
      boxShadow: {
        soft: '0 18px 55px rgba(12, 14, 20, 0.08)'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: [typography]
} satisfies Config;
