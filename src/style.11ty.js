/**
 * Adapted from Adam K Dean
 * @see https://dev.to/adamkdean/simple-scss-with-11ty-kmn
 */

const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const cleanCSS = require('clean-css');
const siteConfig = require('./_data/site');

const plugins = [require('postcss-import'), require('tailwindcss')('./tailwind.config.js'), require('autoprefixer')];

module.exports = class {
    data() {
        return {
            permalink: 'style.css',
            eleventyExcludeFromCollections: true,
        };
    }

    // After
    async render() {
        let srcPath = path.join(__dirname, '/assets/css/style.css');
        let src = fs.readFileSync(srcPath);

        return await postcss(plugins)
            .process(src, { from: srcPath })
            .then((result) => {
                return new cleanCSS({}).minify(result.css).styles;
            });
    }
};
