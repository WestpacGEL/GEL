/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Right = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const rightStyles = () => ({
	label: getLabel('header-right'),
	marginLeft: 'auto',
	display: 'flex',
	alignItems: 'center',
});

// ==============================
// Attributes
// ==============================

const rightAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultRight = {
	component: Right,
	styles: rightStyles,
	attributes: rightAttributes,
};
