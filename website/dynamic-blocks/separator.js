/** @jsx jsx */
import React from 'react';
import { jsx, useBrand } from '@westpac/core';

const SeparatorComponent = () => {
	const { COLORS, SPACING } = useBrand();

	return (
		<div css={{ marginTop: `${SPACING(4)} !important`, marginBottom: `${SPACING(7)} !important` }}>
			<button
				css={{
					display: 'block',
					border: 0,
					background: 'transparent',
					cursor: 'pointer',
					textAlign: 'right',
					width: '100%',
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
				css={{ border: 'none', borderTop: `solid 1px ${COLORS.border}`, margin: `${SPACING(2)} 0` }}
			/>
		</div>
	);
};

// Separator
export const Separator = {
	component: SeparatorComponent,
};
