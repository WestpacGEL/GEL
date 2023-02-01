/// <reference types="cypress" />

import { Datepicker } from '../helpers/datepicker.component';
import CommonPage from './common.page';

class DefaultPage extends CommonPage {
	constructor() {
		super('http://localhost:8080/date-picker/default');
	}
	get defaultPicker() {
		return new Datepicker('default-datepicker-wrapper');
	}
	get placeholderPicker() {
		return new Datepicker('placeholder-datepicker-wrapper');
	}
	get minValueDatePicker() {
		return new Datepicker('min-datepicker-wrapper');
	}
	get maxValueDatePicker() {
		return new Datepicker('max-datepicker-wrapper');
	}
}

export default DefaultPage;
