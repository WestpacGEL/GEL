/** @jsx jsx */

import { jsx, useMediaQuery, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Content = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const contentStyles = () => {
	const mq = useMediaQuery();

	return mq({
		label: getLabel('selector-option-content'),
		display: 'flex',
		flexDirection: ['column', null, 'row'],
		alignItems: ['flex-start', null, 'center'],
	})[0];
};

// ==============================
// Attributes
// ==============================

const contentAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultContent = {
	component: Content,
	styles: contentStyles,
	attributes: contentAttributes,
};
