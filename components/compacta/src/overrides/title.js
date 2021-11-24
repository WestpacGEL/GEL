/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Title = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const titleStyles = () => ({
	label: getLabel('compacta-title'),

	flex: '1',
	display: 'flex',
	flexWrap: 'wrap',
	minWidth: 0,
});

// ==============================
// Attributes
// ==============================

const titleAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultTitle = {
	component: Title,
	styles: titleStyles,
	attributes: titleAttributes,
};
