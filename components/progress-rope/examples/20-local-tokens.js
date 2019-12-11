/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Grid, Cell } from '@westpac/grid';
import { Button } from '@westpac/button';
import { ProgressRope, Group, Item } from '@westpac/progress-rope';
import { useProgress, Link } from './_utils';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	const [state, dispatch] = useProgress();

	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/progress-rope'] = {
		ropeCSS: {
			border: '1px solid black',
		},
		ropeGroupCSS: {
			backgroundColor: 'lavender',
		},
		ropeGroupLabelCSS: {
			color: 'palevioletred',
		},
		ropeItemCSS: {
			textDecoration: 'underline',
		},
	};

	const handleClick = index => e => {
		e.preventDefault();
		dispatch({ type: 'goto', index });
	};

	return (
		<GEL brand={overridesWithTokens}>
			<Intopia ignore />
			<Grid>
				<Cell width={4}>
					<ProgressRope current={state.index}>
						<Group text={'Group 1'}>
							<Item onClick={handleClick(0)}>Step 0</Item>
							<Item onClick={handleClick(1)}>Step 1</Item>
						</Group>
						<Group text={'Group 2'}>
							<Item onClick={handleClick(2)}>Step 2</Item>
							<Item onClick={handleClick(3)}>Step 3</Item>
						</Group>
						<Group text={'Group 3'}>
							<Item onClick={handleClick(4)}>Step 4</Item>
							<Item onClick={handleClick(5)}>Step 5</Item>
							<Item onClick={handleClick(6)}>Step 6</Item>
						</Group>
						<Item review onClick={handleClick(5)}>
							Review and Submit
						</Item>
					</ProgressRope>
				</Cell>
				<Cell top={2} width={4}>
					<h3>Helper Controls</h3>
					<h4>Current: {state.index}</h4>
					<Button onClick={() => dispatch({ type: 'prev' })}>prev</Button>{' '}
					<Button onClick={() => dispatch({ type: 'next' })}>next</Button>
				</Cell>
			</Grid>
		</GEL>
	);
}

export default Example;
