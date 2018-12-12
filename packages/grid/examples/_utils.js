import styled from '@emotion/styled';

export const Box = styled.div({
	alignItems: 'center',
	backgroundColor: '#DEEBFF',
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
