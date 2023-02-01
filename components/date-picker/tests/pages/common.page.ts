/// <reference types="cypress" />
/* eslint-disable */

class CommonPage {
	url;
	constructor(url: string) {
		this.url = url;
	}
	open() {
		cy.viewport(1200, 1000);
	}
	visit() {
		cy.visit(this.url);
	}
}

export default CommonPage;
