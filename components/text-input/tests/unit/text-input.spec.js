import { GEL } from '@westpac/core';
import { fireEvent, render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { TextInput } from '@westpac/text-input';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';
import wbc from '@westpac/wbc';

// The default tests every component should run
overridesTest({
	name: 'text-input', // the name has to be the package name without '@westpac/' scope
	overrides: ['TextInput'], // every single override root key
	Component: (props) => (
		<TextInput size="medium" inline={false} invalid={false} {...props}>
			{props.children}
		</TextInput>
	),
});

// another default test to check that the component errors when outside of GEL and renders when inside
nestingTest({
	name: 'text-input',
	Component: (props) => (
		<TextInput
			{...props}
			size="medium"
			inline={false}
			invalid={false}
			defaultValue={props.children}
		/>
	),
});

// Component specific tests
describe('TextInput component', () => {
	const SimpleTextInput = (props) => (
		<GEL brand={wbc}>
			<TextInput
				{...props}
				size="medium"
				inline={false}
				invalid={false}
				defaultValue={'sample'}
				onChange={() => {}}
			/>
		</GEL>
	);

	test('should render text as provided to the TextInput', () => {
		render(<SimpleTextInput />);
		const inputNode = screen.getByDisplayValue('sample');
		expect(inputNode).toHaveValue('sample');
		fireEvent.change(inputNode, { target: { value: 'modified' } });
		expect(inputNode.value).toEqual('modified');
	});

	test('should render additional text typed into TextInput', async () => {
		render(<SimpleTextInput />);
		const inputNode = screen.getByRole('textbox');
		expect(inputNode).toBeInTheDocument();
		const user = userEvent.setup();
		await user.type(inputNode, ' modified');
		expect(inputNode.value).toEqual('sample modified');
	});

	test('should be disabled when disabled attribute provided', () => {
		render(<SimpleTextInput disabled />);
		const inputNode = screen.getByDisplayValue('sample');
		expect(inputNode).toBeDisabled();
	});

	test('should not allow any text to be input when disabled', async () => {
		render(<SimpleTextInput disabled />);
		const inputNode = screen.getByRole('textbox');
		expect(inputNode.value).toEqual('sample');
		const user = userEvent.setup();
		await user.type(inputNode, 'modified');
		expect(inputNode.value).toEqual('sample');
	});

	test('should allow existing text to be deleted', async () => {
		render(<SimpleTextInput />);
		const inputNode = screen.getByDisplayValue('sample');
		expect(inputNode).toBeInTheDocument();
		expect(inputNode.value).toEqual('sample');
		expect(inputNode.className).toEqual('css-13g1z14-textInput');
		const user = userEvent.setup();
		await user.tripleClick(inputNode);
		await user.keyboard('{backspace}');
		expect(inputNode.value).toEqual('');
	});
});
