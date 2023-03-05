/// <reference types="cypress" />

import CommonPage from './common.page';

/* eslint-disable */

class VisuallyHiddenPage extends CommonPage {
	constructor() {
		super('http://localhost:8080/a11y/VisuallyHidden');
	}
	get visuallyHidden() {
		return cy.get('[data-cy="visually-hidden-wrapper"] > span');
	}
	get visuallyHiddenWithP() {
		return cy.get('[data-cy="visually-hidden-wrapper-with-p"] > p');
	}
}

export default VisuallyHiddenPage;
