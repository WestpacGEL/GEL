import DefaultPage from '../pages/default.page';

const defaultPage = new DefaultPage();
describe('Autocomplete', () => {
	before(() => {
		defaultPage.visit();
	});
	it('should contain a red border when there is a prop invalid', () => {
		defaultPage.invalidAutocomplete
			.get('[class$="Control"]')
			.should('have.css', 'border', '1px solid rgb(147, 144, 162)');
	});
});
