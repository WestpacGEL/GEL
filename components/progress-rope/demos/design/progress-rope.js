/** @jsx jsx */

import { jsx } from '@westpac/core';
import { ProgressRope, Step } from '@westpac/progress-rope';
import { Playground } from '../../../../website/src/components/playground/macro';
import { useProgress } from '../../examples/_utils';

export default ({ context, showCode, showDemo }) => {
	const [state, dispatch] = useProgress();
	const handleClick = (index) => (e) => {
		e.preventDefault();
		dispatch({ type: 'goto', index });
	};

	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
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
		</Playground>
	);
};
