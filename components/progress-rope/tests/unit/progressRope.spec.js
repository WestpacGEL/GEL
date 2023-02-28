import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import { ProgressRope, Step } from '@westpac/progress-rope';
import wbc from '@westpac/wbc';

// Component specific tests
describe('ProgressRope component', () => {
	const SimpleProgressRope = () => {
		const handleClick = (index) => (e) => {
			e.preventDefault();
			dispatch({ type: 'goto', index });
		};

		return (
			<GEL brand={wbc}>
				<ProgressRope current={0}>
					<Step onClick={handleClick(0)}>Step 1</Step>
					<Step onClick={handleClick(1)}>Step 2</Step>
					<Step onClick={handleClick(2)}>Step 3</Step>
					<Step onClick={handleClick(3)}>Step 4</Step>
					<Step onClick={handleClick(4)}>Step 5</Step>
					<Step end onClick={handleClick(5)}>
						Review and Submit
					</Step>
				</ProgressRope>
			</GEL>
		);
	};

	test('It should render Simple ProgressRope', () => {
		render(<SimpleProgressRope />);
	});
});
