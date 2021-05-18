/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const LabelWrapper = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const labelWrapperStyles = () => ({
	label: getLabel('selector-option-label-wrapper'),
	display: 'flex',
});

// ==============================
// Attributes
// ==============================

const labelWrapperAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultLabelWrapper = {
	component: LabelWrapper,
	styles: labelWrapperStyles,
	attributes: labelWrapperAttributes,
};
