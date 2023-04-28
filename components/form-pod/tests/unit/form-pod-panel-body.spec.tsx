import { render, screen } from '@testing-library/react';
import { GEL } from '@westpac/core';
import wbc from '@westpac/wbc';
import { PanelBody } from '@westpac/form-pod';

import { overridesTest } from '../../../../helpers/tests/overrides-test';
import { nestingTest } from '../../../../helpers/tests/nesting-test';

overridesTest({
	name: 'form-pod',
	overrides: ['Body'],
	Component: (props: any) => <PanelBody {...props} />,
});

nestingTest({
	name: 'form-pod',
	Component: (props: any) => <PanelBody {...props} />,
});

const SimpleFormPodPanelBody = (props: any) => (
	<GEL brand={wbc}>
		<PanelBody {...props} />
	</GEL>
);

describe('FormPodPanelBody component', () => {
	it('renders children', () => {
		render(<SimpleFormPodPanelBody>Test Children</SimpleFormPodPanelBody>);

		const panelBodyElement = screen.getByText(/test children/i);
		expect(panelBodyElement).toBeInTheDocument();
	});

	it('renders with overrides', () => {
		const overrides = {
			Body: {
				component: 'div',
				styles: () => ({
					color: 'red',
				}),
			},
		};

		render(
			<SimpleFormPodPanelBody data-testid="form-pod-panel-body" overrides={overrides}>
				Test Children
			</SimpleFormPodPanelBody>
		);

		expect(screen.getByTestId('form-pod-panel-body')).toHaveStyle('color: red');
	});
});
