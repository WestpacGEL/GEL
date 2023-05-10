import { Thead, Table, Tr } from '@westpac/table';
import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';
import { TheadProps } from '../../src/Thead';
import wbc from '@westpac/wbc';

// TODO: Fix overridesTest function to work with table
// There is no overridesTest function for the various table components due to how the overridesTest works,
// creating warnings relating to unexpected <div> as children/parents```

// another default test to check that the component errors when outside of GEL and renders when inside
nestingTest({
	name: 'table',
	Component: (props: TheadProps) => (
		<Table>
			<Thead {...props}>{props.children}</Thead>
		</Table>
	),
});

const SimpleThead = (props: TheadProps) => (
	<GEL brand={wbc}>
		<Table>
			<Thead data-testid="test-Thead" {...props}>
				{props.children}
			</Thead>
		</Table>
	</GEL>
);

describe('Thead component', () => {
	test('should render Thead with defaul props', () => {
		const { container } = render(<SimpleThead />);
		expect(container).toBeInTheDocument();
	});

	test('should render children inside Thead', () => {
		const { getByTestId } = render(
			<SimpleThead>
				<Tr data-testid="test-child"></Tr>
			</SimpleThead>
		);
		expect(getByTestId('test-child')).toBeInTheDocument();
	});
});
