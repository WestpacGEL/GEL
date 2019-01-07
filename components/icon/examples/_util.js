import React from 'react';

export const Row = props => (
	<div
		style={{
			alignItems: 'end',
			justifyContent: 'start',
			display: 'grid',
			gridAutoFlow: 'column',
			gridGap: 8,
		}}
		{...props}
	/>
);
