/** @jsx jsx */

import { jsx, useMediaQuery } from '@westpac/core';
import { forwardRef } from 'react';

export const Modal = forwardRef(
	({ heading, open, onClose, size, dismissible, overrides, ...rest }, ref) => (
		<div ref={ref} {...rest} />
	)
);

export const modalStyles = (_, { size }) => {
	const mq = useMediaQuery();

	return mq({
		overflow: 'auto',
		maxHeight: '85%',
		margin: '0 0.75rem',
		backgroundColor: '#fff',
		borderRadius: '0.1875rem',
		boxShadow: '0 5px 15px rgba(0,0,0,0.5)',
		transition: 'all 0.3s ease',
		width: ['auto', size === 'small' ? '18.75rem' : '37.5rem', size === 'large' && '56.25rem'],

		'&.modal-appear': {
			opacity: 0,
		},

		'&.modal-appear-done': {
			transform: 'translate(0,1.875rem)',
		},
	})[0];
};
