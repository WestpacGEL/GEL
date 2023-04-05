/// <reference types="cypress" />

import CommonPage from './common.page';

/* eslint-disable */

class TextAreaPage extends CommonPage {
	constructor() {
		super('http://localhost:8080/text-input/textarea');
	}
	get defaultTextArea() {
		return cy.get('[data-cy="default-textarea"]');
	}

	get invalidTextArea() {
		return cy.get('[data-cy="invalid-textarea"]');
	}
}

export default TextAreaPage;
