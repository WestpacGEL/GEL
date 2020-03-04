/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Grid, Cell } from '@westpac/grid';
import { Button } from '@westpac/button';
import { ProgressRope, Group, Item } from '@westpac/progress-rope';
import { useProgress, Wrapper } from './_utils';

import { Intopia } from '../../../helpers/example/components/Intopia.js';
import { Playground } from '../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
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

	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Intopia />

			<Grid>
				<Cell width={6}>
					<Wrapper>
						<h2>Composition</h2>
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
							<Item end onClick={handleClick(5)}>
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
						<h2>Data Driven</h2>
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
								{ type: 'end', text: 'Review and Submit', onClick: handleClick2(7) },
							]}
						/>
					</Wrapper>
				</Cell>
				<Cell top={2} width={6}>
					<h3>Helper Controls</h3>
					<h4>Current: {state2.index}</h4>
					<Button onClick={() => dispatch2({ type: 'prev' })}>prev</Button>{' '}
					<Button onClick={() => dispatch2({ type: 'next' })}>next</Button>
				</Cell>
			</Grid>
		</Playground>
	);
};
