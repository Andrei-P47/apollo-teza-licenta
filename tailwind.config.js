/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                white: '#FFFFFF',
                'primary-main': '#110929',
                'secondary-main': '#1C51FE',
                'button-gradient-1': '#8D1CFE',
                'button-gradient-2': '#0038ED',
                'header-gradient-1': '#B235FF',
                'header-gradient-2': '#001447',
                'inner-border': '#EAECF0',
                'gray-400': '#98A2B3',
                'primary-pressed': '#39324D',
            },
            padding: {
                '19px': '19px',
            },
            borderRadius: {
                '1xl': '14px',
                large: '66px',
            },
            gap: {
                '13px': '13px',
                '21px': '21px',
                3.25: '13px',
                4.25: '17px',
                5.25: '21px',
                5.5: '22px',
                '29px': '29px',
                8.5: '34px',
            },
            margin: {
                7.5: '30px',
                13.5: '54px',
            },
            fontSize: {
                '28px': '28px',
                '32px': '32px',
            },
            lineHeight: {
                '19px': '19px',
                4.5: '18px',
                4.75: '19px',
                6.5: '26px',
                8.5: '34px',
                14.5: '58px',
            },
        },
    },
    plugins: [],
}