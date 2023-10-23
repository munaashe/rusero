import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        sm: '640px',    // Small screens (e.g., smartphones)
        md: '768px',    // Medium screens (e.g., tablets)
        lg: '1024px',   // Large screens (e.g., laptops)
        xl: '1280px',   // Extra-large screens (e.g., desktops)
      },
    },
  },
  plugins: [],
}

export default config;
