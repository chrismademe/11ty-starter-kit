/**
 * Adapted from Adam K Dean
 * @see https://dev.to/adamkdean/simple-scss-with-11ty-kmn
 */

const path = require('path');
const compilePostCSS = require('../../functions/compilePostCSS');

module.exports = class {
    data() {
        return {
            layout: false,
            permalink: '/style.css',
            eleventyExcludeFromCollections: true,
        };
    }

    async render() {
        return await compilePostCSS(path.join(__dirname, '/../../assets/css/style.css'));
    }
};