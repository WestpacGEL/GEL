/** @jsx jsx */

import { jsx, useBrand, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Label = ({ state: _, ...rest }) => <label {...rest} />;

// ==============================
// Styles
// ==============================

const labelStyles = () => {
	const { PACKS } = useBrand();

	return {
		label: getLabel('selector-option-label'),
		...PACKS.typeScale.bodyFont[8],
	};
};

// ==============================
// Attributes
// ==============================

const labelAttributes = (_, { optionId }) => ({
	htmlFor: optionId, //a11y: use explicit association
});

// ==============================
// Exports
// ==============================

export const defaultLabel = {
	component: Label,
	styles: labelStyles,
	attributes: labelAttributes,
};
