/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#f4c550',
                    light: '#fbe9ba',
                },
                black: '#121417',
                gray: {
                    100: '#f8f8f8',
                },
                green: {
                    100: '#38cd3e',
                },
            },
            screens: {
                desktop: '1440px',
            },
            letterSpacing: {
                tight: '-0.02em',
            },
            fontFamily: {
                roboto: '"Roboto", sans-serif',
            },
        },
    },
    plugins: [],
};
