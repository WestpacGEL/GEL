/// <reference types="cypress" />

import CommonPage from './common.page';

/* eslint-disable */

class SkipLinkPage extends CommonPage {
	constructor() {
		super('http://localhost:8080/a11y/SkipLink');
	}
	get skipContent() {
		return cy.get('[data-cy="skip-content-wrapper"] > a');
	}
}

export default SkipLinkPage;
