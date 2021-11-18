/** @jsx jsx */

import { jsx, useMediaQuery, getLabel, useBrand } from '@westpac/core';

// ==============================
// Component
// ==============================

const Content = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const contentStyles = (_, { look }) => {
	const mq = useMediaQuery();
	const { COLORS } = useBrand();
	return mq({
		label: getLabel('compacta-content'),
		padding: '0 1.125rem .375rem',
		paddingLeft: [null, null, '3.375rem'],
		backgroundColor: look === 'default' ? COLORS.light : '#fff',
	})[0];
};

// ==============================
// Attributes
// ==============================

const contentAttributes = (_, { open }) => ({ 'aria-hidden': !open });

// ==============================
// Exports
// ==============================

export const defaultContent = {
	component: Content,
	styles: contentStyles,
	attributes: contentAttributes,
};
