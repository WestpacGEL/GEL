/** @jsx jsx */

import { jsx, styled } from '@westpac/core';

export const tuples = [[12, 4, 2, 8], [12, 4, 8, 2], [12, 4, 2, 2]];

export const Box = styled.div({
	alignItems: 'center',
	backgroundColor: 'rgba(197,59,0,0.15)',
	// borderRadius: 2,
	color: '#c53b00',
	display: 'flex',
	height: '100%',
	justifyContent: 'center',
	minHeight: 60,
});
export const GridOverlay = ({ children, columns = 12, gap = 8 }) => (
	<div css={{ height: '100%', position: 'relative' }}>
		<div
			css={{
				bottom: '-1.5em',
				display: 'grid',
				gridAutoFlow: 'row',
				gridAutoRows: 'minmax(20px,auto)',
				gridGap: gap,
				gridTemplateColumns: `repeat(${columns},1fr)`,
				height: 'auto',
				left: 0,
				opacity: 0.1,
				pointerEvents: 'none',
				position: 'absolute',
				right: 0,
				top: '-1.5em',

				'@media (min-width: 420px)': {
					bottom: '-2em',
					top: '-2em',
				},
			}}
		>
			{new Array(columns).fill(1).map((c, i) => (
				<div key={i} css={{ backgroundColor: 'rgba(0,116,196,0.3)', gridColumnEnd: 'span 1' }} />
			))}
		</div>
		{children}
	</div>
);

export function createRange(start, end, step = 1) {
	if (end === undefined) {
		end = start;
		start = 0;
	}

	let index = -1;
	let length = Math.max(Math.ceil((end - start) / step), 0);
	let result = Array(length);

	while (length--) {
		result[++index] = start;
		start += step;
	}

	return result;
}
