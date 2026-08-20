/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                gold: {
                    light: '#F8E8C7',
                    DEFAULT: '#D4AF37',
                    dark: '#AA820A',
                    antique: '#C5A059',
                    amber: '#B8860B',
                },
                emerald: {
                    seal: '#0B3B2B',
                    deep: '#062B1E',
                    rim: '#0F4C38',
                },
                ivory: {
                    light: '#FAF7F2',
                    DEFAULT: '#F2ECE3',
                    dark: '#E5DDCF',
                },
                blush: {
                    light: '#FAF3F0',
                    DEFAULT: '#F4ECE8',
                }
            },
            fontFamily: {
                serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
                arabic: ['"Amiri"', '"Scheherazade New"', 'serif'],
                sans: ['"Montserrat"', 'sans-serif'],
            },
            boxShadow: {
                'envelope': '0 20px 40px -15px rgba(50, 40, 30, 0.18), 0 0 15px rgba(212, 175, 55, 0.12)',
                'seal': '0 10px 25px -5px rgba(6, 43, 30, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.2)',
                'gold-glow': '0 0 15px rgba(197, 160, 89, 0.4)',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'flutter': 'flutter 0.3s ease-in-out infinite alternate',
                'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
                    '50%': { transform: 'translateY(-10px) rotate(3deg)' },
                },
                flutter: {
                    '0%': { transform: 'scaleX(1)' },
                    '100%': { transform: 'scaleX(0.75)' },
                },
                pulseSubtle: {
                    '0%, 100%': { opacity: '0.8' },
                    '50%': { opacity: '1' },
                }
            }
        },
    },
    plugins: [],
}
