/// <reference types="cypress" />

import CommonPage from './common.page';

/* eslint-disable */

class SelectPage extends CommonPage {
	constructor() {
		super('http://localhost:8080/text-input/select');
	}

	get defaultSelect() {
		return cy.get('[data-cy="default-select"]');
	}

	get invalidSelect() {
		return cy.get('[data-cy="invalid-select"]');
	}

	get disabledSelect() {
		return cy.get('[data-cy="disabled-select"]');
	}
}

export default SelectPage;
