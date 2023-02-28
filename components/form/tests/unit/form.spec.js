import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import {
	Form,
	ChitChat,
	ErrorMessage,
	Fieldset,
	FormGroup,
	Hint,
	InputCluster,
	Item,
	FormLabel,
	FormSection,
} from '@westpac/form';
import { TextInput } from '@westpac/text-input';
import wbc from '@westpac/wbc';

// Component specific tests
describe('Form component', () => {
	const SimpleForm = () => (
		<GEL brand={wbc}>
			<Form>
				<FormSection>
					<ChitChat>
						Hello, I’m the friendly conversational text component. I live at the top of the form pod
						if required.
					</ChitChat>
				</FormSection>

				<FormSection>
					<FormGroup>
						<FormLabel htmlFor="example-default-1">This is a label</FormLabel>
						<Hint>This is a hint</Hint>
						<ErrorMessage message="This is an error message" />
						<TextInput name="example-default-1" />
					</FormGroup>

					<FormGroup>
						<FormLabel htmlFor="example-default-2">This is a label</FormLabel>
						<Hint>This is a hint</Hint>
						<ErrorMessage message="This is an error message" />
						<TextInput name="example-default-2" />
					</FormGroup>
				</FormSection>

				<FormSection>
					<FormGroup>
						<FormLabel htmlFor="example-default-3">This is a label</FormLabel>
						<Hint>This is a hint</Hint>
						<ErrorMessage message="This is an error message" />
						<TextInput name="example-default-3" />
					</FormGroup>

					<FormGroup>
						<Fieldset legend="This is a legend">
							<Hint>This is a hint</Hint>
							<ErrorMessage
								message={['This is an error message', 'This is another error message']}
							/>
							<InputCluster>
								<Item>
									<TextInput name="example-default-4-line1" />
								</Item>
								<Item>
									<TextInput name="example-default-4-line2" />
								</Item>
							</InputCluster>
						</Fieldset>
					</FormGroup>
				</FormSection>
			</Form>
		</GEL>
	);

	test('It should render Form', () => {
		render(<SimpleForm />);
	});
});
