module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: 'rgb(6 182 212 / var(--tw-bg-opacity))',
              '&:hover': {
                color: '#2c5282',
              },
            },
          },
        },
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateY(0) rotate(-3deg)' },
          '50%': { transform: 'translateY(-10px) rotate(3deg)' },
        },
        wave: {
          '0%, 100%': { transform: 'translateY(0) rotate(0)' },
          '50%': { transform: 'translateY(-10px) rotate(3deg)' },
        }
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
