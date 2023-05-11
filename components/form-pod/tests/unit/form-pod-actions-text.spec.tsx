import { render } from '@testing-library/react';
import { GEL } from '@westpac/core';
import wbc from '@westpac/wbc';
import { ActionsText } from '@westpac/form-pod';

import { overridesTest } from '../../../../helpers/tests/overrides-test';
import { nestingTest } from '../../../../helpers/tests/nesting-test';
import { FormPodActionsTextProps } from '../../src/FormPodActionsText';

overridesTest({
	name: 'form-pod',
	overrides: ['ActionsText'],
	Component: (props: any) => <ActionsText {...props} />,
});

nestingTest({
	name: 'form-pod',
	Component: (props: any) => <ActionsText {...props} />,
});

const SimpleFormPodActionsText = (props: any) => (
	<GEL brand={wbc}>
		<ActionsText {...props} />
	</GEL>
);

describe('FormPodActionsText component', () => {
	const defaultProps: FormPodActionsTextProps = {
		children: 'Actions Text',
	};

	it('renders children', () => {
		const { getByText } = render(<SimpleFormPodActionsText {...defaultProps} />);
		expect(getByText(/actions text/i)).toBeInTheDocument();
	});
});
