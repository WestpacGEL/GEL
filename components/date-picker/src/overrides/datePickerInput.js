/** @jsx jsx */

import { useEffect, useRef } from 'react';
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
	id,
	state: _,
	onChange,
	onFocus,
	onBlur,
	onOpen,
	onClose,
	dateAdapter,
	localization,
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

	useEffect(() => {
		ref.current.localization = localization;
		ref.current.dateAdapter = dateAdapter;
	}, [localization, dateAdapter]);

	return <duet-date-picker ref={ref} identifier={id} {...rest}></duet-date-picker>;
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
