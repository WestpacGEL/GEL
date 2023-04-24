import { render, screen } from '@testing-library/react';
import { GEL } from '@westpac/core';
import wbc from '@westpac/wbc';
import { Panel } from '@westpac/form-pod';

import { overridesTest } from '../../../../helpers/tests/overrides-test';
import { nestingTest } from '../../../../helpers/tests/nesting-test';
import { FormPodPanelProps } from '../../src/FormPodPanel';

overridesTest({
	name: 'form-pod',
	overrides: ['Panel'],
	Component: (props: any) => <Panel {...props} />,
});

nestingTest({
	name: 'form-pod',
	Component: (props: any) => <Panel {...props} />,
});

const SimpleFormPodPanel = (props: any) => (
	<GEL brand={wbc}>
		<Panel {...props} />
	</GEL>
);

describe('FormPodPanel component', () => {
	const defaultProps: FormPodPanelProps = {
		borderTop: true,
	};

	it('renders children', () => {
		render(<SimpleFormPodPanel {...defaultProps}>Test Children</SimpleFormPodPanel>);
		expect(screen.getByText(/test children/i)).toBeInTheDocument();
	});

	it('renders with top border', () => {
		render(<SimpleFormPodPanel data-testid="form-pod-panel" {...defaultProps} />);
		expect(screen.getByTestId('form-pod-panel')).toHaveStyle(
			`border-top: 1px solid ${wbc.COLORS.hero}`
		);
	});

	it('renders without top border', () => {
		render(<SimpleFormPodPanel data-testid="form-pod-panel" borderTop={false} />);
		expect(screen.getByTestId('form-pod-panel')).not.toHaveStyle(
			`border-top: 1px solid ${wbc.COLORS.hero}`
		);
	});

	it('renders with overrides', () => {
		const overrides = {
			Panel: {
				component: 'div',
				styles: () => ({ backgroundColor: 'blue' }),
				attributes: () => ({ 'data-testid': 'custom-panel' }),
			},
		};

		render(<SimpleFormPodPanel overrides={overrides} />);

		const panelElement = screen.getByTestId('custom-panel');
		expect(panelElement).toBeInTheDocument();
		expect(panelElement).toHaveStyle('background-color: blue');
	});
});
