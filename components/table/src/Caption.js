/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand } from '@westpac/core';

// ==============================
// Component
// ==============================

export const Caption = props => {
	const { COLORS, TYPE } = useBrand();

	return (
		<caption
			css={{
				fontSize: '1.125rem',
				textAlign: 'left',
				marginBottom: '0.75rem',
				...TYPE.bodyFont[300],
			}}
			{...props}
		/>
	);
};

// ==============================
// Types
// ==============================
