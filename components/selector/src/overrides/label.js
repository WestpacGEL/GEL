/** @jsx jsx */

import { jsx, useBrand, getLabel } from '@westpac/core';
import { Body } from '@westpac/body';

// ==============================
// Component
// ==============================

const Label = ({ state: _, ...rest }) => <Body tag="label" {...rest} />;

// ==============================
// Styles
// ==============================

const labelStyles = () => {
	const { PACKS } = useBrand();

	return {
		label: getLabel('selector-option-label'),
		...PACKS.typeScale.bodyFont[8],
		':disabled, fieldset:disabled &': {
			pointerEvents: 'none',
		},
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
