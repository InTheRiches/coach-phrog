/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
        mono: [
          'Roboto Mono', "monospace"
        ]
    },
    extend: {
      fontFamily: {
        'spacemono': ['Space Mono', 'monospace'],
        'jetbrains': ['JetBrains Mono', 'monospace'],
        'notosans': ['Noto Sans Mono', 'monospace'],
        'roboto': ['Roboto Mono', "monospace"]
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "cyan-accent": "#0ea5e9",
        "cyan-accent-light": "#3fb1e7",
      },
      borderWidth: {
        1: '1px',
      },
      fontSize: {
        "1xl": "1.375rem",
        "2.25xl": "1.625rem",
        "2.5xl": "1.75rem",
      },
      gap: {
        "1vh": "1vh",
        "2vh": "2vh",
        "3vh": "3vh",
        "4vh": "4vh",
        "5vh": "5vh",
        "6vh": "6vh",
        "7vh": "7vh",
        "8vh": "8vh",
        "9vh": "9vh",
        "10vh": "10vh",

        "1vw": "1vw",
        "2vw": "2vw",
        "3vw": "3vw",
        "4vw": "4vw",
        "5vw": "5vw",
        "6vw": "6vw",
        "7vw": "7vw",
        "8vw": "8vw",
        "9vw": "9vw",
        "10vw": "10vw",
      },
      margin: {
        0.5: '0.125rem',
        0.6: '0.15rem',
        0.7: '0.175rem',
        0.8: '0.2rem',
        0.9: '0.225rem',
        1.1: '0.275rem',
        1.2: '0.3rem',
        1.3: '0.325rem',
        1.4: '0.35rem',
        1.5: '0.375rem',
        2.1: '0.525rem',
        2.2: '0.55rem',
        2.3: '0.575rem',
        2.4: '0.6rem',
        2.5: '0.625rem',
        6.5: '1.625rem',
        26: '6.5rem',
      },
      padding: {
        "1v": "1vh",
        "2v": "2vh",
        "3v": "3vh",
        "4v": "4vh",
        "5v": "5vh",
        "6v": "6vh",
        "7v": "7vh",
        "8v": "8vh",
        "9v": "9vh",
        "10v": "10vh",

        "1.25": "0.3125rem",
      },
      height: {
        '1v': '1vh',
        "2v": "2vh",
        "3v": "3vh",
        "4v": "4vh",
        "5v": "5vh",
        "6v": "6vh",
        "7v": "7vh",
        "8v": "8vh",
        "9v": "9vh",
        "10v": "10vh",
        "15v": "15vh",
        "20v": "20vh",
        "25v": "25vh",
        "30v": "30vh",
        "35v": "35vh",
        "40v": "40vh",
        "45v": "45vh",
        "50v": "50vh",
        "55v": "55vh",
        "60v": "60vh",
        "65v": "65vh",
        "70v": "70vh",
        "75v": "75vh",
        "80v": "80vh",
        "85v": "85vh",
        "90v": "90vh",
        "95v": "95vh",
        "100v": "100vh",

        "5vw": "5vw",
        "10vw": "10vw",
        "15vw": "15vw",
        "20vw": "20vw",
        "25vw": "25vw",
        "30vw": "30vw",
        "35vw": "35vw",
        "40vw": "40vw",
        "45vw": "45vw",
        "50vw": "50vw",
        "55vw": "55vw",
        "60vw": "60vw",
        "65vw": "65vw",
        "70vw": "70vw",
        "75vw": "75vw",
        "80vw": "80vw",
        "85vw": "85vw",
        "90vw": "90vw",
        "95vw": "95vw",
        "100vw": "100vw",
      },
      gridTemplateColumns: {
        "270px": "270px minmax(0,1fr)",
      },
      strokeWidth: {
        "3": "3",

      },
      width: {
        "5v": "5vw",
        "10v": "10vw",
        "15v": "15vw",
        "20v": "20vw",
        "25v": "25vw",
        "30v": "30vw",
        "35v": "35vw",
        "40v": "40vw",
        "45v": "45vw",
        "50v": "50vw",
        "55v": "55vw",
        "60v": "60vw",
        "65v": "65vw",
        "70v": "70vw",
        "75v": "75vw",
        "80v": "80vw",
        "85v": "85vw",
        "90v": "90vw",
        "95v": "95vw",
        "100v": "100vw",

        "5vh": "5vh",
        "10vh": "10vh",
        "15vh": "15vh",
        "20vh": "20vh",
        "25vh": "25vh",
        "30vh": "30vh",
        "35vh": "35vh",
        "40vh": "40vh",
        "45vh": "45vh",
        "50vh": "50vh",
        "55vh": "55vh",
        "60vh": "60vh",
        "65vh": "65vh",
        "70vh": "70vh",
        "75vh": "75vh",
        "80vh": "80vh",
        "85vh": "85vh",
        "90vh": "90vh",
        "95vh": "95vh",
        "100vh": "100vh",

        "16": "4rem",
        "36": "9rem",
        // what is 48rem 
        "48": "12rem",
        "72": "18rem",
        "80": "20rem",
        "88": "22rem",
        "96": "24rem",
        "104": "26rem",
        "112": "28rem",
        "120": "30rem",
        "128": "32rem",
        "136": "34rem",
        "144": "36rem",
        "152": "38rem",
        "160": "40rem",
        "168": "42rem",
        "176": "44rem",
      },
    },
  },
}
