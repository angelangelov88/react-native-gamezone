const plugin = require('tailwindcss/plugin');

module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'redhat': ['"Red Hat Display"', 'sans-serif'],
      'ibm': ['"IBM Plex Sans"', 'sans-serif']
    },
    extend: {
      keyframes: {
        // dot1: {  
        //   '0%': { opacity: '0' },
        //   '50%': { opacity: '1' },
        //   '100%': { opacity: '0' },
        // },
        // dot2: {  
        //   '0%': { opacity: '0' },
        //   '50%': { opacity: '1' },
        //   '100%': { opacity: '0' },
        // },
        // dot3: {  
        //   '0%': { opacity: '0' },
        //   '50%': { opacity: '0' },
        //   '100%': { opacity: '1' },
        // },
        // ellipsis: {
        //   from: { width: '2px' },
        //   to: { width: '12px' }
        // },
        dotty: {
          '0%': { opacity: '0' },
          '50%': { opacity: '0.5' },
          '100%': { opacity: '1' }
        },
      },
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }

        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }

        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      boxShadow: {
        "customInner": "0px 2px 6px rgba(0, 0, 0, 0.04) inset, 0px 10px 15px rgba(0, 0, 0, 0.04) inset, 0px -2px 6px rgba(0, 0, 0, 0.04) inset, 0px -10px 15px rgba(0, 0, 0, 0.04) inset",
      },
      colors: {
        'white': '#ffffff',
        'black': '#000000',
        'pink': {
          10: '#FFF0F9',
          20: '#FFE5F5',
          30: '#FABEE2',
          40: '#F5A2D4',
          50: '#FA78C6',
          60: '#F056B2',
          70: '#E043A2',
          80: '#CC2D8C',
          90: '#AD2376',
          100: '#7A1451'
        },
        'red': {
          10: '#FFF0F0',
          20: '#FFE1E0',
          30: '#FFC9C7',
          40: '#FFA19E',
          50: '#FF706B',
          60: '#F64A44',
          70: '#DC2721',
          80: '#C1140E',
          90: '#990500',
          100: '#7A1714'
        },
        'yellow': {
          10: '#FFFCEF',
          20: '#FFF3C2',
          30: '#FCEC9D',
          40: '#FFE561',
          50: '#FAD232',
          60: '#F0B618',
          70: '#CC8904',
          80: '#9E5913',
          90: '#8A3F0E',
          100: '#70350D'
        },
        'green': {
          10: '#EFFFF9',
          20: '#C5FDE8',
          30: '#9DF5D4',
          40: '#72F0C2',
          50: '#57E5B1',
          60: '#46DBAA',
          70: '#33B88C',
          80: '#15946A',
          90: '#177559',
          100: '#125241'
        },
        'teal': {
          10: '#EFFFFC',
          20: '#C5FCF1',
          30: '#A5FAE9',
          40: '#76F5DB',
          50: '#54EBCD',
          60: '#46DBBD',
          70: '#33B8A2',
          80: '#148F7E',
          90: '#17756C',
          100: '#15524C'
        },
        'cyan': {
          10: '#EFFFFF',
          20: '#C5FCFC',
          30: '#A0FAFA',
          40: '#76F5F5',
          50: '#54EBEB',
          60: '#46DBDB',
          70: '#33B3B8',
          80: '#11868F',
          90: '#166A70',
          100: '#11474D'
        },
        'lightblue': {
          10: '#EFFBFF',
          20: '#C7F1FF',
          30: '#9DE4FC',
          40: '#79DBFC',
          50: '#51D3FF',
          60: '#48C5F0',
          70: '#20A6D6',
          80: '#0B80B2',
          90: '#19648A',
          100: '#0C3E57'
        },
        'blue': {
          10: '#F0F6FF',
          20: '#E0ECFF',
          30: '#BED4FA',
          40: '#A2BDF5',
          50: '#78A3FA',
          60: '#5684F0',
          70: '#4368E0',
          80: '#2D4DCC',
          90: '#233EAD',
          100: '#14287A'
        },
        'purple': {
          10: '#F4F0FF',
          20: '#EEE5FF',
          30: '#D6BEFA',
          40: '#C6A2F5',
          50: '#B078FA',
          60: '#9956F0',
          70: '#8743E0',
          80: '#722DCC',
          90: '#5F23AD',
          100: '#40147A'
        },
        'primary': {
          10: 'var(--primary-10)',
          20: 'var(--primary-20)',
          30: 'var(--primary-30)',
          40: 'var(--primary-40)',
          50: 'var(--primary-50)',
          60: 'var(--primary-60)',
          "light": 'var(--primary-60)',
          70: 'var(--primary-70)',
          "blue": 'var(--primary-70)',
          80: 'var(--primary-80)',
          "dark": 'var(--primary-80)',
          90: 'var(--primary-90)',
          100:'var(--primary-100)'
        },
        'gray': {
          10: '#F7F8FA',
          20: '#EDEFF2',
          30: '#E0E2E5',
          40: '#D8D9DC',
          50: '#C8C9CC',
          60: '#AFB0B2',
          70: '#939599',
          80: '#787A80',
          90: '#5E6066',
          100: '#45484D',
          110: '#292C33',
          120: '#151923',
          130: '#0C1019',
          140: '#05080D'
        },
        'aubergine': {
          10: '#FCF0FF',
          20: '#FAE5FF',
          30: '#EEBEFA',
          40: '#E4A2F5',
          50: '#E078FA',
          60: '#D156F0',
          70: '#C143E0',
          80: '#AC2DCC',
          90: '#9223AD',
          100: '#66147A',
        },
        'indigo': {
          10: '#F2F0FF',
          20: '#E9E5FF',
          30: '#C6BEFA',
          40: '#ADA2F5',
          50: '#8978FA',
          60: '#6B56F0',
          70: '#5843E0',
          80: '#422DCC',
          90: '#3523AD',
          100: '#21147A',
        },
        'lime': {
          10: '#FAFFF0',
          20: '#F6FFE5',
          30: '#E6FABE',
          40: '#D9F5A2',
          50: '#CFFA78',
          60: '#BDF056',
          70: '#ACE043',
          80: '#97CC2D',
          90: '#7FAD23',
          100: '#587A14',
        },
        'trueGreen': {
          10: '#F0FFF0',
          20: '#E5FFE5',
          30: '#BEFABE',
          40: '#A2F5A2',
          50: '#78FA78',
          60: '#56F056',
          70: '#43E043',
          80: '#2DCC2D',
          90: '#23AD23',
          100: '#147A14',
        },
        'burnt': {
          10: '#FFF6F0',
          20: '#FFF0E5',
          30: '#FAD6BE',
          40: '#F5C3A2',
          50: '#FAAC78',
          60: '#F09456',
          70: '#E08243',
          80: '#CC6D2D',
          90: '#AD5A23',
          100: '#7A3D14',
        },
      },
      fontSize: {
        'xs': ['.75rem', { // 12px
          lineHeight: '1rem',
          // letterSpacing: '',
        }],
        'sm': ['.875rem', { // 14px
          lineHeight: '1.25rem',
          // letterSpacing: '',
        }],
        'base': ['1rem', { // 16px
          lineHeight: '1.5rem',
          // letterSpacing: '',
        }],
        'lg': ['1.125rem', { // 18px
          lineHeight: '1.75rem',
          // letterSpacing: '',
        }],
        'xl': ['1.25rem', { // 20px
          lineHeight: '1.75rem',
          // letterSpacing: '',
        }],
        '2xl': ['1.5rem', { // 24px
          lineHeight: '2rem',
          // letterSpacing: '',
        }],
        '3xl': ['1.875rem', { // 30px
          lineHeight: '2.25rem',
          // letterSpacing: '',
        }],
        '4xl': ['2.25rem', { // 36px
          lineHeight: '2.5rem',
          // letterSpacing: '',
        }],
        '5xl': ['3rem', { // 48px
          lineHeight: '1',
          // letterSpacing: '',
        }],
        '6xl': ['3.75rem', { // 60px
          lineHeight: '1',
          // letterSpacing: '',
        }],
        '7xl': ['4.5rem', { // 72px
          lineHeight: '1',
          // letterSpacing: '',
        }],
        '8xl': ['6rem', { // 96px
          lineHeight: '1',
          // letterSpacing: '',
        }],
        '9xl': ['8rem', { // 128px
          lineHeight: '1',
          // letterSpacing: '',
        }],
      },
      transitionProperty: {
        'width': 'width'
      }
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
      backgroundColor: ['active', 'disabled']
    }
  },
  plugins: [
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/line-clamp'),
    plugin(function({ addUtilities }) {
      addUtilities({
        'border-l-indigo-30': {
          'borderLeftColor': '#C6BEFA',
        },
        'border-l-indigo-10': {
          'borderLeftColor': '#F2F0FF',
        },
        'border-l-aubergine-30': {
          'borderLeftColor': '#EEBEFA',
        },
        'border-l-aubergine-10': {
          'borderLeftColor': '#D156F0',
        },
        'border-l-burnt-30': {
          'borderLeftColor': '#FAD6BE',
        },
        'border-l-lime-30': {
          'borderLeftColor': '#E6FABE',
        },
        'border-l-trueGreen-30': {
          'borderLeftColor': '#BEFABE',
        },        
      })
    })
  ]
}