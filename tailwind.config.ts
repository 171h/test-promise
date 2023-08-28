import type { Config } from 'tailwindcss'

export default <Partial<Config>> {
  content: [
    'docs/content/**/*.md',
  ],
  theme: {
    extend: {
      maxWidth: {
        '2xs': '16rem',
        '3xs': '12rem',
        '4xs': '8rem',
        '5xs': '4rem',
        '6xs': '3rem',
      },
      screens: {
        '4xs': '160px',
        '3xs': '240px',
        '2xs': '320px',
        'xs': '480px',
      },
    },
  },
}
