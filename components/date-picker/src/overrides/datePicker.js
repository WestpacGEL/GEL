/** @jsx jsx */

import { jsx, useBrand, useMediaQuery, css } from '@westpac/core';

// ==============================
// Component
// ==============================

const DatePicker = ({ state: _, ...rest }) => (
	<duet-date-picker ref={ref} {...props}></duet-date-picker>
);

// ==============================
// Styles
// ==============================

const datePickerStyles = () => {
	const mq = useMediaQuery();
	const { COLORS, SPACING } = useBrand();

	return mq({})[0];
};

// ==============================
// Attributes
// ==============================

const datePickerAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultDatePicker = {
	component: DatePicker,
	styles: datePickerStyles,
	attributes: datePickerAttributes,
};
