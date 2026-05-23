/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium white/light grey theme
        bg: {
          primary: '#FFFFFF',
          secondary: '#F8F9FA',
          tertiary: '#F0F1F3',
        },
        text: {
          primary: '#0F0F1F',
          secondary: '#565B6F',
          tertiary: '#8B91A6',
        },
        // Accent colors
        accent: {
          red: '#EF4444',
          cyan: '#06B6D4',
          purple: '#A78BFA',
          blue: '#3B82F6',
          green: '#10B981',
        },
        // Glass morphism
        glass: '#FFFFFF',
        glow: {
          red: '#EF4444',
          cyan: '#06B6D4',
          purple: '#A78BFA',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out infinite 1s',
        'float-more-delayed': 'float 10s ease-in-out infinite 2s',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'gradient-shift': 'gradient-shift 6s ease infinite',
        'slide-in': 'slide-in 0.6s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'scale-in': 'scale-in 0.5s ease-out',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'float-up': 'float-up 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '25%': { transform: 'translateY(-20px) translateX(15px)' },
          '50%': { transform: 'translateY(-40px) translateX(0px)' },
          '75%': { transform: 'translateY(-20px) translateX(-15px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 15px rgba(167, 139, 250, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(167, 139, 250, 0.6)' },
        },
        'float-up': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'slide-in': {
          'from': { transform: 'translateY(30px)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        'scale-in': {
          'from': { transform: 'scale(0.95)', opacity: '0' },
          'to': { transform: 'scale(1)', opacity: '1' },
        },
      },
      boxShadow: {
        'soft': '0 2px 8px -1px rgba(0, 0, 0, 0.08)',
        'card': '0 4px 12px -2px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 20px 40px -10px rgba(0, 0, 0, 0.15)',
        'premium': '0 10px 30px -10px rgba(0, 0, 0, 0.2)',
        'premium-lg': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'glow-red': '0 0 30px rgba(239, 68, 68, 0.4), inset 0 0 30px rgba(239, 68, 68, 0.1)',
        'glow-cyan': '0 0 30px rgba(6, 182, 212, 0.4), inset 0 0 30px rgba(6, 182, 212, 0.1)',
        'glow-purple': '0 0 30px rgba(167, 139, 250, 0.4), inset 0 0 30px rgba(167, 139, 250, 0.1)',
        'glow-blue': '0 0 30px rgba(59, 130, 246, 0.3), inset 0 0 30px rgba(59, 130, 246, 0.05)',
        'glow-orange': '0 0 30px rgba(251, 146, 60, 0.3), inset 0 0 30px rgba(251, 146, 60, 0.05)',
        'inner-glow': 'inset 0 0 20px rgba(0, 0, 0, 0.05)',
        'floating': '0 8px 24px rgba(0, 0, 0, 0.12)',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(10px)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
    },
  },
  plugins: [],
}
