import React from 'react';

export const Row = ({ style, ...props }) => (
	<div
		style={{
			alignItems: 'end',
			justifyContent: 'start',
			display: 'grid',
			gridAutoFlow: 'column',
			gridGap: 8,
			...style,
		}}
		{...props}
	/>
);
