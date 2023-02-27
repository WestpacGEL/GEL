import { GEL, jsx } from '@westpac/core';
import { Grid, Cell } from '@westpac/grid';
import { Button } from '@westpac/button';
import { ProgressRope, Group, Step } from '@westpac/progress-rope';
import { useProgress, Wrapper } from './_utils';

function Example({ brand }) {
	const [state, dispatch] = useProgress();
	const [state2, dispatch2] = useProgress();

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
			<h2>Custom AssistiveText and HeadingsTag values</h2>

			<Grid>
				<Cell width={6}>
					<Wrapper>
						<h3>Composition</h3>
						<ProgressRope current={state.index} assistiveText="Form steps" headingsTag="h2">
							<Group text={'Group 1'}>
								<Step onClick={handleClick(0)}>Step 1</Step>
								<Step onClick={handleClick(1)}>Step 2</Step>
							</Group>
							<Group text={'Group 2'}>
								<Step onClick={handleClick(2)}>Step 3</Step>
								<Step onClick={handleClick(3)}>Step 4</Step>
							</Group>
							<Group text={'Group 3'}>
								<Step onClick={handleClick(4)}>Step 5</Step>
								<Step onClick={handleClick(5)}>Step 6</Step>
								<Step onClick={handleClick(6)}>Step 7</Step>
							</Group>
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
					<Wrapper>
						<h3>Data Driven</h3>
						<ProgressRope
							current={state2.index}
							data={[
								{
									type: 'group',
									text: 'Group 1',
									steps: [
										{ text: 'Step 1', onClick: handleClick2(0) },
										{ text: 'Step 2', onClick: handleClick2(1) },
									],
								},
								{
									type: 'group',
									text: 'Group 2',
									steps: [
										{ text: 'Step 3', onClick: handleClick2(2) },
										{ text: 'Step 4', onClick: handleClick2(3) },
									],
								},
								{
									type: 'group',
									text: 'Group 3',
									steps: [
										{ text: 'Step 5', onClick: handleClick2(4) },
										{ text: 'Step 6', onClick: handleClick2(5) },
										{ text: 'Step 7', onClick: handleClick2(6) },
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
		</GEL>
	);
}

export default Example;
