/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      minHeight:{
        'fit':'fit-content'
      },

      height:{
        'fit':'fit-content'
      },

      fontFamily:{
        raleway:['var(--font-raleway)'],
        quicksand:['var(--font-quicksand)'],
        inter:['var(--font-inter)'],
      }
      
    },
  },
  plugins: [],
};
