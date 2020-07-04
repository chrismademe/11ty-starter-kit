module.exports = {
    /**
     * Site name, useful for page titles
     */
    name: `11ty Starter`,

    /**
     * Global stylesheets, added in the <head> of each page
     *
     * For page specific stylesheets, use the same keys in
     * frontmatter.
     */
    stylesheets: [`/assets/css/style.css`],

    /**
     * Global Javascript, added in the <head> of each page
     * with a defer attribute
     *
     * For page specific javascript, use the same keys in
     * frontmatter.
     */
    scripts: [],

    /**
     * Optional Sass Options
     * Any valid dart-sass option can be used here
     *
     * @see https://sass-lang.com/documentation/js-api
     *
     * By default, /assets/css/style.scss will be assumed
     * as your entry point. You can change it below with
     * the `file` key.
     */
    sassOptions: {
        includePaths: ['node_modules/underscores-css/src'],
    },
};
