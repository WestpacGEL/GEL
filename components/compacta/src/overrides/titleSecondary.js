/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const TitleSecondary = ({ state: _, ...rest }) => <span {...rest} />;

// ==============================
// Styles
// ==============================

const titleSecondaryStyles = () => ({
	label: getLabel('compacta-titleSecondary'),
	flex: 1,
	marginTop: '0.125rem',
	marginRight: '0.75rem',
	overflow: 'hidden',
	whiteSpace: 'nowrap',
	textOverflow: 'ellipsis',
});

// ==============================
// Attributes
// ==============================

const titleSecondaryAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultTitleSecondary = {
	component: TitleSecondary,
	styles: titleSecondaryStyles,
	attributes: titleSecondaryAttributes,
};
