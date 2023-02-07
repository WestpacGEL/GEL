/// <reference types="cypress" />

import CommonPage from './common.page';

export const LOOKS_TYPES = [
	{ type: 'default', color: 'rgb(42, 46, 66)' },
	{ type: 'primary', color: 'rgb(218, 23, 16)' },
	{ type: 'hero', color: 'rgb(31, 28, 79)' },
	{ type: 'neutral', color: 'rgb(42, 46, 66)' },
	{ type: 'faint', color: 'rgb(255, 255, 255)' },
	{ type: 'success', color: 'rgb(0, 128, 0)' },
	{ type: 'info', color: 'rgb(0, 116, 196)' },
	{ type: 'warning', color: 'rgb(197, 59, 0)' },
	{ type: 'danger', color: 'rgb(196, 0, 0)' },
];

class LookPage extends CommonPage {
	constructor() {
		super('http://localhost:8080/badge/look');
	}
	get badgeLooks() {
		return LOOKS_TYPES.map((look) => {
			return {
				look,
				element: cy.get(`[data-cy="badge-${look}"]`),
			};
		});
	}
}

export default LookPage;
