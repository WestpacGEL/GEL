import React from 'react';
import { jsx, useBrand } from '@westpac/core';

const SeparatorComponent = () => {
	const { COLORS, SPACING } = useBrand();

	return (
		<div css={{ marginTop: `${SPACING(2)}`, marginBottom: `${SPACING(4)}` }}>
			<button
				type="button"
				css={{
					display: 'block',
					border: 0,
					background: 'transparent',
					cursor: 'pointer',
					textAlign: 'right',
					width: '100%',
					paddingRight: '18px !important',
				}}
				onClick={(e) => {
					e.preventDefault();
					window.scroll({
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
