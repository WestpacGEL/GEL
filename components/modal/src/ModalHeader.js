/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';
import { CloseIcon } from '@westpac/icon';
import { Title } from './styled';

// ==============================
// Component
// ==============================
export const ModalHeader = ({ id, onClose, children, ...props }) => {
	const { modal, colors } = useTheme();

	return (
		<div
			css={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				overflow: 'hidden',
				borderBottom: `${modal.header.borderWidth} solid ${modal.header.borderColor}`,
				padding: modal.header.padding,
			}}
			{...props}
		>
			<Title id={id}>{children}</Title>
			<button
				css={{
					border: 'none',
					padding: '5px 12px',
					cursor: 'pointer',
					touchAction: 'manipulation',
					'&:hover svg': { opacity: 0.5 },
				}}
				onClick={onClose}
			>
				<CloseIcon size="small" color={colors.text} />
			</button>
		</div>
	);
};

ModalHeader.propTypes = {
	/** id of the title for accessibility */
	id: PropTypes.string,
	/** onClose function for the close button */
	onClose: PropTypes.func,
};

ModalHeader.defaultProps = {
	id: null,
	onClose: null,
};
