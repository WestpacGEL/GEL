/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const TitlePrimary = ({ state: _, ...rest }) => <span {...rest} />;

// ==============================
// Styles
// ==============================

const titlePrimaryStyles = () => ({
	label: getLabel('compacta-titlePrimary'),
	flex: '1 100%',
	fontWeight: 'bold',
	marginRight: '0.75rem',
	overflow: 'hidden',
	whiteSpace: 'nowrap',
	textOverflow: 'ellipsis',
});

// ==============================
// Attributes
// ==============================

const titlePrimaryAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultTitlePrimary = {
	component: TitlePrimary,
	styles: titlePrimaryStyles,
	attributes: titlePrimaryAttributes,
};
