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

export const DatePicker = ({ overrides: componentOverrides, ...rest }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		DatePicker: defaultDatePicker,
		DatePickerInput: defaultDatePickerInput,
	};

	const state = {
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
		<DatePicker state={state} {...datePickerAttributes(state)} css={datePickerStyles(state)}>
			<DatePickerInput
				{...rest}
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
	...textInputPropTypes,

	/**
	 * The component input's `id` attribute
	 */
	id: PropTypes.string,

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
	...textInputDefaultProps,

	/* localization: {
		placeholder: 'DD-MM-YYYY',
	}, */
};

DatePicker.defaultProps = defaultProps;
