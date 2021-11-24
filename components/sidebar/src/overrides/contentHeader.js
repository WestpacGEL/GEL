/** @jsx jsx */

import { jsx, useMediaQuery, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const ContentHeader = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const contentHeaderStyles = (_, { scrolled }) => {
	const mq = useMediaQuery();

	return mq({
		label: getLabel('sidebar-content-header'),
		position: 'relative',
		padding: '0 0.75rem',
		height: '3.375rem',
		display: ['flex', null, null, 'none'],
		alignItems: 'center',

		...(scrolled && {
			'::after': {
				content: '""',
				display: 'block',
				position: 'absolute',
				zIndex: '1',
				left: 0,
				right: 0,
				top: '100%',
				height: '6px',
				pointerEvents: 'none',
				transition: 'all .2s',
				background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 100%)',
				willChange: 'opacity',
				opacity: 1,
			},
		}),
	})[0];
};

// ==============================
// Attributes
// ==============================

const contentHeaderAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultContentHeader = {
	component: ContentHeader,
	styles: contentHeaderStyles,
	attributes: contentHeaderAttributes,
};
