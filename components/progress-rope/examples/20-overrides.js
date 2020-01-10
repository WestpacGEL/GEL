/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Grid, Cell } from '@westpac/grid';
import { Button } from '@westpac/button';
import { ProgressRope, Item } from '@westpac/progress-rope';
import { useProgress, Wrapper } from './_utils';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	const [state, dispatch] = useProgress();
	const [state2, dispatch2] = useProgress();

	const handleClick = index => e => {
		e.preventDefault();
		dispatch({ type: 'goto', index });
	};

	const handleClick2 = index => e => {
		e.preventDefault();
		dispatch2({ type: 'goto', index });
	};

	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/progress-rope'] = {
		subComponent: {
			Item: {
				styles: (styles, { grouped, review, visited, furthest }) => ({
					...styles,

					'::before': {
						...styles['::before'],
						borderLeft: `2px solid ${visited && !furthest ? 'navy' : 'cornflowerblue'}`,
					},

					'::after': {
						...styles['::after'],
						border: `2px solid ${visited ? 'navy' : 'cornflowerblue'}`,
						backgroundColor: grouped || review ? (visited ? 'navy' : 'cornflowerblue') : '#fff',
					},
				}),
			},
			ItemText: {
				styles: (styles, { active, visited }) => ({
					...styles,
					color: active ? 'navy' : visited ? 'black' : 'cornflowerblue',
				}),
			},
		},
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

	return (
		<GEL brand={overridesWithTokens}>
			<Intopia ignore />
			<Grid>
				<Cell width={6}>
					<Wrapper>
						<h2>With overrides applied</h2>
						<ProgressRope current={state.index}>
							<Item onClick={handleClick(0)}>Step 1</Item>
							<Item onClick={handleClick(1)}>Step 2</Item>
							<Item onClick={handleClick(2)}>Step 3</Item>
							<Item onClick={handleClick(3)}>Step 4</Item>
							<Item onClick={handleClick(4)}>Step 5</Item>
							<Item review onClick={handleClick(5)}>
								Review and Submit
							</Item>
						</ProgressRope>
					</Wrapper>
				</Cell>
				<Cell top={2} width={6}>
					<h3>Helper Controls</h3>
					<h4>Current: {state.index}</h4>
					<Button onClick={() => dispatch({ type: 'prev' })}>prev</Button>{' '}
					<Button onClick={() => dispatch({ type: 'next' })}>next</Button>
				</Cell>
				<Cell width={6}>
					<Wrapper>
						<h2>Data driven with overrides and component overrides</h2>
						<ProgressRope
							current={state2.index}
							data={[
								{
									type: 'group',
									text: 'Group 1',
									items: [
										{ text: 'Step 0', onClick: handleClick2(0) },
										{ text: 'Step 1', onClick: handleClick2(1) },
									],
								},
								{
									type: 'group',
									text: 'Group 2',
									items: [
										{ text: 'Step 2', onClick: handleClick2(2) },
										{ text: 'Step 3', onClick: handleClick2(3) },
									],
								},
								{
									type: 'group',
									text: 'Group 3',
									items: [
										{ text: 'Step 4', onClick: handleClick2(4) },
										{ text: 'Step 5', onClick: handleClick2(5) },
										{ text: 'Step 6', onClick: handleClick2(6) },
									],
								},
								{ type: 'review', text: 'Review and Submit', onClick: handleClick2(7) },
							]}
							overrides={{
								subComponent: {
									GroupText: {
										styles: (styles, { active }) => ({
											...styles,

											'::before': {
												...styles['::before'],
												borderLeft: `2px solid ${active ? 'darkmagenta' : 'plum'}`,
											},

											'::after': {
												...styles['::after'],
												border: `2px solid ${active ? 'darkmagenta' : 'plum'}`,
											},
										}),
									},
									Item: {
										styles: (styles, { grouped, review, visited, furthest }) => ({
											...styles,

											'::before': {
												...styles['::before'],
												borderLeft: `2px solid ${visited && !furthest ? 'darkmagenta' : 'plum'}`,
											},

											'::after': {
												...styles['::after'],
												border: `2px solid ${visited ? 'darkmagenta' : 'plum'}`,
												backgroundColor:
													grouped || review ? (visited ? 'darkmagenta' : 'plum') : '#fff',
											},
										}),
									},
									ItemText: {
										styles: (styles, { active, visited }) => ({
											...styles,
											color: active ? 'darkmagenta' : visited ? 'black' : 'plum',
										}),
									},
								},
							}}
						/>
					</Wrapper>
				</Cell>
				<Cell top={2} width={6}>
					<h3>Helper Controls</h3>
					<h4>Current: {state2.index}</h4>
					<Button onClick={() => dispatch2({ type: 'prev' })}>prev</Button>{' '}
					<Button onClick={() => dispatch2({ type: 'next' })}>next</Button>
				</Cell>
				{/* <Cell width={6}>
					<h2>With overrides and component overrides + data driven</h2>
					<Wrapper>
						<ProgressRope
							current={state.index}
							data={[
								{ text: 'Step 1', onClick: handleClick(0) },
								{ text: 'Step 2', onClick: handleClick(1) },
								{ text: 'Step 3', onClick: handleClick(2) },
								{ text: 'Step 4', onClick: handleClick(3) },
								{ text: 'Step 5', onClick: handleClick(5) },
								{ type: 'review', text: 'Review and Submit', onClick: handleClick(5) },
							]}
							overrides={{
								subComponent: {
									Item: {
										styles: (styles, { grouped, review, visited, furthest }) => ({
											...styles,

											'::before': {
												...styles['::before'],
												borderLeft: `2px solid ${visited && !furthest ? 'darkmagenta' : 'plum'}`,
											},

											'::after': {
												...styles['::after'],
												border: `2px solid ${visited ? 'darkmagenta' : 'plum'}`,
												backgroundColor:
													grouped || review ? (visited ? 'darkmagenta' : 'plum') : '#fff',
											},
										}),
									},
									ItemText: {
										styles: (styles, { active, visited }) => ({
											...styles,
											color: active ? 'darkmagenta' : visited ? 'black' : 'plum',
										}),
									},
								},
							}}
						/>
					</Wrapper>
				</Cell> */}
			</Grid>
		</GEL>
	);
}

export default Example;
