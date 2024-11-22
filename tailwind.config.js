/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1140px',
          '2xl': '1340px',
        },
      },
      fontSize: {
        'custom-17': '1.0625rem', // 17px in rem
      },
      keyframes: {
        'slide-up': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      animation: {
        'slide-up': 'slide-up 0.5s ease-out',
        'slide-down': 'slide-down 0.5s ease-out',
      },

      colors: {
        //Hurak primary color   
        primary: {
          DEFAULT: '#0f7c90',
          active: '#085a6a',
          light: '#17a2b8',
        },
        //Hurak primary red color   
        danger: {
          DEFAULT: '#ec5252',
          active: '#da3a3a',
          light: '#f4b2b2',
        },

        warning: {
          DEFAULT: '#F6B100',
          active: '#DFA000',
          light: '#FFF8DD',
        },

        success: {
          DEFAULT: '#17C653',
          active: '#04B440',
          light: '#EAFFF1',
        },

        info: {
          DEFAULT: '#0dcaf0',
          active: '#0aa2c0',
          light: '#9eeaf9',
        },

        secondary: {
          DEFAULT: '#adb5bd',
          active: '#adb5bd',
          light: '#e9ecef',
        },

        light: {
          DEFAULT: '#f8f9fa',
          active: '#e9ecef',
          light: '#ffffff',
        },

        dark: {
          DEFAULT: '#1E2129',
          active: '#111318',
          light: '#F9F9F9',
        },











      },
      backgroundImage: {
        'homebanner': "url('/images/banner.webp')"
      },
      boxShadow: {
        'top': '0 -4px 8px rgba(0, 0, 0, 0.1)', // Customize these values as needed
      },
    },
  },
  plugins: [

  ],
};
