import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import { Switch } from '@westpac/switch';
import wbc from '@westpac/wbc';

// Component specific tests
describe('Switch component', () => {
	const SimpleSwitch = () => (
		<GEL brand={wbc}>
			<Switch name="example-default" label="eStatements" />
		</GEL>
	);

	test('It should render Switch', () => {
		render(<SimpleSwitch />);
	});
});
