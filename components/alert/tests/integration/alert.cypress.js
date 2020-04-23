describe('Alert', () => {
	before(() => {
		// First we have to visit our testing site
		cy.visit(`http://localhost:8080/`);
		// then we navigate to the dismissible example
		cy.get('[data-test-nav-link]')
			.contains('dismissible')
			.click();
	});

	it('Alert should be dismissable', () => {
		// here we automate five tests and make sure for each look the dismissable button works
		['Well done!', 'Heads up!', 'Warning!', 'Oh snap!', 'System Error 8942:'].map((heading, i) => {
			cy.get(`[data-testing="alert${i}"]`)
				.contains(heading)
				.should('be.visible')
				.get(`[data-testing="alert${i}"] [data-testing="alert-closeBtn"]`) // we need to make sure that we use the right close button for the right alert
				.click()
				.wait(500); // we have to wait for at least 400ms as the transition is 400. Let's keep it safe with 500ms

			// assertion
			cy.get(`[data-testing="alert${i}"]`).should('not.be.visible');
		});
	});

	it('Alert can be state controlled', () => {
		// assertion
		cy.get('[data-testing="alert-state"]').should('not.be.visible');

		// action
		cy.get('[data-testing="toggle"]')
			.click()
			.wait(500); // same as above, waiting for the dismissable transition

		// assertion
		cy.get('[data-testing="alert-state"]').should('be.visible');
	});
});
