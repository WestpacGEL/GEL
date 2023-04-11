import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import chroma from 'chroma-js';
import { ErrorMessage } from '@westpac/form';
import wbc from '@westpac/wbc';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';

overridesTest({
	name: 'form',
	overrides: ['ErrorMessage'],
	Component: (props) => <ErrorMessage message="test" {...props} />,
});

nestingTest({
	name: 'form',
	Component: (props) => <ErrorMessage message={props.children} />,
});

function SimpleErrorMessage(props) {
	return (
		<GEL brand={wbc}>
			<ErrorMessage {...props} data-testid="error-message" />
		</GEL>
	);
}

describe('ErrorMessage component', () => {
	test('should render ErrorMessage', () => {
		const { container } = render(<SimpleErrorMessage />);
		expect(container).toBeInTheDocument();
	});

	test('should render ErrorMessage with text the same as message prop', () => {
		const { getByText } = render(<SimpleErrorMessage message="Test error message" />);
		expect(getByText(/Test error message/)).toBeInTheDocument();
	});

	test('should render multiple ErrorMessage if array is passed in message prop', () => {
		const { getByText } = render(
			<SimpleErrorMessage message={['Test message one', 'Test message two']} />
		);
		expect(getByText(/Test message one/)).toBeInTheDocument();
		expect(getByText(/Test message two/)).toBeInTheDocument();
	});

	test('should have SVG icon', () => {
		const { container } = render(<SimpleErrorMessage message="test error message" />);
		expect(container).toContainHTML('svg');
	});

	test('should replace SVG icon when prop passed', () => {
		const testIcon = () => <span data-testid="test-icon">Test Icon</span>;
		const { getByTestId } = render(<SimpleErrorMessage icon={testIcon} />);

		expect(getByTestId('test-icon')).toBeInTheDocument();
	});

	test('should use allowed danger colour for error', () => {
		const { COLORS } = wbc;

		// Allowed colours code taken from alert tests, just using danger as that is all that matters for this component.
		const allowedColors = [
			...Object.entries(COLORS).filter(([name]) => name.includes('danger')),
			...Object.entries(COLORS.tints).filter(([name]) => name.includes('danger')),
		].map(([_, color]) => chroma(color).hex().toLowerCase());

		const { getByTestId } = render(<SimpleErrorMessage message="test error message" />);
		const errorColor = window
			.getComputedStyle(getByTestId('error-message'))
			.getPropertyValue('color')
			.toLowerCase();

		expect(allowedColors.includes(chroma(errorColor).hex())).toBe(true);
	});
});
