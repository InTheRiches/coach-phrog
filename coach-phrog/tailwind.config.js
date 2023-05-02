/** @type {import('tailwindcss').Config} */
module.exports = {
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
      borderWidth: {
        1: '1px',
      },
      margin: {
        0.5: '0.125rem',
        1.5: '0.375rem',
        2.5: '0.625rem',
        6.5: '1.625rem',
        26: '6.5rem',
      },
      height: {
        "5v": "5vh",
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
      },
    },
  },
  plugins: [],
}
