/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const HeaderLeft = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const headerLeftStyles = () => ({
	label: getLabel('sidebar-header-left'),
	display: 'flex',
	alignItems: 'center',
});

// ==============================
// Attributes
// ==============================

const headerLeftAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultHeaderLeft = {
	component: HeaderLeft,
	styles: headerLeftStyles,
	attributes: headerLeftAttributes,
};
