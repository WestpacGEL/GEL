describe('Badge', () => {
	before(() => {
		cy.visit(`http://localhost:8080/`);
	});

	it('renders a badge', () => {
		cy.get('[data-test-nav-link]').contains('look').click();
		cy.get(`[data-testing="badge"]`).should('exist');
	});

	it('renders a badge within a button', () => {
		cy.get('[data-test-nav-link]').contains('buttons').click();
		cy.get(`[data-testing="badge-button"]`).should('exist');
	});

	it('renders a badge within a link', () => {
		cy.get('[data-test-nav-link]').contains('links').click();
		cy.get(`[data-testing="badge-link"]`).should('exist');
	});
});
