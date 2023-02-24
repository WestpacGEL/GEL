import PropTypes from 'prop-types';
import React from 'react';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';

import { defaultDatePicker } from './overrides/datePicker';
import { defaultDatePickerInput } from './overrides/datePickerInput';

import { defaultProps as textInputDefaultProps } from '@westpac/text-input';
import pkg from '../package.json';

interface DatePickerProps {
	/**
	 * The component input's `id` attribute
	 */
	id?: string;
	/**
	 * The component input's `placeholder` attribute
	 */
	placeholder?: string;
	/**
	 * Component size
	 */
	size?: unknown;
	/**
	 * Maximum date allowed to be picked. Must be in IS0-8601 format: YYYY-MM-DD.
	 */
	max?: string;
	/**
	 * Minimum date allowed to be picked. Must be in IS0-8601 format: YYYY-MM-DD.
	 */
	min?: string;
	/*
	 * Name of the date picker input
	 */
	name?: string;
	/*
	 * Date picker input value. Must be in IS0-8601 format: YYYY-MM-DD
	 */
	value?: string;
	/*
	 * Disable specific dates. Must be in IS0-8601 format: YYYY-MM-DD
	 */
	disableDates?: string | string[];
	/*
	 * Disable days of the week. 0 for Sunday, 1 for Monday, etc.
	 */
	disableDaysOfWeek?: number | number[];
	/*
	 * Disable weekend days
	 */
	disableWeekends?: boolean;
	/*
	 * onChange
	 */
	onChange?: (...args: unknown[]) => unknown;
	/*
	 * onFocus
	 */
	onFocus?: (...args: unknown[]) => unknown;
	/*
	 * onBlur
	 */
	onBlur?: (...args: unknown[]) => unknown;
	/*
	 * onOpen
	 */
	onOpen?: (...args: unknown[]) => unknown;
	/*
	 * onClose
	 */
	onClose?: (...args: unknown[]) => unknown;
	/**
	 * The override API
	 */
	overrides?: {
		DatePicker?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const DatePicker = ({
	id,
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
	placeholder = '',
	size = textInputDefaultProps.size,
	overrides: componentOverrides,
	...rest
}: DatePickerProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		DatePicker: defaultDatePicker,
		DatePickerInput: defaultDatePickerInput,
	};

	const state = {
		id,
		placeholder,
		size,
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
		overrides: componentOverrides,
		...rest,
	};

	const {
		DatePicker: {
			component: DatePicker,
			styles: datePickerStyles,
			attributes: datePickerAttributes,
		},
		DatePickerInput: {
			component: DatePickerInput,
			styles: datePickerInputStyles,
			attributes: datePickerInputAttributes,
		},
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<DatePicker
			{...rest}
			state={state}
			{...datePickerAttributes(state)}
			css={datePickerStyles(state)}
		>
			<DatePickerInput
				state={state}
				{...datePickerInputAttributes(state)}
				css={datePickerInputStyles(state)}
			/>
		</DatePicker>
	);
};

DatePicker.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn proptypes"  |
	// ----------------------------------------------------------------------
	disableDates: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]),
	disableDaysOfWeek: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number]),
	disableWeekends: PropTypes.bool,
	/**
	 * The component input's `id` attribute
	 */
	id: PropTypes.string,
	/**
	 * Maximum date allowed to be picked. Must be in IS0-8601 format: YYYY-MM-DD.
	 */
	max: PropTypes.string,
	/**
	 * Minimum date allowed to be picked. Must be in IS0-8601 format: YYYY-MM-DD.
	 */
	min: PropTypes.string,
	name: PropTypes.string,
	onBlur: PropTypes.func,
	onChange: PropTypes.func,
	onClose: PropTypes.func,
	onFocus: PropTypes.func,
	onOpen: PropTypes.func,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		DatePicker: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
	/**
	 * The component input's `placeholder` attribute
	 */
	placeholder: PropTypes.string,
	/**
	 * Component size
	 */
	size: PropTypes.any,
	value: PropTypes.string,
};
