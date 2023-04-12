import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import { Selector, Option } from '@westpac/selector';
import wbc from '@westpac/wbc';

// Component specific tests
describe('Selector component', () => {
	const SimpleSelector = () => (
		<GEL brand={wbc}>
			<Selector type="radio" name="example-default">
				<Option value="1">Here is a label</Option>
				<Option value="2">Here is a label</Option>
				<Option value="3">Here is a label</Option>
			</Selector>
		</GEL>
	);

	test('It should render Simple Selector', () => {
		const { container } = render(<SimpleSelector />);
		expect(container).toBeInTheDocument();
	});
});
