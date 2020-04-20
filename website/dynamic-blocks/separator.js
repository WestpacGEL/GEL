/** @jsx jsx */
import React, { Fragment } from 'react';
import { jsx, useBrand } from '@westpac/core';

const SeparatorComponent = () => {
	const { COLORS } = useBrand();

	return (
		<Fragment>
			<button
				css={{
					display: 'block',
					border: 0,
					background: 'transparent',
					cursor: 'pointer',
					textAlign: 'right',
					width: '100%',
					paddingTop: '20px',
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
			<hr css={{ border: 'none', borderTop: `solid 1px #999`, margin: 0 }} />
		</Fragment>
	);
};

// Separator
export const Separator = {
	component: SeparatorComponent,
};
