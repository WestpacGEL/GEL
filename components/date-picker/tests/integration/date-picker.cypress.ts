import DefaultPage from '../pages/default.page';
import DisabledDaysPage from '../pages/disabled-days.page';

describe('Date Picker', () => {
	const defaultPage = new DefaultPage();
	const disableDaysPage = new DisabledDaysPage();

	it('It should show a picker when click on the calendar button', () => {
		defaultPage.visit();
		defaultPage.defaultPicker.dateToggleButton.click();
		defaultPage.defaultPicker.datePickerDialog.should('be.visible');
	});

	it('The date selected should be selected', () => {
		defaultPage.visit();
		const day = 4;
		const month = 3;
		const year = 2023;

		defaultPage.defaultPicker.datePickerInput.type(`0${day}-0${month}-${year}`);
		defaultPage.defaultPicker.dateToggleButton.click();

		defaultPage.defaultPicker.datePickerSelectedDate.should(($button) => {
			expect(+$button.find('[aria-hidden]').text()).to.be.equal(4);
		});
		defaultPage.defaultPicker.selectedMonth.should('have.value', month - 1);
		defaultPage.defaultPicker.selectedYear.should('have.value', year);
	});

	it('The placeholder value should be populated on input', () => {
		defaultPage.visit();
		defaultPage.placeholderPicker.datePickerInput.should('have.attr', 'placeholder', 'DD-MM-YYYY');
	});

	it('Min value should block all dates before that specific date', () => {
		defaultPage.visit();
		// Min value: 2021-06-28
		defaultPage.minValueDatePicker.datePickerInput.type('28-06-2021');
		defaultPage.minValueDatePicker.dateToggleButton.click();
		const dateButton = defaultPage.minValueDatePicker.datePickerDialog
			.find('.duet-date__table')
			.contains('27');
		dateButton.should('have.attr', 'disabled');
	});

	it('Max value should block all dates after that specific date', () => {
		defaultPage.visit();
		// Max date: 2021-06-30
		defaultPage.maxValueDatePicker.datePickerInput.type('30-06-2021');
		defaultPage.maxValueDatePicker.dateToggleButton.click();
		const dateButton = defaultPage.maxValueDatePicker.datePickerDialog
			.find('.duet-date__table')
			.contains('1 July');
		dateButton.should('have.attr', 'disabled');
	});

	it('using Disable dates should disable the specific week days', () => {
		disableDaysPage.visit();
		disableDaysPage.disableWeekDatePicker.dateToggleButton.click();
		const DISABLE_WEEKDAYS = [1, 3, 5];
		DISABLE_WEEKDAYS.forEach((weekDay) => {
			disableDaysPage.disableWeekDatePicker.datePickerDialog
				.get(
					`[data-cy="disable-weeks-datepicker-wrapper"] table > tbody > tr td:nth-child(${weekDay}) button`
				)
				.should('have.class', 'is-disabled');
		});
	});

	it('using Disable dates should disable the specific dates. ', () => {
		// Disables 2021-06-01, 2021-06-28 and 2021-06-29
		disableDaysPage.visit();
		disableDaysPage.disableSpecificDatesDatePicker.datePickerInput.type('27-06-2021');
		disableDaysPage.disableSpecificDatesDatePicker.dateToggleButton.click();
		['1 June', '28 June', '29 June'].forEach((date) => {
			disableDaysPage.disableSpecificDatesDatePicker.datePickerDialog
				.find('.duet-date__table')
				.contains(date)
				.should('have.class', 'is-disabled');
		});
	});
});
