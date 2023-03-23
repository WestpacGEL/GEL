import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import { TextInput } from '@westpac/text-input';
import wbc from '@westpac/wbc';

// Component specific tests
describe('TextInput component', () => {
	const SimpleTextInput = () => (
		<GEL brand={wbc}>
			<TextInput defaultValue="sample" onChange={() => {}} />
		</GEL>
	);

	test('It should render TextInput', () => {
		const { container } = render(<SimpleTextInput />);
		expect(container).toBeInTheDocument();
	});
});
