import React from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';

import { Content, Example, Page, createRange, stripIndent } from '../../../examples';
import { Cell, Grid } from '../src';

const PropTable = ({ component }) => (
	<table css={{}}>
		<thead>
			<tr>
				<th>Property</th>
				<th>Type</th>
				<th>Required</th>
				<th>Default</th>
				<th>Description</th>
			</tr>
		</thead>
		<tbody>
			{Object.entries(component.propTypes).map(([key, val]) => (
				<tr key={key}>
					<td>
						<code>{key}</code>
					</td>
					<td>type</td>
					<td>required</td>
					<td>{component.defaultProps[key] || '--'}</td>
					<td>description</td>
				</tr>
			))}
		</tbody>
	</table>
);

const Box = styled.div({
	alignItems: 'center',
	backgroundColor: '#DEEBFF',
	borderRadius: 2,
	display: 'flex',
	height: '100%',
	justifyContent: 'center',
	minHeight: 44,
});

const rows = counts =>
	counts.map(number =>
		createRange(number).map(i => (
			<Cell width={12 / number} key={`${number}_${i}`}>
				<Box>
					{i + 1}/{number}
				</Box>
			</Cell>
		))
	);

const TraditionalGrid = () => {
	const codeSnippet = stripIndent`
		<Grid>
			<Cell width={1}>1/12</Cell>
			<Cell width={1}>2/12</Cell>
			...
			<Cell width={2}>1/6</Cell>
			<Cell width={2}>2/6</Cell>
			...
		</Grid>
	`;

	return (
		<Example title="Traditional Grid" snippet={codeSnippet}>
			<Content>
				<p>Typical bootstrap style grid, handy for all sorts of things.</p>
			</Content>
			<Grid>{rows([12, 6, 4, 2, 1])}</Grid>
		</Example>
	);
};

const PositioningAndOffsets = () => {
	const codeSnippet = stripIndent`
		<Grid columns={3}>
			<Cell>Top Left</Cell>
			<Cell left={3}>Top Right</Cell>
			<Cell left={2} top={2}>Middle</Cell>
			<Cell top={3}>Bottom Left</Cell>
			<Cell top={3} left={3}>Bottom Right</Cell>
		</Grid>
	`;

	return (
		<Example title="Positioning & Offsets" snippet={codeSnippet}>
			<Content>
				<p>
					You can use the <code>left</code> and <code>top</code> props to set the grid-column-start
					and grid-row-start CSS properties, respectively. This allows you to offset content or have
					finer grain control over the position of cells.
				</p>
				<p>Keep in mind that the top-left coordinate is (1, 1), not (0, 0).</p>
			</Content>

			<Grid columns={3}>
				<Cell>
					<Box>Top Left</Box>
				</Cell>
				<Cell left={3}>
					<Box>Top Right</Box>
				</Cell>
				<Cell left={2} top={2}>
					<Box>Middle</Box>
				</Cell>
				<Cell top={3}>
					<Box>Bottom Left</Box>
				</Cell>
				<Cell top={3} left={3}>
					<Box>Bottom Right</Box>
				</Cell>
			</Grid>
		</Example>
	);
};

ReactDOM.render(
	<Page title="Grid">
		<TraditionalGrid />
		<PositioningAndOffsets />
		<PropTable component={Grid} />
	</Page>,

	document.getElementById('root')
);
