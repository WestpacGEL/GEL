/** @jsx jsx */

import React from 'react';
import { VisuallyHidden } from '@westpac/a11y';
import { jsx } from '@westpac/core';

// ==============================
// Component
// ==============================

export const SwitchText = ({ srOnlyText, flipped, block, children }) => {
	return (
		<span
			css={{
				flex: block && 1,
				display: 'flex',
				alignItems: 'center',
				whiteSpace: 'normal',
				position: 'relative',
				...(flipped ? { paddingLeft: '0.375rem' } : { paddingRight: '0.375rem' }),
			}}
		>
			{srOnlyText ? <VisuallyHidden>children</VisuallyHidden> : children}
		</span>
	);
};
