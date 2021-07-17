/** @jsx jsx */

import { jsx, useBrand, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Template = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const templateStyles = () => {
	const { COLORS } = useBrand();

	return {
		label: getLabel('template'),
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		minHeight: '100vh',
		width: '100%',
		marginLeft: 'auto',
		marginRight: 'auto',
		maxWidth: '1922px',
		backgroundColor: COLORS.background,
	};
};

// ==============================
// Attributes
// ==============================

const templateAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultTemplate = {
	component: Template,
	styles: templateStyles,
	attributes: templateAttributes,
};
