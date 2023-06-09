import { InputField, Input, InputBefore, InputAfter } from '@westpac/input-field';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Select } from '@westpac/text-input';
import { SearchIcon } from '@westpac/icon';
import { Button } from '@westpac/button';
import { GEL } from '@westpac/core';
import wbc from '@westpac/wbc';
import { InputFieldProps } from '../../src/components/InputField';

const SimpleInputField = (props: InputFieldProps) => (
	<GEL brand={wbc}>
		<InputField {...props} />
	</GEL>
);
describe('Given the InputField is rendered', () => {
	describe('when the label prop is defined', () => {
		test('then the label text should be displayed', () => {
			render(
				<SimpleInputField label="test-label">
					<Input />
				</SimpleInputField>
			);
			expect(screen.getByText('test-label')).toBeInTheDocument();
		});
	});

	describe('when the hint prop is defined', () => {
		test('then the hint text should be displayed', () => {
			render(
				<SimpleInputField hint="test-hint">
					<Input />
				</SimpleInputField>
			);
			expect(screen.getByText('test-hint')).toBeInTheDocument();
		});
	});

	describe('when the errorMessage prop is defined', () => {
		test('then the error message should be displayed', () => {
			render(
				<SimpleInputField errorMessage="test-error-message">
					<Input />
				</SimpleInputField>
			);
			expect(screen.getByText('test-error-message')).toBeInTheDocument();
		});
	});

	describe('when the supportingText prop is defined', () => {
		test('then the supporting text should be displayed', () => {
			render(
				<SimpleInputField supportingText="test-supporting-text">
					<Input />
				</SimpleInputField>
			);
			expect(screen.getByText('test-supporting-text')).toBeInTheDocument();
		});
	});

	describe('when an InputBefore component is a used', () => {
		describe('when a text child is used', () => {
			test('then the text component should be rendered', () => {
				render(
					<SimpleInputField>
						<InputBefore>before-text</InputBefore>
						<Input />
					</SimpleInputField>
				);
				expect(screen.getByText('before-text')).toBeInTheDocument();
			});
		});

		describe('when the icon prop is defined', () => {
			test('then the icon component should be rendered', () => {
				render(
					<SimpleInputField>
						<InputBefore icon={SearchIcon} />
						<Input />
					</SimpleInputField>
				);
				expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument();
			});
		});

		describe('when a button child is used', () => {
			test('then the button should be rendered', () => {
				render(
					<SimpleInputField>
						<InputBefore>
							<Button>Button</Button>
						</InputBefore>
						<Input />
					</SimpleInputField>
				);
				expect(screen.getByRole('button')).toBeInTheDocument();
			});

			test('then the button should be clickable', async () => {
				const user = userEvent.setup();
				const handleClick = jest.fn();
				render(
					<SimpleInputField>
						<InputBefore>
							<Button onClick={handleClick}>InputButton</Button>
						</InputBefore>
						<Input />
					</SimpleInputField>
				);
				await user.click(screen.getByRole('button'));
				expect(handleClick).toHaveBeenCalledTimes(1);
			});
		});

		describe('when a select child is used', () => {
			test('then the select should be rendered', () => {
				render(
					<SimpleInputField>
						<InputBefore>
							<Select size="medium" inline={false} invalid={false}>
								<option>Select</option>
								<option>One</option>
								<option>Two</option>
								<option>Three</option>
							</Select>
						</InputBefore>
						<Input />
					</SimpleInputField>
				);
				expect(screen.getByRole('combobox')).toBeInTheDocument();
			});

			test('then the select should be interactable', async () => {
				const user = userEvent.setup();
				render(
					<SimpleInputField>
						<InputBefore>
							<Select size="medium" inline={false} invalid={false}>
								<option>Select</option>
								<option>One</option>
								<option>Two</option>
								<option>Three</option>
							</Select>
						</InputBefore>
						<Input />
					</SimpleInputField>
				);
				const select = screen.getByRole('combobox');
				await user.selectOptions(select, 'One');
				expect(select).toHaveValue('One');
			});
		});
	});

	describe('when an InputAfter component is a used', () => {
		describe('when a text child is used', () => {
			test('then the text component should be rendered', () => {
				render(
					<SimpleInputField>
						<Input />
						<InputAfter>before-text</InputAfter>
					</SimpleInputField>
				);
				expect(screen.getByText('before-text')).toBeInTheDocument();
			});
		});

		describe('when the icon prop is defined', () => {
			test('then the icon component should be rendered', () => {
				render(
					<SimpleInputField>
						<Input />
						<InputAfter icon={SearchIcon} />
					</SimpleInputField>
				);
				expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument();
			});
		});

		describe('when a button child is used', () => {
			test('then the button should be rendered', () => {
				render(
					<SimpleInputField>
						<Input />
						<InputAfter>
							<Button>Button</Button>
						</InputAfter>
					</SimpleInputField>
				);
				expect(screen.getByRole('button')).toBeInTheDocument();
			});

			test('then the button should be clickable', async () => {
				const user = userEvent.setup();
				const handleClick = jest.fn();
				render(
					<SimpleInputField>
						<Input />
						<InputAfter>
							<Button onClick={handleClick}>InputButton</Button>
						</InputAfter>
					</SimpleInputField>
				);
				await user.click(screen.getByRole('button'));
				expect(handleClick).toHaveBeenCalledTimes(1);
			});
		});

		describe('when a select child is used', () => {
			test('then the select should be rendered', () => {
				render(
					<SimpleInputField>
						<Input />
						<InputAfter>
							<Select size="medium" inline={false} invalid={false}>
								<option>Select</option>
								<option>One</option>
								<option>Two</option>
								<option>Three</option>
							</Select>
						</InputAfter>
					</SimpleInputField>
				);
				expect(screen.getByRole('combobox')).toBeInTheDocument();
			});

			test('then the select should be interactable', async () => {
				const user = userEvent.setup();
				render(
					<SimpleInputField>
						<Input />
						<InputAfter>
							<Select size="medium" inline={false} invalid={false}>
								<option>Select</option>
								<option>One</option>
								<option>Two</option>
								<option>Three</option>
							</Select>
						</InputAfter>
					</SimpleInputField>
				);
				const select = screen.getByRole('combobox');
				await user.selectOptions(select, 'One');
				expect(select).toHaveValue('One');
			});
		});
	});

	describe('when the Input component is used', () => {
		test('then an input should be rendered', () => {
			render(
				<SimpleInputField label="Mock input">
					<Input />
				</SimpleInputField>
			);

			expect(screen.getByRole('textbox', { name: 'Mock input' })).toBeInTheDocument();
		});

		describe('when a default value is defined', () => {
			test('then the value of the text input should match the value', () => {
				render(
					<SimpleInputField label="Mock input">
						<Input defaultValue="test-value" />
					</SimpleInputField>
				);
				expect(screen.getByRole('textbox', { name: 'Mock input' })).toHaveValue('test-value');
			});
		});

		describe('when the value prop is defined', () => {
			test('then the value of the text input should match the value', async () => {
				render(
					<SimpleInputField label="Mock input">
						<Input value="test-value" onChange={() => {}} />
					</SimpleInputField>
				);

				expect(screen.getByRole('textbox', { name: 'Mock input' })).toHaveValue('test-value');
			});
		});

		describe('when the onChange prop is defined', () => {
			test('then the callback should be fired as the user types', async () => {
				const user = userEvent.setup();
				const handleChange = jest.fn();
				render(
					<SimpleInputField label="Mock input">
						<Input value="test-value" onChange={handleChange} />
					</SimpleInputField>
				);
				const input = screen.getByRole('textbox', { name: 'Mock input' });
				await user.type(input, 't');
				expect(handleChange).toHaveBeenCalledTimes(1);
			});
		});

		describe('when a user types in the input field', () => {
			test('then the value should be displayed in the input', async () => {
				const user = userEvent.setup();
				render(
					<SimpleInputField label="Mock input">
						<Input />
					</SimpleInputField>
				);

				const input = screen.getByRole('textbox', { name: 'Mock input' });
				await user.type(input, 'test-text');
				expect(input).toHaveValue('test-text');
			});
		});

		describe('when the invalid prop is defined', () => {
			test('then the input should be invalid', () => {
				render(
					<SimpleInputField label="Mock input">
						<Input invalid />
					</SimpleInputField>
				);
				expect(screen.getByRole('textbox', { name: 'Mock input' })).toBeInvalid();
			});
		});

		describe('when the disabled prop is defined', () => {
			test('then the input should be disabled', () => {
				render(
					<SimpleInputField label="Mock input">
						<Input defaultValue="test-text" disabled />
					</SimpleInputField>
				);

				expect(screen.getByRole('textbox', { name: 'Mock input' })).toBeDisabled();
			});
		});
	});

	describe('when the isFieldset prop is defined', () => {
		test('then a fieldset should be rendered', () => {
			render(
				<SimpleInputField label="Mock input" isFieldset>
					<Input />
				</SimpleInputField>
			);

			expect(screen.getByRole('group')).toBeInTheDocument();
		});
	});
});
