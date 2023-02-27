import { GEL, jsx } from '@westpac/core';
import { Grid, Cell } from '@westpac/grid';
import { Button } from '@westpac/button';
import { ProgressRope, Step } from '@westpac/progress-rope';
import { useProgress, Wrapper } from './_utils';

function Example({ brand }) {
	const [state, dispatch] = useProgress();
	const [state2, dispatch2] = useProgress(2);

	const handleClick = (index) => (e) => {
		e.preventDefault();
		dispatch({ type: 'goto', index });
	};

	const handleClick2 = (index) => (e) => {
		e.preventDefault();
		dispatch2({ type: 'goto', index });
	};

	return (
		<GEL brand={brand}>
			<Grid>
				<Cell width={6}>
					<h2>Composition</h2>
					<Wrapper>
						<ProgressRope current={state.index}>
							<Step onClick={handleClick(0)}>Step 1</Step>
							<Step onClick={handleClick(1)}>Step 2</Step>
							<Step onClick={handleClick(2)}>Step 3</Step>
							<Step onClick={handleClick(3)}>Step 4</Step>
							<Step onClick={handleClick(4)}>Step 5</Step>
							<Step end onClick={handleClick(5)}>
								Review and Submit
							</Step>
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
					<h2>Data Driven</h2>
					<Wrapper>
						<ProgressRope
							current={state2.index}
							data={[
								{ text: 'Step 1', onClick: handleClick2(0) },
								{ text: 'Step 2', onClick: handleClick2(1) },
								{ text: 'Step 3', onClick: handleClick2(2) },
								{ text: 'Step 4', onClick: handleClick2(3) },
								{ text: 'Step 5', onClick: handleClick2(5) },
								{ type: 'end', text: 'Review and Submit', onClick: handleClick2(5) },
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
		</GEL>
	);
}

export default Example;
