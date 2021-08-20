/** @jsx jsx */

import { useEffect, useLayoutEffect, useRef } from 'react';
import { jsx, asArray } from '@westpac/core';
import { printAusDate, parseISODate, isEqual } from '../_utils';

import { applyPolyfills, defineCustomElements } from '@duetds/date-picker/dist/loader';

function useListener(ref, eventName, handler) {
	useEffect(() => {
		if (ref.current) {
			const element = ref.current;
			element.addEventListener(eventName, handler);
			return () => element.removeEventListener(eventName, handler);
		}
	}, [eventName, handler, ref]);
}

// ==============================
// Component
// ==============================

const DatePickerInput = ({
	state: {
		id,
		placeholder,
		max,
		min,
		name,
		value,
		disableDates,
		disableDaysOfWeek,
		disableWeekends,
		onChange,
		onFocus,
		onBlur,
		onOpen,
		onClose,
	},
	className,
	...rest
}) => {
	useEffect(() => {
		// Register Duet Date Picker
		applyPolyfills().then(() => {
			defineCustomElements(window);
		});
	}, []);

	const ref = useRef(null);

	useListener(ref, 'duetChange', onChange);
	useListener(ref, 'duetFocus', onFocus);
	useListener(ref, 'duetBlur', onBlur);
	useListener(ref, 'duetOpen', onOpen);
	useListener(ref, 'duetClose', onClose);

	const dateAdapter = {
		parse(value = '', createDate) {
			const matches = value.match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/);

			if (matches) {
				return createDate(matches[3], matches[2], matches[1]);
			}
		},
		format(date) {
			return printAusDate(date);
		},
	};

	const localization = {
		buttonLabel: 'Choose date',
		placeholder,
		selectedDateMessage: 'Selected date is',
		prevMonthLabel: 'Previous month',
		nextMonthLabel: 'Next month',
		monthSelectLabel: 'Month',
		yearSelectLabel: 'Year',
		closeLabel: 'Close window',
		calendarHeading: 'Choose a date',
		dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		monthNames: [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		],
		monthNamesShort: [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec',
		],
	};

	useLayoutEffect(() => {
		ref.current.dateAdapter = dateAdapter;
		ref.current.localization = localization;
		ref.current.value = value;

		ref.current.isDateDisabled = (date) => {
			let isDisabled = false;

			if (disableWeekends && (date.getDay() === 0 || date.getDay() === 6)) {
				isDisabled = true;
			}
			if (disableDaysOfWeek && asArray(disableDaysOfWeek).includes(date.getDay())) {
				isDisabled = true;
			}
			if (disableDates && asArray(disableDates).some((d) => isEqual(date, parseISODate(d)))) {
				isDisabled = true;
			}

			return isDisabled;
		};
	}, []);

	useLayoutEffect(() => {
		ref.current.value = value;
	}, [value]);

	useEffect(() => {
		ref.current.identifier = id;
		ref.current.name = name;
	}, []);

	useEffect(() => {
		ref.current.max = max;
		ref.current.min = min;
	}, [max, min]);

	return <duet-date-picker ref={ref} {...rest} />;
};

// ==============================
// Styles
// ==============================

const datePickerInputStyles = () => ({});

// ==============================
// Attributes
// ==============================

const datePickerInputAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultDatePickerInput = {
	component: DatePickerInput,
	styles: datePickerInputStyles,
	attributes: datePickerInputAttributes,
};
