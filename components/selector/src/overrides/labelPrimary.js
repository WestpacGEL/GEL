/** @jsx jsx */

import { jsx, useBrand, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const LabelPrimary = ({ state: _, ...rest }) => <span {...rest} />;

// ==============================
// Styles
// ==============================

const labelPrimaryStyles = () => ({
	label: getLabel('selector-option-label-primary'),
	width: '60%',
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
