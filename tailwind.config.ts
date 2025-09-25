import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{ts,tsx,js,jsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7B5CB0', // violet accent
        },
        dark: {
          DEFAULT: '#0D0D1A', // midnight background
        },
        light: {
          DEFAULT: '#FFFFFF', // soft white
        },
        muted: {
          DEFAULT: '#F5F5F5',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config