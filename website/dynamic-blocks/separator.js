/** @jsx jsx */
import React, { Fragment } from 'react';
import { jsx } from '@westpac/core';

const SeparatorComponent = props => {
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
				}}
				onClick={e => {
					e.preventDefault();
					window.scroll({
						top: 0,
						behavior: 'smooth',
					});
				}}
			>
				Scroll To Top
			</button>
			<hr {...props} css={{ border: 'none', borderTop: `solid 1px #eee`, margin: `20px 0` }} />
		</Fragment>
	);
};

// Separator
export const Separator = {
	component: SeparatorComponent,
};
