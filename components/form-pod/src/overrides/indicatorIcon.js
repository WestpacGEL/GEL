/** @jsx jsx */

import { jsx, useBrand, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const IndicatorIcon = ({ state: { icon: Icon }, ...rest }) => <Icon size="medium" {...rest} />;

// ==============================
// Styles
// ==============================

const indicatorIconStyles = () => {
	return { label: getLabel('formPod-indicator-icon'), marginLeft: '0.75rem' };
};

// ==============================
// Attributes
// ==============================

const indicatorIconAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultIndicatorIcon = {
	component: IndicatorIcon,
	styles: indicatorIconStyles,
	attributes: indicatorIconAttributes,
};
