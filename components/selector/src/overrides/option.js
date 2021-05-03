/** @jsx jsx */

import { jsx, useMediaQuery, getLabel, useBrand } from '@westpac/core';

// ==============================
// Component
// ==============================

const Option = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

export const optionStyles = () => {
	const { SPACING } = useBrand();
	const mq = useMediaQuery();

	return mq({
		label: getLabel('selector-option'),
		position: 'relative',
		':not(:last-child)': { marginBottom: SPACING(4) },
	})[0];
};

// ==============================
// Attributes
// ==============================

const optionAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultOption = {
	component: Option,
	styles: optionStyles,
	attributes: optionAttributes,
};
