import { jsx, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const IndicatorText = ({ state: _, ...rest }) => <span {...rest} />;

// ==============================
// Styles
// ==============================

const indicatorTextStyles = () => {
	return { label: getLabel('formPod-indicator-text'), verticalAlign: 'middle' };
};

// ==============================
// Attributes
// ==============================

const indicatorTextAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultIndicatorText = {
	component: IndicatorText,
	styles: indicatorTextStyles,
	attributes: indicatorTextAttributes,
};
