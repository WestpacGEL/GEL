import React, { useReducer } from 'react';

import { ProgressRope, Group, Item } from '../src';
import { Grid, Cell } from '../../grid/src';
// import { Button } from '../../button/src';

// NEED TO CLEAN THIS UP
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
				return initialState;
		}
	};

	const [state, dispatch] = useReducer(progressReducer, initialState);

	const Link = ({ index, ...props }) => (
		<a
			href="#"
			onClick={e => {
				e.preventDefault();
				dispatch({ type: 'goto', index });
			}}
			{...props}
		/>
	);

	return (
		<Grid>
			<Cell width={4}>
				<ProgressRope current={state.index}>
					<Group label={'Group 1'}>
						<Item>
							<Link index={0}>Step 0</Link>
						</Item>
						<Item>
							<Link index={1}>Step 1</Link>
						</Item>
					</Group>
					<Group label={'Group 2'}>
						<Item>
							<Link index={2}>Step 2</Link>
						</Item>
						<Item>
							<Link index={3}>Step 3</Link>
						</Item>
					</Group>
					<Group label={'Group 3'}>
						<Item>
							<Link index={4}>Step 4</Link>
						</Item>
						<Item>
							<Link index={5}>Step 5</Link>
						</Item>
						<Item>
							<Link index={6}>Step 6</Link>
						</Item>
					</Group>
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
