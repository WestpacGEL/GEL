import { jsx } from '@westpac/core';
import { ProgressRope, Group, Step } from '@westpac/progress-rope';
import { Button } from '@westpac/button';

import { Playground } from '../../../../website/src/components/playground/macro';
import { useProgress } from '../../examples/_utils';

const Wrapper = (props) => <div css={{ display: 'flex' }} {...props} />;

const Demo = ({ context, showCode, showDemo }) => {
	const [state, dispatch] = useProgress();

	const handleClick = (index) => (e) => {
		e.preventDefault();
		dispatch({ type: 'goto', index });
	};

	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<ProgressRope current={state.index}>
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
			{/* <p>Use the Next/Previous buttons below to demonstrate how the progress rope moves.</p>
			<Wrapper>
				<Button
					soft
					onClick={() => dispatch({ type: 'prev' })}
					overrides={{
						Button: { styles: (styles) => ({ ...styles, width: '8rem', marginRight: '2rem' }) },
					}}
				>
					Previous
				</Button>
				<Button
					soft
					onClick={() => dispatch({ type: 'next' })}
					overrides={{ Button: { styles: (styles) => ({ ...styles, width: '8rem' }) } }}
				>
					Next
				</Button>
			</Wrapper> */}
		</Playground>
	);
};

export default Demo;
