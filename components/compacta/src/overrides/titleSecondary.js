/** @jsx jsx */

import { jsx, getLabel, useMediaQuery } from '@westpac/core';

// ==============================
// Component
// ==============================

const TitleSecondary = ({ state: _, ...rest }) => <span {...rest} />;

// ==============================
// Styles
// ==============================

const titleSecondaryStyles = () => {
	const mq = useMediaQuery();
	return mq({
		label: getLabel('compacta-titleSecondary'),
		flex: ['1 100%', null, '1'],
		marginTop: '0.125rem',
		marginRight: '0.75rem',
		overflow: 'hidden',
		whiteSpace: 'nowrap',
		textOverflow: 'ellipsis',
	})[0];
};

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
