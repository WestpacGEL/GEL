/// <reference types="cypress" />

import CommonPage from './common.page';

class DefaultPage extends CommonPage {
	constructor() {
		super('http://localhost:8080/autocomplete/default');
	}
	get invalidAutocomplete() {
		return cy.get('[data-cy="invalid-autocomplete"]');
	}
	get validAutocomplete() {
		return cy.get('[data-cy="valid-autocomplete"]');
	}
}

export default DefaultPage;
