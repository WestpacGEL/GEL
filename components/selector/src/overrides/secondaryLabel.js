/** @jsx jsx */

import { jsx, useBrand, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const SecondaryLabel = ({ state: _, ...rest }) => <span {...rest} />;

// ==============================
// Styles
// ==============================

const secondaryLabelStyles = () => {
	const { SPACING } = useBrand();

	return {
		label: getLabel('selector-option-secondary-label'),
		display: 'inline-block',
		boxSizing: 'border-box',
		width: '40%',
		textAlign: 'right',
		padding: `0 ${SPACING(1)}`,
	};
};

// ==============================
// Attributes
// ==============================

const secondaryLabelAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultSecondaryLabel = {
	component: SecondaryLabel,
	styles: secondaryLabelStyles,
	attributes: secondaryLabelAttributes,
};
