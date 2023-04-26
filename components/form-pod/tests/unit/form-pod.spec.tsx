import { render, screen } from '@testing-library/react';
import { GEL } from '@westpac/core';
import wbc from '@westpac/wbc';
import { FormPod, Panel, PanelBody } from '@westpac/form-pod';

import { overridesTest } from '../../../../helpers/tests/overrides-test';
import { nestingTest } from '../../../../helpers/tests/nesting-test';
import { FormPodProps } from '../../src/FormPod';

overridesTest({
	name: 'form-pod',
	overrides: ['FormPod', 'Header', 'HeaderIcon', 'Preheading', 'Heading'],
	Component: (props: any) => {
		const TestIcon = () => <span data-testid="test-icon">Test Icon</span>;

		return (
			<FormPod preheading="Preheading" heading="Heading" icon={TestIcon} {...props}>
				<Panel>
					<PanelBody>[PANEL CONTENT]</PanelBody>
				</Panel>
			</FormPod>
		);
	},
});

nestingTest({
	name: 'form-pod',
	Component: (props: any) => <FormPod {...props} />,
});

const SimpleFormPod = (props: any) => (
	<GEL brand={wbc}>
		<FormPod {...props} />
	</GEL>
);

describe('FormPod component', () => {
	const defaultProps: FormPodProps = {
		children: 'FormPod Content',
		preheading: 'FormPod Preheading',
		heading: 'FormPod Heading',
		icon: jest.fn(),
	};

	it('renders children, preheading text and heading text', () => {
		render(<SimpleFormPod {...defaultProps} />);
		expect(screen.getByText('FormPod Content')).toBeInTheDocument();
		expect(screen.getByText('FormPod Preheading')).toBeInTheDocument();
		expect(screen.getByText('FormPod Heading')).toBeInTheDocument();
	});

	it('renders header icon when passed', () => {
		render(<SimpleFormPod {...defaultProps} />);
		expect(defaultProps.icon).toHaveBeenCalled();
	});
});
