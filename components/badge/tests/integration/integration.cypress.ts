import LookPage, { LOOKS_TYPES } from '../pages/look.page';
import TypePage from '../pages/type.page';

describe('Badge', () => {
	const lookPage = new LookPage();
	const typePage = new TypePage();

	it('should change the color accordingly when the look is changed', async () => {
		lookPage.visit();
		for (const { type, color } of LOOKS_TYPES) {
			cy
				.get(`[data-cy="badge-${type}"]`)
				.should('have.css', 'background-color', color);
		}
	});

	it.only('should change the shape to rounded when it is pill', async () => {
		typePage.visit();
		typePage.getPrimaryPill.should('have.css', 'border-radius', '12px')
	});
});
