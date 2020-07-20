const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: ['./src/*.njk', './src/**/*.njk', './src/assets/js/*.js', './src/assets/js/**/*.js'],
    theme: {
        colors: {
            /**
             * We use CSS Custom Properties to define colours because
             * then we can access them from third party CSS or Javascript
             * without needing to redefine them.
             */
            gray: {
                90: `var(--color-gray-90)`,
                70: `var(--color-gray-70)`,
                50: `var(--color-gray-50)`,
                30: `var(--color-gray-30)`,
                10: `var(--color-gray-10)`,
            },
            primary: `var(--color-primary)`,
            secondary: `var(--color-secondary)`,
            neutral: {
                90: `var(--color-neutral-90)`,
                50: `var(--color-neutral-50)`,
                10: `var(--color-neutral-10)`,
            },
            positive: {
                90: `var(--color-positive-90)`,
                50: `var(--color-positive-50)`,
                10: `var(--color-positive-10)`,
            },
            negative: {
                90: `var(--color-negative-90)`,
                50: `var(--color-negative-50)`,
                10: `var(--color-negative-10)`,
            },
            warning: {
                90: `var(--color-warning-90)`,
                50: `var(--color-warning-50)`,
                10: `var(--color-warning-10)`,
            },
        },
        container: {
            center: true,
        },
        fontFamily: {
            sans: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
            mono: ['IBM Plex Mono', ...defaultTheme.fontFamily.mono],
        },
        fontSize: {
            xs: 'var(--step--2)',
            sm: 'var(--step--1)',
            base: 'var(--step-0)',
            lg: 'var(--step-1)',
            xl: 'var(--step-2)',
            '2xl': 'var(--step-3)',
            '3xl': 'var(--step-4)',
            '4xl': 'var(--step-5)',
            '5xl': 'var(--step-6)',
            '6xl': 'var(--step-7)',
        },
        boxShadow: {
            default: '0 0.1rem 0.2rem rgba(0, 0, 0, 0.05), 0 0.2rem 0.4rem rgba(0, 0, 0, 0.05)',
            md:
                '0 0.1rem 0.2rem rgba(0, 0, 0, 0.05), 0 0.2rem 0.4rem rgba(0, 0, 0, 0.05), 0 0.4rem 0.6rem rgba(0, 0, 0, 0.05)',
            lg:
                '0 0.2rem 0.4rem rgba(0, 0, 0, 0.05), 0 0.4rem 0.6rem rgba(0, 0, 0, 0.05), 0 0.6rem 1rem rgba(0, 0, 0, 0.05)',
            xl:
                '0 0.2rem 0.4rem rgba(0, 0, 0, 0.05), 0 0.6rem 0.8rem rgba(0, 0, 0, 0.05), 0 0.8rem 1.2rem rgba(0, 0, 0, 0.05), 0 1rem 1.6rem rgba(0, 0, 0, 0.05)',
            '2xl':
                '0 0.4rem 0.6rem rgba(0, 0, 0, 0.05), 0 0.8rem 1rem rgba(0, 0, 0, 0.05), 0 1rem 1.4rem rgba(0, 0, 0, 0.05), 0 1.2rem 2rem rgba(0, 0, 0, 0.05), 0 1.4rem 2.2rem rgba(0, 0, 0, 0.05)',
        },
    },
};
