/** @jsx jsx */
import React, { Fragment } from 'react';
import { jsx, useBrand } from '@westpac/core';

const SeparatorComponent = () => {
	const { COLORS } = useBrand();

	return (
		<div css={{ margin: '3.75rem 0 !important' }}>
			<button
				css={{
					display: 'block',
					border: 0,
					background: 'transparent',
					cursor: 'pointer',
					textAlign: 'right',
					width: '100%',
					marginBottom: '0 !important',
				}}
				onClick={e => {
					e.preventDefault();
					const el = document.querySelector('main') || window;
					el.scroll({
						top: 0,
						left: 0,
						behavior: 'smooth',
					});
				}}
			>
				Top <span css={{ color: COLORS.primary }}>&uarr;</span>
			</button>
			<hr
				css={{
					border: 'none',
					borderTop: `solid 1px ${COLORS.border}`,
					margin: `0.75rem 0 0 !important`,
				}}
			/>
		</div>
	);
};

// Separator
export const Separator = {
	component: SeparatorComponent,
};
