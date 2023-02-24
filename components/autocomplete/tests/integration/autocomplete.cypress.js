import DefaultPage from '../pages/default.page';

const defaultPage = new DefaultPage();
describe('Autocomplete', () => {
	before(() => {
		defaultPage.visit();
	});

	it('should have a different colored border than normal color when prop is invalid', () => {
		defaultPage.invalidAutocomplete
			.find('[class$="Control"]')
			.invoke('css', 'borderColor')
			.then(($invalidColor) => {
				defaultPage.validAutocomplete
					.find('[class$="Control"]')
					.invoke('css', 'borderColor')
					.should('not.eq', $invalidColor)
					.then(($validColor) => {
						cy.log("Invalid color = " + $invalidColor)
						cy.log("Valid color = " + $validColor)
					});
			});
	});

});
