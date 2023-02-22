import { jsx, useBrand, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Wrapper = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const wrapperStyles = () => {
	const { COLORS } = useBrand();

	return {
		label: getLabel('table-wrapper'),
		'@media screen and (max-width: 480px)': {
			width: '100%',
			marginBottom: '1.125rem',
			overflowY: 'hidden',
			overflowX: 'auto',
		},
	};
};

// ==============================
// Attributes
// ==============================

const wrapperAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultWrapper = {
	component: Wrapper,
	styles: wrapperStyles,
	attributes: wrapperAttributes,
};
