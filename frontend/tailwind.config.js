module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      //blue
      primary: '#091f43',
      transparent_primary: 'rgba(9,31,67,0.5)',
      //red
      secondary: '#d1515a',
      transparent_secondary: 'rgba(209,81,90,0.5)',
      //grey
      background: '#afafaf',
      transparent_background: 'rgba(175,175,175,0.5)',
      white: '#ffffff',
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
  // prefix: 'tw-',
  // important: true,
  // separator: '_',
  // corePlugins: {
  //   float: false,
  //   objectFit: false,
  //   objectPosition: false,
  // },
}
