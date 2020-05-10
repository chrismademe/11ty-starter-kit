if (Cypress.config('hasAnalytics') === true) {
	it('Load page', () => {
		cy.visit('/');
	});

	describe('Analytics is setup', () => {
		it('Has Google Analytics snippet', () => {
			cy.window().its('ga');
		});
	});
}
