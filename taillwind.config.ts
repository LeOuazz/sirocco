// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                sirocco: {
                    blue: '#002b61',
                    red: '#d4092d',
                    light: '#eaf2fb',
                },
            },
        },
    },
    plugins: [],
};

export default config;
