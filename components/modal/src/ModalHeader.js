/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';
import { CloseIcon } from '@westpac/icon';
import { Button } from '@westpac/button';
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
				alignItems: 'flex-start',
				overflow: 'hidden',
				borderBottom: `${modal.header.borderWidth} solid ${modal.header.borderColor}`,
				padding: modal.header.padding,
			}}
			{...props}
		>
			<Title id={id}>{children}</Title>
			<Button
				appearance="link"
				css={{
					marginTop: '-1rem',
					marginRight: '-2.2rem',
					color: colors.text,
					':hover svg': {
						opacity: 0.5,
					},
				}}
				iconAfter={CloseIcon}
				onClick={onClose}
			/>
		</div>
	);
};

ModalHeader.propTypes = {
	/** id of the title for accessibility */
	id: PropTypes.string.isRequired,
	/** onClose function for the close button */
	onClose: PropTypes.func,
};

ModalHeader.defaultProps = {
	onClose: null,
};
