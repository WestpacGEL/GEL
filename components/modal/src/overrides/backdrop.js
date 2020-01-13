/** @jsx jsx */

import { jsx } from '@westpac/core';

export const Backdrop = ({ heading, open, onClose, size, dismissible, overrides, ...rest }) => (
	<div {...rest} />
);

export const backdropStyles = (_, {}) => {
	return {
		position: 'fixed',
		zIndex: '1001',
		backgroundColor: 'rgba(0,0,0,0.5)',
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'baseline',
		transition: 'all 0.3s ease',

		'&.modal-backdrop-enter': {
			opacity: 0,
		},

		'&.modal-backdrop-enter-active': {
			opacity: 1,
		},

		'&.modal-backdrop-exit': {
			opacity: 1,
		},

		'&.modal-backdrop-exit-active': {
			opacity: 0,
		},
	};
};
