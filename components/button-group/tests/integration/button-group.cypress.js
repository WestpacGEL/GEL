import DefaultPage from '../pages/default.page'

const defaultPage = new DefaultPage();

describe('ButtonGroup', () => {
	before(() => {
		defaultPage.visit();
	});

	it('should change background color of the Left Item when clicked', () => {
		expect(true).to.equal(true);
		cy.visit('http://localhost:8080/button-group/size');
		// const theRightInnerSpanItem = cy.contains('Right');
		// cy.contains('Right')
		// cy.log(theRightInnerSpanItem.invoke('css', 'background-color'))
		// cy.contains('Right').then(($rightElem) => { cy.log($rightElem) })
		const arrayOfLeftItems = cy.get('[data-cy="the-left-item"]').children()
		arrayOfLeftItems.then(($leftElem) => {
			cy.log($leftElem)
			cy.log( $leftElem[1])
			$leftElem[1].invoke('css', 'background-color')
				.then(($colorBeforeClick) => {
					cy.log( "The color before click is: "+ $colorBeforeClick)
					cy.log( $leftElem[1])
					$leftElem[1].click()
					$leftElem[1].invoke('css', 'background-color')
					.then(($colorAfterClick => {
						cy.log($colorAfterClick)
					}))
				})

		})
		// arrayOfLeftItems.then(($leftEl) => {
		// 	// cy.log($leftEl)
		// 	cy.log( $leftEl[1] )
		// })
	})
})
