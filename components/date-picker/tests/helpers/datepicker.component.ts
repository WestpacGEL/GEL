export class Datepicker {
	datepicker: Cypress.Chainable;
	constructor(dataCY: string) {
		this.datepicker = cy.get(`[data-cy="${dataCY}"]`);
	}

	get dateToggleButton() {
		console.log('this.datepicker', this.datepicker);
		return this.datepicker.find('.duet-date__toggle');
	}

	get datePickerDialog() {
		return this.datepicker.find('.duet-date__dialog-content');
	}

	get datePickerInput() {
		return this.datepicker.find('.duet-date__input');
	}

	get datePickerSelectedDate() {
		return this.datepicker.get('[aria-pressed="true"].duet-date__day');
	}

	get selectedMonth() {
		return this.datepicker.get('.duet-date__select--month');
	}

	get selectedYear() {
		return this.datepicker.get('.duet-date__select--year');
	}
}
