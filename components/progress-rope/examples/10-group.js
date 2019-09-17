import React, { useReducer } from 'react';

import { ProgressRope, ProgressRopeGroup, ProgressRopeItem } from '../src';
import { Grid, Cell } from '../../grid/src';
import { Button } from '../../button/src';

export default () => {
	const initialState = { index: 0 };

	// need to safe guard this to be > 0 && < steps.length
	const progressReducer = (state, action) => {
		switch (action.type) {
			case 'next':
				return { index: state.index + 1 };
			case 'prev':
				return { index: state.index - 1 };
			case 'goto':
				return { index: action.index };
			default:
				throw new Error();
		}
	};

	const [state, dispatch] = useReducer(progressReducer, initialState);
	const steps = ['Step 3', 'Step 4', 'Step 5'];
	return (
		<Grid>
			<Cell width={4}>
				<ProgressRope current={state.index}>
					<ProgressRopeGroup label={'Group 1'}>
						<ProgressRopeItem>
							<a href="#">Step 0 </a>
						</ProgressRopeItem>
					</ProgressRopeGroup>
					<ProgressRopeGroup label={'Group 2'}>
						<ProgressRopeItem>
							<a href="#">Step 1</a>
						</ProgressRopeItem>
						<ProgressRopeItem>
							<a href="#">Step 2</a>
						</ProgressRopeItem>
					</ProgressRopeGroup>
					<ProgressRopeGroup label={'Group 3'}>
						{steps.map((step, i) => (
							<ProgressRopeItem key={i}>
								<a href="#">{step}</a>
							</ProgressRopeItem>
						))}
					</ProgressRopeGroup>
				</ProgressRope>
			</Cell>
			<Cell width={4}>
				<Button onClick={() => dispatch({ type: 'prev' })}>prev</Button>{' '}
				<Button onClick={() => dispatch({ type: 'next' })}>next</Button>
			</Cell>
			<Cell width={4}>
				<h3>current: {state.index}</h3>
			</Cell>
		</Grid>
	);
};
