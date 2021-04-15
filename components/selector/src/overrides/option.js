/** @jsx jsx */

import { jsx, useMediaQuery, getLabel, useBrand } from '@westpac/core';

// ==============================
// Component
// ==============================

const Option = ({ state: _, ...rest }) => <label {...rest} />;

// ==============================
// Styles
// ==============================

export const optionStyles = () => {
	const { SPACING } = useBrand();
	const mq = useMediaQuery();

	return mq({
		label: getLabel('selector-option'),
		display: 'block',
		':not(:last-child)': { marginBottom: SPACING(4) },
	})[0];
};

// ==============================
// Attributes
// ==============================

const optionAttributes = (_, { optionId }) => ({
	htmlFor: optionId, //a11y: use explicit association
});

// ==============================
// Exports
// ==============================

export const defaultOption = {
	component: Option,
	styles: optionStyles,
	attributes: optionAttributes,
};
