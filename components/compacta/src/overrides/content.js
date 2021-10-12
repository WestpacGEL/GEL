/** @jsx jsx */

import { jsx, useMediaQuery, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Content = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const contentStyles = (_, { open }) => {
	const mq = useMediaQuery();
	return mq({
		label: getLabel('compacta-content'),
		padding: '0 1.125rem .375rem',
		paddingLeft: [null, null, '3.375rem'],
		display: !open && 'none',
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
