import SelectPage from '../pages/select.page';

describe('Select component', () => {
	const selectPage = new SelectPage();

	it('should allow user to select an option', () => {
		selectPage.visit();
		selectPage.defaultSelect.should('have.value', 'Select');
		selectPage.defaultSelect.select('1');
		selectPage.defaultSelect.should('have.value', '1');
	});

	it('should have a different colored border than normal color when prop is invalid', () => {
		selectPage.visit();
		selectPage.defaultSelect.invoke('css', 'borderColor').then(($validColor) => {
			selectPage.invalidSelect
				.invoke('css', 'borderColor')
				.should('not.eq', $validColor)
				.then(($invalidColor) => {
					cy.log('Invalid color = ' + $invalidColor);
					cy.log('Valid color = ' + $validColor);
				});
		});
	});

	it('should be inactive when "disabled" prop is passed', () => {
		selectPage.visit();
		selectPage.disabledSelect.should('be.disabled');
	});
});
