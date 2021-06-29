/** @jsx jsx */

import { jsx, useMediaQuery, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Inner = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const innerStyles = () => {
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
		'::before': {
			content: '""',
			display: 'block',
			position: 'absolute',
			zIndex: '1',
			left: 0,
			right: 0,
			top: '100%',
			overflow: 'hidden',
			borderTop: '1px solid #e8e8ed', // where is this color from
			transition: 'opacity .2s',
			willChange: 'opacity',
		},
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
