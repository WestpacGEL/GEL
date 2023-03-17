import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import { InputGroup } from '@westpac/input-group';
import wbc from '@westpac/wbc';

// Component specific tests
describe('Input Group component', () => {
	const SimpleInputGroup = () => (
		<GEL brand={wbc}>
			<InputGroup name="example-text" label="Total amount" before="AUS $" />
		</GEL>
	);

	test('It should render Input Group', () => {
		const { container } = render(<SimpleInputGroup />);
		expect(container).toBeInTheDocument();
	});
});
