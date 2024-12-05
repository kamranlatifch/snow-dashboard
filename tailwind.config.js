/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: 'true',
      padding: '4.375rem',
    },
    screens: {
      xl: '1440px',
    },
    fontFamily: {
      inter: ['Inter'],
    },
    extend: {
      colors: {
        base: '#FFFFFF',
        lightMist: '#F7F9FB',
        frostedMist: '#E5ECF680',
        black: '#1C1C1C',
        softBlack: '#0000000D',
        periwinkleGlow: '#C6C7F8',
        text_primary: '#1C1C1C',
        text_secondary: '#00000066',
        text_secondary_light: '#00000033',
        text_light: '#FFFFFF',
        text_blue: '#8A8CD9',
        text_gray: '#00000066',
        text_green: '#4AA785',
        text_yellow: '#FFC555',
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderColor: {
        border_primary: '#0000001A',
        borderBlack: '#1C1C1C',
      },
      boxShadow: {
        primaryShadow: '0px 40px 64px -32px #0F0F0F1A',
      },
      backgroundImage: {
        'hero-bg': "url('/src/assets/images/HeroBg.png')",
        'testimonial-bg': "url('/src/assets/svgs/TestimonialBg.svg')",
        'custom-gradient':
          'linear-gradient(180deg, #F4F5F6 87.16%, rgba(244, 245, 246, 0) 137.55%)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
