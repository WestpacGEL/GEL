import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import { Label } from '@westpac/label';
import { blenderLabel } from '../../src/overrides/label.js';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';
import wbc from '@westpac/wbc';

overridesTest({
	name: 'label',
	overrides: ['Label'],
	Component: (props: any) => <Label look="primary" value="default" {...props}></Label>,
});

nestingTest({
	name: 'label',
	Component: (props: any) => <Label look="primary" value="default" {...props}></Label>,
});

function SimpleLabel(props: any) {
	return (
		<GEL brand={wbc}>
			<Label look={props.look} {...props} data-testid="test-label" />
		</GEL>
	);
}

describe('Label component', () => {
	test('should render Label', () => {
		const { container } = render(<SimpleLabel />);
		expect(container).toBeInTheDocument();
	});

	test('should render Label with overrides', () => {
		const overridesObj = {
			Label: {
				styles: blenderLabel.styles,
				component: blenderLabel.component,
				attributes: blenderLabel.attributes,
			},
		};
		const { container } = render(<SimpleLabel overrides={overridesObj} />);
		expect(container).toBeInTheDocument();
	});

	test('should render text inside label', () => {
		const { getByTestId } = render(<SimpleLabel look="primary" value="test text" />);
		expect(getByTestId('test-label')).toHaveTextContent('test text');
	});

	test('should render with correct styling if look is faint', () => {
		const { COLORS } = wbc;

		const { getByTestId } = render(<SimpleLabel look="faint" value="test" />);
		const labelComponent = getByTestId('test-label');

		expect(labelComponent).toHaveStyle(`color: ${COLORS.muted}`);
		expect(labelComponent).toHaveStyle('background-color: #fff');
		expect(labelComponent).toHaveStyle(`border-color: ${COLORS.border}`);
	});

	['primary', 'hero', 'neutral', 'success', 'info', 'warning', 'danger'].map((look) => {
		test(`should use correct ${look} color styling`, () => {
			const { COLORS } = wbc;
			const { getByTestId } = render(<SimpleLabel look={look} value="test" />);
			const labelComponent = getByTestId('test-label');

			expect(labelComponent).toHaveStyle('color: #fff');
			expect(labelComponent).toHaveStyle(`background-color: ${COLORS[look]}`);
			expect(labelComponent).toHaveStyle(`border-color: ${COLORS[look]}`);
		});
	});
});
