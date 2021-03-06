/** @jsx jsx */

import { jsx, useBrand, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Label = ({ state: { type }, ...rest }) => {
	const Tag = type === 'button' || type === 'submit' ? 'div' : 'label';
	return <Tag {...rest} />;
};

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

const labelAttributes = (_, { type, optionId }) => ({
	htmlFor: type !== 'button' ? optionId : undefined, //a11y: use explicit association
});

// ==============================
// Exports
// ==============================

export const defaultLabel = {
	component: Label,
	styles: labelStyles,
	attributes: labelAttributes,
};
