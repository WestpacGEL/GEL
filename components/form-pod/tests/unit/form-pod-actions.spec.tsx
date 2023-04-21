import { render } from '@testing-library/react';
import { GEL } from '@westpac/core';
import wbc from '@westpac/wbc';
import { Button } from '@westpac/button';
import { Actions } from '@westpac/form-pod';

import { overridesTest } from '../../../../helpers/tests/overrides-test';
import { nestingTest } from '../../../../helpers/tests/nesting-test';
import { FormPodActionsProps } from '../../src/FormPodActions';

overridesTest({
	name: 'form-pod',
	overrides: ['Actions', 'ActionsPrimary', 'ActionsSecondary'],
	Component: (props: any) => (
		<Actions
			primary={
				<>
					<Button appearance="primary" soft size="large" block={[true, false]}>
						Primary Button A
					</Button>
					<Button appearance="primary" soft size="large" block={[true, false]}>
						Primary Button B
					</Button>
				</>
			}
			secondary={
				<Button appearance="faint" soft size="large" block={[true, false]}>
					Cancel
				</Button>
			}
			{...props}
		/>
	),
});

nestingTest({
	name: 'form-pod',
	Component: (props: any) => <Actions {...props} />,
});

const SimpleFormPodActions = (props: any) => (
	<GEL brand={wbc}>
		<Actions {...props} />
	</GEL>
);

describe('FormPodActions component', () => {
	const defaultProps: FormPodActionsProps = {
		primary: <div>Primary</div>,
		secondary: <div>Secondary</div>,
		reverse: false,
	};

	it('renders with default props', () => {
		const { getByText } = render(<SimpleFormPodActions {...defaultProps} />);
		const PrimaryAction = getByText(/primary/i);
		const SecondaryAction = getByText(/secondary/i);

		expect(PrimaryAction).toBeInTheDocument();
		expect(SecondaryAction).toBeInTheDocument();

		expect(SecondaryAction.compareDocumentPosition(PrimaryAction)).toBe(
			Node.DOCUMENT_POSITION_PRECEDING
		);
	});

	it('renders with reverse layout', () => {
		const defaultPropsWithReverse = { ...defaultProps, reverse: true };
		const { getByText } = render(<SimpleFormPodActions {...defaultPropsWithReverse} />);
		const PrimaryAction = getByText(/primary/i);
		const SecondaryAction = getByText(/secondary/i);

		expect(PrimaryAction).toBeInTheDocument();
		expect(SecondaryAction).toBeInTheDocument();

		expect(SecondaryAction.compareDocumentPosition(PrimaryAction)).toBe(
			Node.DOCUMENT_POSITION_FOLLOWING
		);
	});
});
