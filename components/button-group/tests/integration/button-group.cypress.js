import DefaultPage from '../pages/default.page';

describe('ButtonGroup', () => {
	const defaultPage = new DefaultPage();
	beforeEach(() => {
		defaultPage.visit();
	});

	it('should switch selected/unslected colors of Left/Right Items when right Item clicked then back again when left clicked', () => {
		defaultPage.btnGroup.then(($elem) => {
			let $leftElement = $elem.children().first().find('span').first();
			const $colorSelected = $leftElement.css('background-color');
			cy.log('pre-selected color --- ' + $colorSelected);

			let $rightElement = $elem.children().last().find('span').first();
			const $colorUnSelected = $rightElement.css('background-color');
			cy.log('Unselected color --- ' + $colorUnSelected);

			let $wrapRightElem = cy.wrap($rightElement);
			$wrapRightElem.click();

			$wrapRightElem.should(() => {
				expect($rightElement.css('background-color')).to.eq($colorSelected);
				expect($leftElement.css('background-color')).to.eq($colorUnSelected);
			});

			let $wrapLeftElem = cy.wrap($leftElement);
			$wrapLeftElem.click();

			$wrapLeftElem.should(() => {
				expect($leftElement.css('background-color')).to.eq($colorSelected);
				expect($rightElement.css('background-color')).to.eq($colorUnSelected);
			});
		});
	});
});
