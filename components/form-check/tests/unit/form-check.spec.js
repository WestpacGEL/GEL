import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import { FormCheck, Option } from '@westpac/form-check';
import wbc from '@westpac/wbc';

// Component specific tests
describe('FormCheck component', () => {
	const SimpleFormCheck = () => (
		<GEL brand={wbc}>
			<FormCheck type="checkbox" size="medium" inline={false} name="example-default">
				<Option value="1">Option 1</Option>
				<Option value="2">Option 2</Option>
				<Option value="3">Option 3</Option>
			</FormCheck>
		</GEL>
	);

	test('It should render FormCheck', () => {
		const { container } = render(<SimpleFormCheck />);
		expect(container).toBeInTheDocument();
	});
});
