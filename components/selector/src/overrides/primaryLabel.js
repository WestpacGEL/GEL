/** @jsx jsx */

import { jsx, useBrand, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const PrimaryLabel = ({ state: _, ...rest }) => <span {...rest} />;

// ==============================
// Styles
// ==============================

const primaryLabelStyles = (_, { secondaryLabel }) => {
	const { SPACING } = useBrand();

	return {
		label: getLabel('selector-option-primary-label'),
		display: 'inline-block',
		boxSizing: 'border-box',
		...(secondaryLabel && { width: '60%' }),
		paddingRight: SPACING(1),
	};
};

// ==============================
// Attributes
// ==============================

const primaryLabelAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultPrimaryLabel = {
	component: PrimaryLabel,
	styles: primaryLabelStyles,
	attributes: primaryLabelAttributes,
};
