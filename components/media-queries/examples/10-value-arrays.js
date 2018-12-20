import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import { mqValues } from '../src';

const COLORS = [
	'#DE350B', // red
	'#FF991F', // yellow
	'#00875A', // green
	'#00A3BF', // teal
	'#0052CC', // blue
	'#5243AA', // purple
];

const Row = styled.div({
	display: 'grid',
	gridTemplateColumns: 'repeat(auto-fit, minmax(20px, 1fr))',
	gridGap: 8,
});
const Box = styled.div(
	mqValues({
		backgroundColor: COLORS,
		borderRadius: 2,
		color: 'white',
		fontWeight: 500,
		paddingBottom: 20,
		paddingTop: 20,
		textAlign: 'center',
		transition: 'background-color 333ms linear',
	})
);

export default () => {
	return (
		<div>
			<h4>Query values</h4>
			<p>Resize your window to see values affected by media queries.</p>

			<p>
				<code>mqValues()</code>
			</p>
			<Box>They see me rainbow, they hatin'...</Box>
		</div>
	);
};
