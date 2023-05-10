import { Tbody, Tr, Td, Table } from '@westpac/table';
import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';
import { TbodyProps } from '../../src/Tbody';
import wbc from '@westpac/wbc';

// Todo: generic override function cause error for table component **fix override function for table component

// another default test to check that the component errors when outside of GEL and renders when inside
nestingTest({
	name: 'table',
	Component: (props: TbodyProps) => (
		<Table>
			<Tbody {...props} />
		</Table>
	),
});

const SimpleTbody = (props: TbodyProps) => (
	<GEL brand={wbc}>
		<Table>
			<Tbody data-testid="test-Tbody" {...props}>
				{props.children}
			</Tbody>
		</Table>
	</GEL>
);

describe('Tbody component', () => {
	test('should render Tbody with defaul props', () => {
		const { container } = render(<SimpleTbody />);
		expect(container).toBeInTheDocument();
	});

	test('should render children inside Tbody', () => {
		const { getByTestId } = render(
			<SimpleTbody>
				<Tr data-testid="test-child">Test</Tr>
			</SimpleTbody>
		);
		expect(getByTestId('test-child')).toBeInTheDocument();
	});
});
