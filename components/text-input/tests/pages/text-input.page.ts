/// <reference types="cypress" />

import CommonPage from './common.page';

/* eslint-disable */

class TextInputPage extends CommonPage {
	constructor() {
		super('http://localhost:8080/text-input/text-input');
	}
	get defaultInputText() {
		return cy.get('[data-cy="default-text-input"]');
	}

	get invalidInputText() {
		return cy.get('[data-cy="invalid-text-input"]');
	}
}

export default TextInputPage;
