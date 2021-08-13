/** @jsx jsx */

import { jsx, useMediaQuery, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Inner = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const innerStyles = (_, { fixed, scrolled }) => {
	const mq = useMediaQuery();

	return mq({
		label: getLabel('header-inner'),
		position: 'relative',
		flex: 1,
		backgroundColor: '#fff',
		textAlign: 'left',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginBottom: '1px',
		display: 'flex',
		height: ['3.375rem', null, '4.0625rem'],
		padding: ['0 0.75rem', null, '0 1.5rem'],
		width: '100%',

		// double check this
		borderBottom: `solid #e8e8ed`,
		borderBottomWidth: `${scrolled ? 0 : 1}px`,
		transition: 'border-bottom-width .2s',
		willChange: 'border-botom-width',

		// '::before': {
		// 	content: '""',
		// 	display: 'block',
		// 	position: 'absolute',
		// 	zIndex: '1',
		// 	left: 0,
		// 	right: 0,
		// 	top: '100%',
		// 	overflow: 'hidden',
		// 	opacity: scrolled ? 0 : 1,
		// 	borderTop: '1px solid #e8e8ed',
		// 	transition: 'opacity .2s',
		// 	willChange: 'opacity',
		// },
		...(fixed && {
			position: 'fixed',
			top: 0,
			left: 0,
			right: 0,
			zIndex: 1,
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
				opacity: scrolled ? 1 : 0,
			},
		}),
	})[0];
};

// ==============================
// Attributes
// ==============================

const innerAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultInner = {
	component: Inner,
	styles: innerStyles,
	attributes: innerAttributes,
};
