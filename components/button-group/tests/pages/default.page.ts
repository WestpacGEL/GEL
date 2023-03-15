/// <reference types="cypress" />

import CommonPage from './common.page';
class DefaultPage extends CommonPage {
	constructor() {
		super('http://localhost:8080/button-group/demos/dev/10-default-value');
	}
	get btnGroup() {
		return cy.get('[data-cy="test-btn-grp"]');
	}
}

export default DefaultPage;
