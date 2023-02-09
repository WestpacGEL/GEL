/// <reference types="cypress" />

import CommonPage from './common.page';

/* eslint-disable */

class OpenPage extends CommonPage {
	constructor() {
		super('http://localhost:8080/collapsible/default');
	}
	get visuallyHidden() {
		return cy.get('[data-cy="visually-hidden-wrapper"] > span');
	}
	get visuallyHiddenWithP() {
		return cy.get('[data-cy="visually-hidden-wrapper-with-p"] > p');
	}
}

export default OpenPage;
