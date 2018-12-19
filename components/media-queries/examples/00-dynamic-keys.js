import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import { BREAK_POINTS, mqAbove, mqBelow, mqBetween, mqValues } from '../src';

const BREAK_KEYS = Object.keys(BREAK_POINTS);

const Row = styled.div({
	display: 'grid',
	gridTemplateColumns: 'repeat(auto-fit, minmax(20px, 1fr))',
	gridGap: 8,
});
const Box = styled.div(({ query, size }) => {
	const breakpoint = Array.isArray(size) ? query(...size) : query(size);
	return {
		borderRadius: 2,
		color: 'rgba(0, 0, 0, 0.55)',
		fontWeight: 500,
		opacity: 0.33,
		paddingBottom: 20,
		paddingTop: 20,
		textAlign: 'center',

		[breakpoint]: {
			opacity: 1,
		},
	};
});
const Below = styled(Box)({
	backgroundColor: '#FFEBE6', // red
});
Below.defaultProps = { query: mqBelow };
const Above = styled(Box)({
	backgroundColor: '#DEEBFF', // blue
});
Above.defaultProps = { query: mqAbove };
const Between = styled(Box)({
	backgroundColor: '#EAE6FF', // purple
});
Between.defaultProps = { query: mqBetween };

export default () => {
	return (
		<div>
			<p>Available break points:</p>
			<pre>
				{Object.entries(BREAK_POINTS).map(([key, value], idx) => (
					<span key={key}>
						{idx ? ' | ' : ''}
						{key}: {value}px
					</span>
				))}
			</pre>
			<h4>Query helpers</h4>
			<p>Resize your window to see elements affected by media queries.</p>

			<p>
				<code>mqAbove()</code>
			</p>
			<Row>
				{BREAK_KEYS.map(k => (
					<Above key={k} size={k}>
						{k}
					</Above>
				))}
			</Row>

			<p>
				<code>mqBelow()</code>
			</p>
			<Row>
				{BREAK_KEYS.map(k => (
					<Below key={k} size={k}>
						{k}
					</Below>
				))}
			</Row>

			<p>
				<code>mqBetween()</code>
			</p>
			<Row>
				{BREAK_KEYS.map((current, idx) => {
					const next = BREAK_KEYS[idx + 1];
					if (!next) return null;
					const size = [current, next];

					return (
						<Between key={current} size={size}>
							{size.join('-')}
						</Between>
					);
				})}
			</Row>
		</div>
	);
};
