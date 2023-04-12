import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import { InputCluster, Form } from '@westpac/form';
import { TextInput } from '@westpac/text-input';
import wbc from '@westpac/wbc';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';

overridesTest({
	name: 'form',
	overrides: ['InputCluster'],
	Component: (props) => <InputCluster {...props} />,
});

nestingTest({
	name: 'form',
	Component: (props) => <InputCluster>{props.children}</InputCluster>,
});

function SimpleInputCluster(props) {
	return (
		<GEL brand={wbc}>
			<InputCluster {...props}>{props.children}</InputCluster>
		</GEL>
	);
}

describe('InputCluster component', () => {
	test('should render Form', () => {
		const { container } = render(<SimpleInputCluster />);
		expect(container).toBeInTheDocument();
	});

	test('should render child within InputCluster', () => {
		const { getByTestId } = render(
			<SimpleInputCluster>
				<TextInput data-testid="test-input"></TextInput>
			</SimpleInputCluster>
		);
		expect(getByTestId('test-input')).toBeInTheDocument();
	});

	test('should change display style when horizontal prop passed', () => {
		const { getByTestId } = render(
			<>
				<SimpleInputCluster
					data-testid="test-input-cluster-horizontal"
					horizontal
				></SimpleInputCluster>
				<SimpleInputCluster data-testid="test-input-cluster"></SimpleInputCluster>
			</>
		);

		expect(getByTestId('test-input-cluster-horizontal')).toHaveStyle('display: flex');
		expect(getByTestId('test-input-cluster')).toHaveStyle('display: block');
	});
});
