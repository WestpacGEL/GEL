import { jsx, useBrand, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Indicator = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const indicatorStyles = () => {
	const { COLORS } = useBrand();

	return { label: getLabel('formPod-indicator'), color: COLORS.muted };
};

// ==============================
// Attributes
// ==============================

const indicatorAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultIndicator = {
	component: Indicator,
	styles: indicatorStyles,
	attributes: indicatorAttributes,
};
