/** @jsx jsx */

import React from 'react';
import { jsx, useTheme } from '@westpac/core';

//until core is published with updates
import { paint } from '../../core/src';

export const ModalBackdrop = props => {
	const styles = {
		position: 'fixed',
		backgroundColor: 'rgba(0,0,0,0.5)',
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-start',
		padding: '0 12px',
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
	return <div css={styles} {...props} />;
};

export const StyledModal = ({ size, ...props }) => {
	const { breakpoints } = useTheme();
	const mq = paint(breakpoints);

	const styles = {
		overflow: 'auto',
		maxHeight: '85%',
		backgroundColor: '#fff',
		borderRadius: 3,
		boxShadow: '0 5px 15px rgba(0,0,0,0.5)',
		transition: 'all 0.3s ease',
		width: ['auto', ...(size === 'small' ? [300] : [600]), ...(size === 'large' ? [900] : [])],

		'&.modal-appear': {
			opacity: 0,
		},

		'&.modal-appear-done': {
			transform: 'translate(0px,30px)',
		},
	};

	return <div css={mq(styles)} {...props} />;
};
