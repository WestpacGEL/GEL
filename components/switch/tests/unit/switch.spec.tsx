import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import { Switch } from '@westpac/switch';
import wbc from '@westpac/wbc';
import { overridesTest } from '../../../../helpers/tests/overrides-test';
import { nestingTest } from '../../../../helpers/tests/nesting-test';
import { SwitchProps } from '../../src/Switch';

// Component specific tests
describe('Switch component', () => {
	const SimpleSwitch = () => (
		<GEL brand={wbc}>
			<Switch name="example-default" label="eStatements" />
		</GEL>
	);

	test('It should render Switch', () => {
		const { container } = render(<SimpleSwitch />);
		expect(container).toBeInTheDocument();
	});
});
