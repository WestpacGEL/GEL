import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ProgressRope, Step } from '@westpac/progress-rope';
import wbc from '@westpac/wbc';

import { overridesTest } from '../../../../helpers/tests/overrides-test';
import { nestingTest } from '../../../../helpers/tests/nesting-test';
import { StepProps } from '../../src/Step';

const SimpleStep = ({ index, onClick, ...rest }: StepProps) => (
	<ProgressRope current={0}>
		<Step index={0} onClick={() => {}} {...rest}>
			Step 1
		</Step>
		<Step index={1} onClick={() => {}}>
			Step 2
		</Step>
		<Step end index={2} onClick={() => {}}>
			Last Step
		</Step>
	</ProgressRope>
);

overridesTest({
	name: 'progress-rope',
	overrides: ['Step', 'StepButton'],
	Component: (props: StepProps) => <SimpleStep {...props} />,
});

nestingTest({
	name: 'progress-rope',
	Component: (props: StepProps) => <SimpleStep {...props} />,
});

describe('Step component', () => {
	const WBCStep = (props: StepProps) => (
		<GEL brand={wbc}>
			<ProgressRope current={0}>
				<Step {...props} />
				<Step end index={2} onClick={() => {}}>
					Last Step
				</Step>
			</ProgressRope>
		</GEL>
	);

	const defaultProps: StepProps = {
		index: 0,
		groupIndex: 0,
		end: false,
		onClick: jest.fn(),
		children: 'Test Step',
	};

	it('renders correctly', () => {
		const { container, getByText } = render(<WBCStep {...defaultProps} />);

		expect(container).toBeInTheDocument();
		expect(getByText(/test step/i)).toBeInTheDocument();
	});

	it('calls onClick handler when clicked', async () => {
		const { getByText } = render(<WBCStep {...defaultProps} />);
		await userEvent.click(getByText(/test step/i));
		expect(defaultProps.onClick).toHaveBeenCalled();
	});
});
