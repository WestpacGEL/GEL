import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import { Label } from '@westpac/label';
import { blenderLabel } from '../../src/overrides/label.js';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';
import wbc from '@westpac/wbc';
import { LabelProps } from '../../src/Label.js';

overridesTest({
	name: 'label',
	overrides: ['Label'],
	Component: (props: any) => <Label look="primary" value="default" {...props}></Label>,
});

nestingTest({
	name: 'label',
	Component: (props: any) => <Label look="primary" value="default" {...props}></Label>,
});

function SimpleLabel(props: LabelProps) {
	return (
		<GEL brand={wbc}>
			<Label {...props} data-testid="test-label" />
		</GEL>
	);
}

const { COLORS } = wbc;

describe('Label component', () => {
	test('should render Label', () => {
		const { container } = render(<SimpleLabel look="primary" value="test" />);
		expect(container).toBeInTheDocument();
	});

	test('should render Label with default props', () => {
		const DefaultLabel = () => Label({} as LabelProps);
		const { container } = render(
			<GEL brand={wbc}>
				<DefaultLabel />
			</GEL>
		);
		expect(container).toBeInTheDocument();
	});

	test('should render Label with overrides', () => {
		const overridesObj = {
			Label: {
				styles: () => blenderLabel.styles(null, { look: 'primary' }),
				component: blenderLabel.component,
				attributes: () => blenderLabel.attributes(null, { look: 'primary' }),
			},
		};
		const { container } = render(
			<SimpleLabel look="primary" value="test" overrides={overridesObj} />
		);
		expect(container).toBeInTheDocument();
	});

	test('should render text inside label', () => {
		const { getByTestId } = render(<SimpleLabel look="primary" value="test text" />);
		expect(getByTestId('test-label')).toHaveTextContent('test text');
	});

	test('should render with correct styling if look is faint', () => {
		const { getByTestId } = render(<SimpleLabel look="faint" value="test" />);
		const labelComponent = getByTestId('test-label');

		expect(labelComponent).toHaveStyle(`color: ${COLORS.muted}`);
		expect(labelComponent).toHaveStyle('background-color: #fff');
		expect(labelComponent).toHaveStyle(`border-color: ${COLORS.border}`);
	});

	['primary', 'hero', 'neutral', 'success', 'info', 'warning', 'danger'].map((look) => {
		test(`should use correct ${look} color styling`, () => {
			const { getByTestId } = render(
				<SimpleLabel look={look as LabelProps['look']} value="test" />
			);
			const labelComponent = getByTestId('test-label');
			expect(labelComponent).toHaveStyle('color: #fff');
			expect(labelComponent).toHaveStyle(
				`background-color: ${COLORS[look as keyof typeof COLORS]}`
			);
			expect(labelComponent).toHaveStyle(`border-color: ${COLORS[look as keyof typeof COLORS]}`);
		});
	});
});
