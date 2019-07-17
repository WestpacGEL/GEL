/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';
import { CloseIcon } from '@westpac/icon';

// ==============================
// Utils
// ==============================
const Title = props => {
	const theme = useTheme();
	return (
		<span
			css={{
				fontSize: 18,
				fontWeight: 700,
				color: `${theme.colors.text}`,
			}}
			{...props}
		/>
	);
};

// ==============================
// Component
// ==============================
export const ModalHeader = ({ id, onClose, children, ...props }) => {
	const theme = useTheme();

	// the positioning of the close icon isnt the same as current gel :(
	return (
		<div
			css={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				overflow: 'hidden',
				borderBottom: `1px solid ${theme.colors.hero.default}`,
				padding: '16px 24px 12px',
			}}
			{...props}
		>
			<Title id={id}>{children}</Title>
			<button
				css={{ border: 'none', padding: 0, '&:hover svg': { opacity: 0.5 } }}
				onClick={onClose}
			>
				<CloseIcon size="small" color={theme.colors.text} />
			</button>
		</div>
	);
};
