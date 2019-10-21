import React, { useReducer } from 'react';

import { ProgressRope, Item } from '../src';
import { Grid, Cell } from '../../grid/src';
// import { Button } from '../../button/src';

/* 
- Use reducer
	- input form with go to step number
	case: GOTO: action
	dispatch({type: "GOTO", index})
- examples
	- do one using a tags
	- another one using buttons?
	- one using react router Link
*/
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
					<Item>
						<a href="#">Step 0 </a>
					</Item>
					<Item>
						<a href="#">Step 1</a>
					</Item>
					<Item>
						<a href="#">Step 2</a>
					</Item>
					{steps.map((step, i) => (
						<Item key={i}>
							<a href="#">{step}</a>
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
