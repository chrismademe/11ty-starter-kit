/**
 * Adapted from Adam K Dean
 * @see https://dev.to/adamkdean/simple-scss-with-11ty-kmn
 */

const path = require('path');
const sass = require('sass');
const cleanCSS = require('clean-css');
const siteConfig = require('./_data/site');

module.exports = class {
    data() {
        return {
            permalink: 'assets/css/style.css',
            eleventyExcludeFromCollections: true,
        };
    }

    // After
    async render() {
        const { css } = sass.renderSync({
            file: path.join(__dirname, '/assets/css/style.scss'),
            ...(siteConfig.sassOptions || {}),
        });

        return new cleanCSS({}).minify(css.toString()).styles;
    }
};
