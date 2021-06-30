/** @jsx jsx */

import { useEffect, useLayoutEffect, useRef } from 'react';
import { jsx } from '@westpac/core';

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
		if (!customElements.get('duet-date-picker')) {
			applyPolyfills().then(() => {
				defineCustomElements(window);
			});
		}
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
			let d = date.getDate().toString(10);
			let m = (date.getMonth() + 1).toString(10);
			const y = date.getFullYear().toString(10);

			// Days are not zero-indexed, so pad if less than 10
			if (date.getDate() < 10) {
				d = `0${d}`;
			}
			// Months *are* zero-indexed, pad if less than 9!
			if (date.getMonth() < 9) {
				m = `0${m}`;
			}

			return `${d}/${m}/${y}`;
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
			if (disableWeekends) {
				return date.getDay() === 0 || date.getDay() === 6;
			}
			if (disableDaysOfWeek) {
				return disableDaysOfWeek.includes(date.getDay());
			}
			}

			return false;
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
