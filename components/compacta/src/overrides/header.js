/** @jsx jsx */

import { jsx, useBrand, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Header = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const headerStyles = (_, { open }) => {
	const { COLORS } = useBrand();
	return {
		label: getLabel('compacta-header'),
		display: 'flex',
		padding: '0.8125rem 1.125rem',
		fontSize: '1rem',
		color: COLORS.text,
		backgroundColor: '#fff',
	};
};

// ==============================
// Attributes
// ==============================

const headerAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultHeader = {
	component: Header,
	styles: headerStyles,
	attributes: headerAttributes,
};
