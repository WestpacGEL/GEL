import { Td, Tr, Table, Tbody } from '@westpac/table';
import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';
import { TdProps } from '../../src/Td';
import wbc from '@westpac/wbc';

// Todo: fix override function for table component// overridesTest({
// 	name: 'table',
// 	overrides: ['Td'],
// 	Component: (props: TdProps) => (
// 		<Table>
// 			<Td {...props}>{props.children}</Td>
// 		</Table>
// 	),
// });
// another default test to check that the component errors when outside of GEL and renders when inside
nestingTest({
	name: 'table',
	Component: (props: TdProps) => (
		<Table>
			<Tbody>
				<Tr>
					<Td {...props} />
				</Tr>
			</Tbody>
		</Table>
	),
});

const SimpleTd = (props: TdProps) => (
	<GEL brand={wbc}>
		<Table>
			<Td data-testid="test-Td" {...props}>
				{props.children}
			</Td>
		</Table>
	</GEL>
);

describe('Td component', () => {
	test('border buttom should be 3px solid if highlighted passed in props', () => {
		const { getByTestId } = render(<SimpleTd highlighted />);
		expect(getByTestId('test-Td')).toHaveStyle('border-bottom: 3px solid #DA1710');
	});

	test('should render Td with defaul props', () => {
		const { container } = render(<SimpleTd />);
		expect(container).toBeInTheDocument();
	});

	test('should render children inside Td', () => {
		const { getByTestId } = render(
			<SimpleTd>
				<span data-testid="test-child">Test</span>
			</SimpleTd>
		);
		expect(getByTestId('test-child')).toBeInTheDocument();
	});
});
