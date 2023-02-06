/// <reference types="cypress" />

import CommonPage from './common.page';

class TypePage extends CommonPage {
	constructor() {
		super('http://localhost:8080/badge/type');
	}
	get getPrimaryPill() {
		return cy
			.get(`[data-cy="primary-pill-type"]`)
	}
}

export default TypePage;
