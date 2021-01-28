const designTokens = require('./templates/_data/designTokens');

module.exports = {
    outputDir: `assets/css`,
    tokens: {
        ...designTokens
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
            }
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
        }
    },
};
