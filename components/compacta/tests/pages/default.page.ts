/// <reference types="cypress" />

import CommonPage from './common.page';

/* eslint-disable */

export const SIZES = ['small', 'medium', 'large', 'xlarge'];
class DefaultPage extends CommonPage {
	constructor() {
		super('http://localhost:8080/compacta/default');
	}
	get defaultCompact() {
		return cy.get('[data-cy="default-compacta"]');
	}
	get removeButton() {
		return cy.get(
			'[data-cy="default-compacta"] [class$=compacta-item] [class$=button-compacta-removeBtn]'
		);
	}
	get toggleButton() {
		return cy.get(
			'[data-cy="default-compacta"] [class$=compacta-item] [class$=button-compacta-toggle]'
		);
	}
	get addButton() {
		return cy.get('[data-cy="default-compacta"] [class$=button-compacta-addBtn]');
	}
}

export default DefaultPage;
