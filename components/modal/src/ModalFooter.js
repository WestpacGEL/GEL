/** @jsx jsx */

import React from 'react';
import { jsx, useTheme } from '@westpac/core';

export const ModalFooter = props => {
	const { modal } = useTheme();

	return (
		<div
			css={{
				backgroundColor: modal.footer.backgroundColor,
				borderTop: `${modal.footer.borderWidth} solid ${modal.footer.borderColor}`,
				textAlign: 'right',
				padding: modal.footer.padding,
				'button + button ': {
					marginLeft: 6,
				},
			}}
			{...props}
		/>
	);
};
