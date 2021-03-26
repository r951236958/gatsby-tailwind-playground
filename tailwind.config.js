const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: true, // 開發環境預設關閉，NODE_ENV設置production時啟用
    // preserveHtmlElements: false, // 保留HTML元素，預設true，如需禁用此功能設置為false
    content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  },
  //purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      inset: {
        '-0.05': '-0.05rem',
      },
      transformOrigin: {
        0: '0%',
      },
      zIndex: {
        '-1': '-1',
      },
      spacing: {
        '10px': '10px',
        '20px': '20px',
        '60px': '60px',
        '210px': '210px',
        120: '120px',
        100: '100px',
        200: '200px',
        210: '210px',
        300: '300px',
        400: '400px',
        500: '500px',
        600: '600px',
      },
      transitionDelay: {
        0: '0ms',
      },
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        'main-text': 'var(--text-main)',
        'secondary-text': 'var(--text-secondary)',
        lightBlue: colors.lightBlue,
        darkBlue: {
          50: '#f4f7fa',
          100: '#eaf0f4',
          200: '#c9d9e4',
          300: '#a9c2d4',
          400: '#6994b4',
          500: '#286694',
          600: '#245c85',
          700: '#1e4d6f',
          800: '#183d59',
          900: '#143249',
        },
        paper: {
          50: '#f6f6f6',
          100: '#ececec',
          200: '#d0d0d0',
          300: '#b3b3b3',
          400: '#7b7b7b',
          500: '#424242',
          600: '#3b3b3b',
          700: '#323232',
          800: '#282828',
          900: '#202020',
        },
        dark: {
          50: '#f5f5f5',
          100: '#eaeaea',
          200: '#cbcbcb',
          300: '#acacac',
          400: '#6e6e6e',
          500: '#303030',
          600: '#2b2b2b',
          700: '#242424',
          800: '#1d1d1d',
          900: '#181818',
        },
        blueGray: colors.blueGray,
        orange: colors.orange,
        amber: colors.amber,
        lime: colors.lime,
        teal: colors.teal,
        cyan: colors.cyan,
      },
      borderWidth: {
        1: '1px',
      },
      opacity: {
        15: '0.15',
        35: '0.35',
        45: '0.45',
        55: '0.55',
        65: '0.65',
        85: '0.85',
        100: '1',
      },
    },
  },
  variants: {
    extend: {
      float: ['hover', 'focus'],
      overflow: ['hover', 'focus'],
      inset: ['hover', 'focus'],
      zIndex: ['hover', 'active'],
      flexWrap: ['hover', 'focus'],
      flexDirection: ['hover', 'focus'],
      flex: ['hover', 'focus'],
      flexGrow: ['hover', 'focus'],
      flexShrink: ['hover', 'focus'],
      textAlign: ['hover', 'focus'],
      width: ['hover', 'focus'],
      minWidth: ['hover', 'focus'],
      maxWidth: ['hover', 'focus'],
      height: ['hover', 'focus'],
      minHeight: ['hover', 'focus'],
      maxHeight: ['hover', 'focus'],
      backgroundAttachment: ['hover', 'focus'],
      backgroundColor: ['active', 'checked'],
      backgroundOpacity: ['active'],
      backgroundPosition: ['hover', 'focus'],
      backgroundSize: ['hover', 'focus'],
      backgroundImage: ['hover', 'focus'],
      gradientColorStops: ['active', 'group-hover', 'dark', 'hover', 'focus'],
      placeholderColor: ['dark', 'focus'],
      divideColor: ['group-hover', 'dark'],
      borderColor: [
        'dark',
        'group-hover',
        'focus-within',
        'hover',
        'focus',
        'active',
        'checked',
      ],
      borderOpacity: ['dark', 'group-hover', 'active'],
      boxShadow: ['dark', 'group-hover', 'active'],
      opacity: ['dark', 'group-hover', 'active'],
      textColor: ['dark', 'group-hover', 'active'],
      textDecoration: ['dark', 'group-hover', 'active'],
      textOpacity: ['dark', 'group-hover', 'active'],
      scale: ['dark', 'focus-within'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
  corePlugins: {
    ringWidth: false,
    ringColor: false,
    ringOffsetWidth: false,
    ringOffsetColor: false,
  },
}
