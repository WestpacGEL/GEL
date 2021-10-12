/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const TitleTertiary = ({ state: _, ...rest }) => <span {...rest} />;

// ==============================
// Styles
// ==============================

const titleTertiaryStyles = () => ({
	label: getLabel('compacta-titleTertiary'),
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

const titleTertiaryAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultTitleTertiary = {
	component: TitleTertiary,
	styles: titleTertiaryStyles,
	attributes: titleTertiaryAttributes,
};
