/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'climate': ['Climate Crisis', 'cursive'],
        'quicksand': ['Quicksand', 'sans-serif'],
      },
      container: {
        center: true,
        screens: {
          'sm': '600px',
          'md': '720px',
          'lg': '1000px',
          'xl': '1200px',
        }
      },
      colors: {
        'mainBlue': '#15151B',
        'textBlue': '#8C8CCA',
        'textBoldBlue': '#CDCDFC',
        'borderBlue': '#39394A',
        'blurBlue': '#6EB9FE',
        'blurRed': '#FE6E6E',
        'blurPurple': '#EA6EFE',
        'blurGreen': '#7DFFC9',
        'blurPurple2': '#E752FF',
        'blurYellow': '#FFD952',
        'teespring': '#292662',
        'teespringLight': '#322D9B',
        'teepublicLight': '#413F3F',
        'redbubble': '#ED1B24',
        'redbubbleLight': '#FF003D',
        'twitter': '#52B6FF',
        'twitterDark': '#0865A9',
        'instagram': '#FF527B',
        'instagramDark': '#441D96',
        'youtube': '#FF4242',
        'youtubeDark': '#D01111',
        'whatsapp': '#22D469',

      },
    },
  },
  plugins: [],
}

