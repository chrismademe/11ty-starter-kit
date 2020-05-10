/**
 * Required Meta Tags
 *
 * Checks the head of the document for required
 * meta tags
 */
describe('Page has required meta tags', () => {
	it('Load page', () => {
		cy.visit('/');
	});

	it('Has title', () => {
		cy.get('title').should('not.be.empty');
	});

	it('Has description', () => {
		cy.get('meta[name="description"]')
			.should('have.attr', 'content')
			.should('not.be.empty');
	});

	it('Has correct charset', () => {
		cy.get('meta[charset="utf-8"]');
	});

	it('Has responsive viewport meta tag', () => {
		cy.get('meta[name="viewport"]')
			.should('have.attr', 'content')
			.should('eq', 'width=device-width, initial-scale=1');
	});

	it('Has UA meta tag', () => {
		cy.get('meta[http-equiv="x-ua-compatible"]');
	});
});

/**
 * Check Other Tags
 *
 * Looks for other essential tags within head
 */
describe('Has other required tags', () => {
	it('Has Favicon', () => {
		cy.get('link[rel="shortcut icon"]')
			.should('have.attr', 'href')
			.should('not.be.empty');
	});
});
