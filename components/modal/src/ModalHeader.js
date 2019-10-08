/** @jsx jsx */

import React from 'react';
import { jsx, useTheme } from '@westpac/core';
import { CloseIcon } from '@westpac/icon';
// import { Button } from '@westpac/button';
import { useModalContext } from './Modal';
import { Title } from './styled';

// ==============================
// Component
// ==============================
export const ModalHeader = ({ children, ...props }) => {
	const { COLORS } = useTheme();
	const { titleId, handleClose } = useModalContext();

	return (
		<div
			css={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'flex-start',
				overflow: 'hidden',
				borderBottom: `1px solid ${COLORS.border}`,
				padding: '1rem 1.5rem 0.75rem',
			}}
			{...props}
		>
			<Title id={titleId}>{children}</Title>
			{/* waiting until button component is fixed */}
			{/* <Button
				appearance="link"
				css={{
					marginTop: '-1rem',
					marginRight: '-2.2rem',
					color: COLORS.text,
					':hover svg': {
						opacity: 0.5,
					},
				}}
				iconAfter={CloseIcon}
				onClick={onClose}
			/> */}
		</div>
	);
};
