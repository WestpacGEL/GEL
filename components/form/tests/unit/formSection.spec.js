import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import { FormSection } from '@westpac/form';
import { TextInput } from '@westpac/text-input';
import wbc from '@westpac/wbc';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';

overridesTest({
	name: 'form',
	overrides: ['FormSection'],
	Component: (props) => <FormSection {...props} />,
});

nestingTest({
	name: 'form',
	Component: (props) => <FormSection>{props.children}</FormSection>,
});

function SimpleFormSection(props) {
	return (
		<GEL brand={wbc}>
			<FormSection {...props}>{props.children}</FormSection>
		</GEL>
	);
}

describe('FormSection component', () => {
	test('should render Form', () => {
		const { container } = render(<SimpleFormSection />);
		expect(container).toBeInTheDocument();
	});

	test('should render child component within FormSection', () => {
		const { getByTestId } = render(
			<SimpleFormSection>
				<TextInput data-testid="test-input">Test text</TextInput>
			</SimpleFormSection>
		);
		expect(getByTestId('test-input')).toBeInTheDocument();
	});
});
