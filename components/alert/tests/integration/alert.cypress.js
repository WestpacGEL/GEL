describe('Alert', () => {
	before(() => {
		cy.visit(`http://localhost:8080/`);
		cy.get('[data-test-nav-link]').contains('dismissible').click();
	});

	it('Alert should be dismissable', () => {
		['Well done!', 'Heads up!', 'Warning!', 'Oh snap!', 'System Error 8942:'].map((heading, i) => {
			cy.get(`[data-testing="alert${i}"]`).contains(heading).should('be.visible').get(`[data-testing="alert${i}"] [data-testing="alert-closeBtn"]`).click();
			cy.wait(500);
			cy.get(`[data-testing="alert${i}"]`).should('not.be.visible');
		});
	});

	it('Alert can be state controlled', () => {
		cy.get('[data-testing="alert-state"]').should('not.be.visible');
		cy.get('[data-testing="toggle"]').click();
		cy.wait(500);
		cy.get('[data-testing="alert-state"]').should('be.visible');
	});
});
