/// <reference types="cypress" />

import CommonPage from './common.page';

class DefaultPage1 extends CommonPage {
	constructor() {
		super('http://localhost:8080/button-group/examples');
	}
	get btnGroup() {
		return cy.get('[data-cy="test-btn-grp"]');
	}
}

class DefaultPage2 extends CommonPage {
	constructor() {
		super('http://localhost:8080/button-group/demos/dev/10-default-value');
	}
	get btnGroup() {
		return cy.get('[data-cy="test-btn-grp"]');
	}
}

export { DefaultPage1, DefaultPage2 };
