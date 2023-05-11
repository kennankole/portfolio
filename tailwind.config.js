/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    'path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      spacing: {
        112: '28rem',
        128: '32rem',
      },
    },
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      // DEFAULT: '0.25rem',
      // DEFAULT: '4px',
      md: '0.375rem',
      lg: '0.9rem',
      full: '9999px',
      large: '15px',
    },
  },
  plugins: [],
});
