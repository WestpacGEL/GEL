import TextInputPage from '../pages/text-input.page';

describe('text-input', () => {
	const textInputPage = new TextInputPage();

	it('should change its content when text-input change event is triggered and handleChange handler is invoked', () => {
		textInputPage.visit();
		textInputPage.defaultInputText.then(($targetElement) => {
			const newVal = ' hello new text value';
			const expectedVal = $targetElement.val() + newVal;
			cy.wrap($targetElement).type(newVal).should('have.value', expectedVal);
		});
	});

	it('should have a different colored border than normal color when prop is invalid', () => {
		textInputPage.defaultInputText.invoke('css', 'borderColor').then(($validColor) => {
			textInputPage.invalidInputText
				.invoke('css', 'borderColor')
				.should('not.eq', $validColor)
				.then(($invalidColor) => {
					cy.log('Invalid color = ' + $invalidColor);
					cy.log('Valid color = ' + $validColor);
				});
		});
	});
});
