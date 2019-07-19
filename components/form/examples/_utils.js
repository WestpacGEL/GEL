/** @jsx jsx */

import { jsx } from '@westpac/core';

export const Box = props => (
	<div
		css={{
			alignItems: 'center',
			backgroundColor: 'rgba(197,59,0,0.15)',
			borderRadius: 1,
			color: '#c53b00',
			display: 'flex',
			height: '100%',
			justifyContent: 'center',
			minHeight: 60,
		}}
		{...props}
	/>
);