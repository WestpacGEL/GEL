/// <reference types="cypress" />

import CommonPage from './common.page';

class DefaultPage extends CommonPage {
	constructor() {
		super('http://localhost:8080/button-group/size');
	}
	get leftItem() {
		return cy.get('[data-cy="the-left-item"] > span:first-child');
		// cy.get('[data-cy="visually-hidden-wrapper"] > span');
	}
	// get validAutocomplete() {
	// 	return cy.get('[data-cy="valid-autocomplete"]');
	// }
}

export default DefaultPage;
