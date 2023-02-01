/// <reference types="cypress" />

import { Datepicker } from '../helpers/datepicker.component';
import CommonPage from './common.page';

class DisabledDaysPage extends CommonPage {
	constructor() {
		super('http://localhost:8080/date-picker/disabled-days');
	}
	get disableWeekDatePicker() {
		return new Datepicker('disable-weeks-datepicker-wrapper');
	}
	get disableSpecificDatesDatePicker() {
		return new Datepicker('disable-specific-dates-datepicker-wrapper');
	}
}

export default DisabledDaysPage;
