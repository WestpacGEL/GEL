/// <reference types="cypress" />

import CommonPage from './common.page';

/* eslint-disable */

export const SIZES = ['small', 'medium', 'large', 'xlarge'];
class DefaultPage extends CommonPage {
	constructor() {
		super('http://localhost:8080/collapsible/default');
	}
	get defaultCollapsible() {
		return cy.get('[data-cy="default-collapsible"]');
	}
}

export default DefaultPage;
