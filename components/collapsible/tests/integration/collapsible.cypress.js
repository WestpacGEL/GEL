import DefaultPage from '../pages/default.page';
import OpenPage from '../pages/open.page';

describe('Collapsible', () => {
	const defaultPage = new DefaultPage();
	const skipLinkPage = new OpenPage();

	it('It should show/hide the content once click the button', () => {
		defaultPage.visit();
		const container = defaultPage.defaultCollapsible.children('div');
		container.should('be.hidden');
		defaultPage.defaultCollapsible.children('button').click();
		container.should('be.visible');
	});

	it('The text property should display on the button to collapse', () => {
		defaultPage.visit();
		defaultPage.defaultCollapsible.children('button').click();
		const container = defaultPage.defaultCollapsible.children('div');
		container.should(
			'contain.html',
			'<div class="css-1kmyq1l-body"><p>Hello vivamus sagittis lacus vel augue laoreet rutrum faucibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p><p>Nesciunt laboriosam, mollitia magnam ad magni consequuntur hic et quos optio corrupti praesentium veniam aspernatur minima aperiam ut quas, possimus non architecto. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut animi velit in? Suscipit nostrum itaque voluptatibus dolorem qui soluta nobis modi officia incidunt eos dolores atque, unde error delectus officiis.</p></div>'
		);
	});

	it('The default Toggle should display "Toggle collapsible" inside of the button', () => {
		defaultPage.visit();
		defaultPage.defaultCollapsible.children('button').should('contain.text', 'Toggle collapsible');
	});
});
