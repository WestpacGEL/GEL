import React from 'react';
import { styled } from '@westpac/core';

export const Row = styled.div({
	alignItems: 'end',
	justifyContent: 'start',
	display: 'grid',
	gridAutoFlow: 'column',
	gridGap: 8,
});

export const Grid = styled.div({
	display: 'grid',
	gridAutoFlow: 'row',
	gridAutoRows: 'minmax(80px,auto)',
	gridGap: 8,
	gridTemplateColumns: 'repeat(auto-fit, minmax(128px, 1fr))',
});

export const Cell = styled.div({
	alignItems: 'center',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
});

export const Name = styled.div({
	color: '#6B778C',
	fontSize: 12,
	marginTop: 12,
});
