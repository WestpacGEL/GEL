import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import { InputCluster, Item } from '@westpac/form';
import { TextInput } from '@westpac/text-input';
import wbc from '@westpac/wbc';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';
import { ErrorBoundary } from '../../../../helpers/tests/error-boundary.js';

overridesTest({
	name: 'form',
	overrides: ['InputCluster', 'InputClusterItem'],
	Component: (props) => (
		<InputCluster {...props}>
			<Item></Item>
		</InputCluster>
	),
});

nestingTest({
	name: 'form',
	Component: (props) => (
		<InputCluster>
			<Item>{props.children}</Item>
		</InputCluster>
	),
});

function SimpleItem(props) {
	return (
		<GEL brand={wbc}>
			<InputCluster>
				<Item {...props}>{props.children}</Item>
			</InputCluster>
		</GEL>
	);
}

describe('InputClusterItem component', () => {
	test('should render InputClusterItem', () => {
		const { container } = render(<SimpleItem />);
		expect(container).toBeInTheDocument();
	});

	test('should throw error if InputClusterItem is rendered without InputCluster to wrap it', () => {
		const { container } = render(
			<GEL brand={wbc}>
				<Item></Item>
			</GEL>,
			{ wrapper: ErrorBoundary }
		);
		expect(container).toHaveTextContent(
			/<InputClusterItem\/> components should be wrapped in a <InputCluster>./i
		);
		expect(() => container.render()).toThrow();
	});

	test('should render child component within InputClusterItem', () => {
		const { getByTestId } = render(
			<SimpleItem>
				<TextInput data-testid="test-input"></TextInput>
			</SimpleItem>
		);
		expect(getByTestId('test-input')).toBeInTheDocument();
	});
});
