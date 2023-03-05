import DefaultPage from '../pages/default.page';

describe('Compacta', () => {
	const defaultPage = new DefaultPage();

	beforeEach(() => {
		defaultPage.visit();
	});

	it('should remove the section when the remove button is pressed', () => {
		defaultPage.removeButton.should('exist');
		defaultPage.removeButton.click();
		defaultPage.defaultCompact.find('[class$=compacta-item]').should('not.exist');
	});

	it('should add another section when add another button is pressed', () => {
		defaultPage.addButton.click();
		defaultPage.defaultCompact.find('[class$=compacta-item]').should('have.length', 2);
	});

	it('should fold/unfold the section when caret is pressed', () => {
		defaultPage.defaultCompact
			.find('[class$=compacta-item] [class$=compacta-content]')
			.should('be.visible');
		defaultPage.toggleButton.click();
		defaultPage.defaultCompact
			.find('[class$=compacta-item] [class$=compacta-content]')
			.should('not.be.visible');
		defaultPage.toggleButton.click();
		defaultPage.defaultCompact
			.find('[class$=compacta-item] [class$=compacta-content]')
			.should('be.visible');
	});
});
