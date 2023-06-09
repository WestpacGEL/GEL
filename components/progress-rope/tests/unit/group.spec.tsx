import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import { Group, ProgressRope, Step } from '@westpac/progress-rope';
import wbc from '@westpac/wbc';

import { overridesTest } from '../../../../helpers/tests/overrides-test';
import { nestingTest } from '../../../../helpers/tests/nesting-test';
import { GroupProps } from '../../src/Group';

const SimpleGroup = ({ index, text, ...rest }: GroupProps) => (
	<ProgressRope current={0}>
		<Group index={0} text="Test Group" {...rest}>
			<Step index={0} onClick={() => {}}>
				Step 1
			</Step>
			<Step index={1} onClick={() => {}}>
				Step 2
			</Step>
		</Group>
		<Step end index={2} onClick={() => {}}>
			Last Step
		</Step>
	</ProgressRope>
);

overridesTest({
	name: 'progress-rope',
	// TODO: 'GroupList' have been removed from the overrides test due to the limitation
	// TODO: global helper function, overrides-test needs to be updated to avoid having nested <li> tag issue
	overrides: ['Group', 'GroupBtn'],
	Component: (props: GroupProps) => <SimpleGroup {...props} />,
});

nestingTest({
	name: 'progress-rope',
	Component: (props: GroupProps) => <SimpleGroup {...props} />,
});

describe('Group component', () => {
	const WBCGroup = (props: GroupProps) => (
		<GEL brand={wbc}>
			<ProgressRope current={0}>
				<Group {...props}>
					<Step index={0} onClick={() => {}}>
						Step 1
					</Step>
					<Step index={1} onClick={() => {}}>
						Step 2
					</Step>
				</Group>
				<Step end index={2} onClick={() => {}}>
					Last Step
				</Step>
			</ProgressRope>
		</GEL>
	);

	const defaultProps: GroupProps = {
		index: 0,
		text: 'Group 1',
	};

	it('renders correctly', () => {
		const { getByText } = render(<WBCGroup {...defaultProps} />);

		expect(getByText(/group 1/i)).toBeInTheDocument();
		expect(getByText(/step 1/i)).toBeInTheDocument();
		expect(getByText(/step 2/i)).toBeInTheDocument();
		expect(getByText(/last step/i)).toBeInTheDocument();
	});
});
