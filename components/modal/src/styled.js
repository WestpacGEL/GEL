/** @jsx jsx */

import React from 'react';
import { jsx, useTheme, paint } from '@westpac/core';

export const ModalBackdrop = props => {
	const styles = {
		position: 'fixed',
		zIndex: '1001',
		backgroundColor: 'rgba(0,0,0,0.5)',
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		display: 'flex',
		justifyContent: 'center',
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
	const { modal, breakpoints } = useTheme();
	const mq = paint(breakpoints);

	const styles = {
		overflow: 'auto',
		maxHeight: modal.maxHeight,
		margin: modal.margin,
		backgroundColor: modal.backgroundColor,
		borderRadius: modal.borderRadius,
		boxShadow: '0 5px 15px rgba(0,0,0,0.5)',
		transition: 'all 0.3s ease',
		width: [
			'auto',
			...(size === 'small' ? [modal.size.small.width] : [modal.size.medium.width]),
			...(size === 'large' ? [modal.size.large.width] : []),
		],

		'&.modal-appear': {
			opacity: 0,
		},

		'&.modal-appear-done': {
			transform: 'translate(0px,30px)',
		},
	};

	return <div css={mq(styles)} {...props} />;
};

export const Title = props => {
	const { modal } = useTheme();
	return (
		<span
			css={{
				fontSize: modal.title.fontSize,
				fontWeight: modal.title.justifyContent,
				color: modal.title.color,
			}}
			{...props}
		/>
	);
};
