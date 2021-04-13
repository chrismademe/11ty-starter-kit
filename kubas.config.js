module.exports = {
    outputDir: `src`,
    tokens: {
        color: {
            "gray-90": "#373946",
            "gray-70": "#565869",
            "gray-50": "#77798a",
            "gray-30": "#b3b4bd",
            "gray-10": "#eeeef0",
            "neutral-dark": "#002c59",
            "neutral": "#0779e4",
            "neutral-light": "#e1eefa",
            "negative-dark": "#750001",
            "negative": "#dd3345",
            "negative-light": "#f6dbdd",
            "positive-dark": "#005929",
            "positive": "#21bf73",
            "positive-light": "#dbf2e7",
            "warning-dark": "#523d00",
            "warning": "#f5af4b",
            "warning-light": "#faebd5",
            "primary": "#191a22",
            "black": "#050608",
            "white": "#fff"
        },
        font: {
            "base": `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`
        },
        weight: {
            normal: 400,
            bold: 700
        },
        size: {
            'xs': `clamp(0.6075rem, 0.5636rem + 0.2195vw, 0.72rem)`,
            'sm': `clamp(0.7294rem, 0.6628rem + 0.3329vw, 0.9rem)`,
            'base': `clamp(0.875rem, 0.7774rem + 0.4878vw, 1.125rem)`,
            'lg': `clamp(1.05rem, 0.911rem + 0.6951vw, 1.4063rem)`,
            'xl': `clamp(1.26rem, 1.0656rem + 0.972vw, 1.7581rem)`,
            '2xl': `clamp(1.5119rem, 1.2443rem + 1.3378vw, 2.1975rem)`,
            '3xl': `clamp(1.8144rem, 1.4505rem + 1.8195vw, 2.7469rem)`,
            '4xl': `clamp(2.1775rem, 1.6875rem + 2.45vw, 3.4331rem)`,
            '5xl': `clamp(2.6125rem, 1.9574rem + 3.2756vw, 4.2913rem)`,
            '6xl': `clamp(3.135rem, 2.265rem + 4.35vw, 5.3644rem)`
        },
        space: {
            'px': `1px`,
            'half': `.125rem`,
            1: `.25rem`,
            2: `.5rem`,
            3: `.75rem`,
            4: `1rem`,
            6: `1.5rem`,
            8: `2rem`,
            10: `2.5rem`,
            12: `3rem`,
            16: `4rem`,
            20: `5rem`,
            24: `6rem`,
            28: `7rem`,
            32: `8rem`,
            40: `10rem`,
            48: `12rem`,
            56: `14rem`,
            64: `16rem`
        },
        'max-width': {
            'xs': `32ch`,
            'sm': `40ch`,
            'md': `60ch`,
            'lg': `70ch`,
            'xl': `85ch`
        },
        leading: {
            'none': 1,
            'tight': 1.1,
            'base': 1.5,
            'loose': 1.8
        },
        tracking: {
            'tight': `-.025rem`,
            'base': `auto`,
            'wide': `.05rem`,
            'loose': `.1rem`
        },
        radius: {
            'base': `.25rem`,
            'full': `99999px`
        },
        shadow: {
            'sm': '0 0.1rem 0.2rem rgba(0, 0, 0, 0.05), 0 0.2rem 0.4rem rgba(0, 0, 0, 0.05)',
            'default': '0 0.1rem 0.2rem rgba(0, 0, 0, 0.05), 0 0.2rem 0.4rem rgba(0, 0, 0, 0.05), 0 0.4rem 0.6rem rgba(0, 0, 0, 0.05)',
            'lg': '0 0.2rem 0.4rem rgba(0, 0, 0, 0.05), 0 0.4rem 0.6rem rgba(0, 0, 0, 0.05), 0 0.6rem 1rem rgba(0, 0, 0, 0.05)',
            'xl': '0 0.2rem 0.4rem rgba(0, 0, 0, 0.05), 0 0.6rem 0.8rem rgba(0, 0, 0, 0.05), 0 0.8rem 1.2rem rgba(0, 0, 0, 0.05), 0 1rem 1.6rem rgba(0, 0, 0, 0.05)',
            '2xl': '0 0.4rem 0.6rem rgba(0, 0, 0, 0.05), 0 0.8rem 1rem rgba(0, 0, 0, 0.05), 0 1rem 1.4rem rgba(0, 0, 0, 0.05), 0 1.2rem 2rem rgba(0, 0, 0, 0.05), 0 1.4rem 2.2rem rgba(0, 0, 0, 0.05)'
        }
    },
    utilities: {
        color: {
            c: `color`,
            bg: `background-color`,
        },
        space: {
            py: `padding-block`,
            px: `padding-inline`,
            ml: `margin-inline-start`,
            mt: `margin-block-start`,
            'flow-space': {
                '> *': '--flow-space'
            },
            gap: `--gap`
        },
        font: {
            font: `font-family`,
        },
        weight: {
            weight: `font-weight`,
        },
        size: {
            size: `font-size`,
        },
        'max-width': {
            mw: `max-width`
        },
        leading: {
            leading: `line-height`
        },
        tracking: {
            tracking: `letter-spacing`
        },
        align: {
            align: `text-align`
        },
        radius: {
            radius: `border-radius`
        },
        shadow: {
            shadow: `box-shadow`
        }
    },
};
