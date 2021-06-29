/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Header = ({ state: _, ...rest }) => <header {...rest} />;

// ==============================
// Styles
// ==============================

const headerStyles = () => {
	return { label: getLabel('header'), display: 'flex', flex: 'none' };
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
