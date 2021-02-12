module.exports = {
	/**
	 * Site name, useful for page titles
	 */
	name: `11ty Starter`,

	/**
	 * Site URL, we use this in the Sitemap
	 */
	url: `http://localhost:8080`,

	/**
	 * Global stylesheets, added in the <head> of each page
	 *
	 * For page specific stylesheets, use the same keys in
	 * frontmatter.
	 */
	stylesheets: [`/assets/css/tokens.css`, `/assets/css/style.css`, `/assets/css/utilities.css`],

	/**
	 * Global Javascript, added in the <head> of each page
	 * with a defer attribute
	 *
	 * For page specific javascript, use the same keys in
	 * frontmatter.
	 */
	scripts: [],

	/**
	 * Cookie Consent
	 *
	 * A small banner will appear in the bottom left of the
	 * page letting the user know this site uses cookies
	 * to provide the best experience.
	 *
	 * You can customise the text shown by setting a text property
	 */
	cookieConsent: {
		show: true
	}
};
