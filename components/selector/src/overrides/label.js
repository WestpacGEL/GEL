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
	const { PACKS, TYPE } = useBrand();

	return {
		label: getLabel('selector-option-label'),
		flex: 1,
		display: 'flex',
		...PACKS.typeScale.bodyFont[8],
		...TYPE.bodyFont[500],
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
