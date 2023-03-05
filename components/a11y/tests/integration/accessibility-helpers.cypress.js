import VisuallyHiddenPage from '../pages/visually-hidden.page';
import SkipLinkPage from '../pages/skip-link.page';

describe('Accessibility', () => {
	const visuallyHiddenPage = new VisuallyHiddenPage();
	const skipLinkPage = new SkipLinkPage();

	it('It should not be display the text on the page', () => {
		visuallyHiddenPage.visit();
		visuallyHiddenPage.visuallyHidden.invoke('outerWidth').should('be.lt', 2);
	});

	it('It should not be display the text on the page', () => {
		visuallyHiddenPage.visit();
		visuallyHiddenPage.visuallyHiddenWithP.should('exist');
		visuallyHiddenPage.visuallyHiddenWithP.invoke('outerWidth').should('be.lt', 2);
	});

	it('On tab it should highlight the link', () => {
		skipLinkPage.visit();
		skipLinkPage.skipContent.invoke('outerWidth').should('be.lt', 2);
		skipLinkPage.skipContent.should('have.attr', 'href', '#content');
	});
});
