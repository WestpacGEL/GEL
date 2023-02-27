import { jsx, useBrand, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Crumb = ({ state: _, ...rest }) => <li {...rest} />;

// ==============================
// Styles
// ==============================

const crumbStyles = () => {
	const { COLORS } = useBrand();

	return {
		label: getLabel('breadcrumb-crumb'),
		boxSizing: 'border-box',
		display: 'inline-block',
		position: 'relative',
		color: COLORS.text,
		verticalAlign: 'middle',
	};
};

// ==============================
// Attributes
// ==============================

const crumbAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultCrumb = {
	component: Crumb,
	styles: crumbStyles,
	attributes: crumbAttributes,
};
