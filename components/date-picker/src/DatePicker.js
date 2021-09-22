/** @jsx jsx */

import React from 'react';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultDatePicker } from './overrides/datePicker';
import { defaultDatePickerInput } from './overrides/datePickerInput';

import {
	propTypes as textInputPropTypes,
	defaultProps as textInputDefaultProps,
} from '@westpac/text-input';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const DatePicker = ({
	id,
	placeholder,
	block,
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
	...rest
}) => {
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
		block,
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

// ==============================
// Types
// ==============================

DatePicker.propTypes = {
	/**
	 * The component input's `id` attribute
	 */
	id: PropTypes.string,

	/**
	 * The component input's `placeholder` attribute
	 */
	placeholder: PropTypes.string,

	/**
	 * Block mode
	 *
	 * Fit input width to its parent width
	 */
	block: PropTypes.oneOfType([PropTypes.bool, PropTypes.arrayOf(PropTypes.bool)]),

	/**
	 * Component size
	 */
	size: textInputPropTypes.size,

	/**
	 * Maximum date allowed to be picked. Must be in IS0-8601 format: YYYY-MM-DD.
	 */
	max: PropTypes.string,

	/**
	 * Minimum date allowed to be picked. Must be in IS0-8601 format: YYYY-MM-DD.
	 */
	min: PropTypes.string,

	/*
	 * Name of the date picker input
	 */
	name: PropTypes.string,

	/*
	 * Date picker input value. Must be in IS0-8601 format: YYYY-MM-DD
	 */
	value: PropTypes.string,

	/*
	 * Disable specific dates. Must be in IS0-8601 format: YYYY-MM-DD
	 */
	disableDates: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),

	/*
	 * Disable days of the week. 0 for Sunday, 1 for Monday, etc.
	 */
	disableDaysOfWeek: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),

	/*
	 * Disable weekend days
	 */
	disableWeekends: PropTypes.bool,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		DatePicker: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

export const defaultProps = {
	placeholder: '',
	block: false,
	size: textInputDefaultProps.size,
};

DatePicker.defaultProps = defaultProps;
