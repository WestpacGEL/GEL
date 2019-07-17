/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';

export const ModalFooter = props => {
	const theme = useTheme();

	return (
		<div
			css={{
				backgroundColor: `${theme.colors.background}`,
				borderTop: `1px solid ${theme.colors.border}`,
				textAlign: 'right',
				padding: '12px 18px',
			}}
			{...props}
		/>
	);
};
