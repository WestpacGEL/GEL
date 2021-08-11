/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const LabelPrimary = ({ state: _, ...rest }) => <span {...rest} />;

// ==============================
// Styles
// ==============================

const labelPrimaryStyles = (_, { secondaryLabel }) => ({
	label: getLabel('selector-option-label-primary'),
	...(secondaryLabel && { width: '50%' }),
});

// ==============================
// Attributes
// ==============================

const labelPrimaryAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultLabelPrimary = {
	component: LabelPrimary,
	styles: labelPrimaryStyles,
	attributes: labelPrimaryAttributes,
};
