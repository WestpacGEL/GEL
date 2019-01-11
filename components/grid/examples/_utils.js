import { styled } from '@westpac/core';

export const Box = styled.div({
	alignItems: 'center',
	backgroundColor: '#F4F5F7',
	borderRadius: 2,
	display: 'flex',
	height: '100%',
	justifyContent: 'center',
	minHeight: 44,
});

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
