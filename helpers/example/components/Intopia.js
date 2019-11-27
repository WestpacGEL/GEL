/** @jsx jsx */

import { jsx } from '@westpac/core';

export function Intopia({ ignore, props }) {
	return (
		<div
			{...props}
			css={{
				background: ignore ? '#f3cccc' : '#ffffe5',
				border: '1px solid #000',
				padding: '1rem',
				color: '#000',
				fontSize: '16px',
				marginBottom: '1rem',

				'& p:last-child': {
					marginBottom: 0,
				},
			}}
		>
			<strong>INTOPIA NOTES</strong>
			<p>{ignore ? 'Ignore this component please' : 'This component is ready to be tested!'}</p>
		</div>
	);
}
