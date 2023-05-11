import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import { ProgressRope, Step } from '@westpac/progress-rope';
import wbc from '@westpac/wbc';

import { overridesTest } from '../../../../helpers/tests/overrides-test';
import { nestingTest } from '../../../../helpers/tests/nesting-test';
import { ProgressRopeProps } from '../../src/ProgressRope';

const SimpleProgressRope = (props: ProgressRopeProps) => (
	<ProgressRope {...props}>
		<Step onClick={() => {}}>Step 1</Step>
		<Step onClick={() => {}}>Step 2</Step>
		<Step onClick={() => {}}>Step 3</Step>
		<Step onClick={() => {}}>Step 4</Step>
		<Step end onClick={() => {}}>
			Last Step
		</Step>
	</ProgressRope>
);

overridesTest({
	name: 'progress-rope',
	// TODO: 'Group' and 'GroupList' have been removed from the overrides test due to the limitation
	// TODO: global helper function, overrides-test needs to be updated to avoid having nested <li> tag issue
	overrides: ['ProgressRope', 'List', 'Step', 'StepButton'],
	Component: (props: ProgressRopeProps) => <SimpleProgressRope {...props} />,
});

nestingTest({
	name: 'progress-rope',
	Component: (props: ProgressRopeProps) => <SimpleProgressRope {...props} />,
});

describe('ProgressRope component', () => {
	const WBCProgressRope = (props: ProgressRopeProps) => (
		<GEL brand={wbc}>
			<ProgressRope {...props} />
		</GEL>
	);

	it('renders correctly', () => {
		const defaultProps: ProgressRopeProps = {
			assistiveText: 'Test Assistive Text',
			current: 2,
			headingsTag: 'h3',
			instanceId: 'test-instance',
			data: [
				{
					type: 'group',
					text: 'Group 1',
					onClick: jest.fn(),
					steps: [
						{ text: 'Step 1', onClick: jest.fn() },
						{ text: 'Step 2', onClick: jest.fn() },
					],
				},
				{ text: 'Step 3', onClick: jest.fn() },
			],
		};

		const { getByText, getByLabelText } = render(<WBCProgressRope {...defaultProps} />);

		expect(getByLabelText(/test assistive text/i)).toBeInTheDocument();
		expect(getByText(/group 1/i)).toBeInTheDocument();
		expect(getByText(/step 1/i)).toBeInTheDocument();
		expect(getByText(/step 2/i)).toBeInTheDocument();
		expect(getByText(/step 3/i)).toBeInTheDocument();
	});
});
