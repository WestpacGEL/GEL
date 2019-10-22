import React, { useReducer } from 'react';
import { Grid, Cell } from '../../grid/src';
// import { Button } from '@westpac/Button';
import { ProgressRope, Item } from '../src';
import { useProgress, Link } from './_utils';

export default () => {
	const [state, dispatch] = useProgress();

	return (
		<Grid>
			<Cell width={4}>
				<ProgressRope current={state.index}>
					{[...Array(5)].map((val, i) => (
						<Item key={i}>
							<Link index={i} dispatch={dispatch}>
								Step {i}
							</Link>
						</Item>
					))}
					<Item review>
						<a href="#">Review and Submit</a>
					</Item>
				</ProgressRope>
			</Cell>
			<Cell width={4}>
				<button onClick={() => dispatch({ type: 'prev' })}>prev</button>{' '}
				<button onClick={() => dispatch({ type: 'next' })}>next</button>
			</Cell>
			<Cell width={4}>
				<h3>current: {state.index}</h3>
			</Cell>
		</Grid>
	);
};
