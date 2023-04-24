import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import { Container } from '@westpac/grid';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';
import wbc from '@westpac/wbc';

overridesTest({
	name: 'grid',
	overrides: ['Container'],
	Component: (props: any) => (
		<Container fixed={false} {...props}>
			{props.children}
		</Container>
	),
});

nestingTest({
	name: 'grid',
	Component: (props: any) => (
		<Container fixed={false} {...props}>
			{props.children}
		</Container>
	),
});

const SimpleContainer = (props: any) => (
	<GEL brand={wbc}>
		<Container data-testid="test-container" {...props}>
			{props.children}
		</Container>
	</GEL>
);

describe('Container component', () => {
	test('should render Container with default props', () => {
		const { container } = render(<SimpleContainer />);
		expect(container).toBeInTheDocument();
	});

	test('should render children inside Container', () => {
		const { getByTestId } = render(
			<SimpleContainer>
				<div data-testid="test-child">test</div>
			</SimpleContainer>
		);
		expect(getByTestId('test-child')).toBeInTheDocument();
	});

	test('should return correct maxWidth if fixed', () => {
		const { getByTestId } = render(<SimpleContainer fixed></SimpleContainer>);
		expect(getByTestId('test-container')).not.toHaveStyle('max-width: 1320px'); //checking to see that fixed=false maxWidth doesnt get returned
	});
});
