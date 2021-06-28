/** @jsx jsx */

import React, { useEffect, useRef } from 'react';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultDatePicker } from './overrides/datePicker';
import pkg from '../package.json';

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

export const DatePicker = ({
	onChange,
	onFocus,
	onBlur,
	onOpen,
	onClose,
	dateAdapter,
	localization,
	overrides: componentOverrides,
	...rest
}) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		DatePicker: defaultDatePicker,
	};

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

	useEffect(() => {
		ref.current.localization = localization;
		ref.current.dateAdapter = dateAdapter;
	}, [localization, dateAdapter]);

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
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<DatePicker
			ref={ref}
			{...rest}
			state={state}
			{...datePickerAttributes(state)}
			css={datePickerStyles(state)}
		/>
	);
};

// ==============================
// Types
// ==============================

DatePicker.propTypes = {
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

DatePicker.defaultProps = {};
