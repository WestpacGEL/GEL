import { DefaultPage1, DefaultPage2 } from '../pages/default.page'

describe('ButtonGroup', () => {
	const defaultPage = new DefaultPage1();
	beforeEach(() => {
		defaultPage.visit();
	});

	it("test button-group background color change", () => {
		defaultPage.btnGroup.then(($elem) => {
			let $targetElement = $elem.children().last().find('span').first();
			const $colorBeforeClick = $targetElement.css('background-color');
			cy.log('before click color --- '+ $colorBeforeClick);
			cy.wrap($targetElement).click().then(() => {
				let $colorAfterClick = $elem.css('background-color');
				cy.log('after click color --- '+ $colorAfterClick);
				expect($colorAfterClick).to.not.eq($colorBeforeClick);
			});
		});
	});

	it("test button-group background color change", () => {
		defaultPage.btnGroup.then(($elem) => {
			let $targetElement = $elem.children().last().find('span').first();
			let $wrappedElem = cy.wrap($targetElement);
			const $colorBeforeClick = $targetElement.css('background-color');
			cy.log('before click color --- '+ $colorBeforeClick);

			$wrappedElem.click();
			// It can fail anywhere from about 90 to 150, depends on the JIT compilation and number of successive re-runs
			// 200+ ms seems safe, but 500ms would be more assurring. It would be better to do having to guess the delay
			// and use a .should() statement because should() will keep re-runnning until all assertions pass.
			cy.wait(200);

			$wrappedElem.then(() => {
				let $colorAfterClick = $targetElement.css('background-color');
				cy.log('after click color --- '+ $colorAfterClick);
				expect($colorAfterClick).to.not.eq($colorBeforeClick);
			});
		});
	});

})

describe('ButtonGroup', () => {
	const defaultPage = new DefaultPage2();
	beforeEach(() => {
		defaultPage.visit();
	 	// cy.visit('http://localhost:8080/button-group/demos/dev/10-default-value');
	});

	it("should unselect the pre-selected Left Item after Right item is clicked", () => {
		defaultPage.btnGroup.then(($elem) => {
			let $leftElement = $elem.children().first().find('span').first();
			const $colorSelected = $leftElement.css('background-color');
			cy.log('pre-selected color --- '+ $colorSelected);
			
			let $rightElement = $elem.children().last().find('span').first();
			const $colorUnSelected = $rightElement.css('background-color');
			cy.log('Unselected color --- ' + $colorUnSelected)

			let $wrapRightElem = cy.wrap($rightElement);
			$wrapRightElem.click();
			cy.wait(150);

			$wrapRightElem.then(() => {
				let $leftElemColorAfterClick = $leftElement.css('background-color');
				cy.log('Left Item after click color --- '+ $leftElemColorAfterClick);
				cy.log('Right Item after click color --- '+ $rightElement.css('background-color'));
				expect($leftElemColorAfterClick).to.eq($colorUnSelected);
				expect($rightElement.css('background-color')).to.eq($colorSelected)
			});
		})
	})

	it("should switch selected/unslected colors of Left/Right Items when right Item clicked then back again when left clicked", () => {
		defaultPage.btnGroup.then(($elem) => {
			let $leftElement = $elem.children().first().find('span').first();
			const $colorSelected = $leftElement.css('background-color');
			cy.log('pre-selected color --- '+ $colorSelected);
			
			let $rightElement = $elem.children().last().find('span').first();
			const $colorUnSelected = $rightElement.css('background-color');
			cy.log('Unselected color --- ' + $colorUnSelected)

			let $wrapRightElem = cy.wrap($rightElement);
			$wrapRightElem.click();

			$wrapRightElem.should(() => {
				expect($rightElement.css('background-color')).to.eq($colorSelected)
				expect($leftElement.css('background-color')).to.eq($colorUnSelected)
			})

			let $wrapLeftElem = cy.wrap($leftElement);
			$wrapLeftElem.click();

			$wrapLeftElem.should(() => {
				expect($leftElement.css('background-color')).to.eq($colorSelected)
				expect($rightElement.css('background-color')).to.eq($colorUnSelected)
			})
		})
	})
})

	// old original test - it worked but 
	// it('should change background color of the Left Item when clicked', () => {
	// 	// expect(true).to.equal(true);
	// 	// cy.visit('http://localhost:8080/button-group/size');
		
	// 	// cy.get('[data-cy="the-left-item"]').within(() => {
	// 	// 	cy.get('span').first().invoke('css', 'background-color').then(($colBefore) => {
	// 	// 		cy.get('span').first().click()
	// 	// 		cy.wait(1000)
	// 	// 		cy.get('span').first().invoke('css', 'background-color')
	// 	// 			.should('eq', $colBefore)
	// 	// 	})
	// 	// })

	// 	cy.get('[data-cy="the-left-item"]').within(() => {
	// 		cy.get('span').first().invoke('css', 'background-color').then(($colBefore) => {
	// 			cy.get('span').first().click().wait(200).then(() => {
	// 				cy.get('span').first().invoke('css', 'background-color').should('not.eq', $colBefore)
	// 			})
	// 		})
	// 	})
	// })
