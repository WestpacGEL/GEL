import { GEL } from '@westpac/core';
import { render, fireEvent } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { TextInputWithButton } from '@westpac/text-input';
import { UmbrellaIcon } from '@westpac/icon';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';
import wbc from '@westpac/wbc';

// The default tests every component should run
overridesTest({
	name: 'text-input', // the name has to be the package name without '@westpac/' scope
	overrides: ['TextInputWithButton'], // every single override root key
	Component: (props) => (
		<TextInputWithButton
			size="medium"
			inline={false}
			invalid={false}
			btnIcon={UmbrellaIcon}
			{...props}
		>
			{props.children}
		</TextInputWithButton>
	),
});

// another default test to check that the component errors when outside of GEL and renders when inside
nestingTest({
	name: 'text-input-with-button',
	Component: (props) => (
		<TextInputWithButton
			size="medium"
			inline={false}
			invalid={false}
			{...props}
			defaultValue={props.children}
		/>
	),
});

describe('TextInputWithButton component', () => {
	const SimpleTextInputWithButton = (props) => (
		<GEL brand={wbc}>
			<TextInputWithButton
				{...props}
				size="medium"
				inline={false}
				invalid={false}
				btnIcon={UmbrellaIcon}
			/>
		</GEL>
	);

	test('should show an icon along side the input', () => {
		render(<SimpleTextInputWithButton />);
		const theInputElement = screen.getByRole('textbox');
		const parentElement = theInputElement.parentElement;
		const theButtonElement = screen.getByRole('button');
		expect(parentElement.childElementCount).toBe(2);
		expect(parentElement.firstChild).toBe(theInputElement);
		expect(parentElement.lastChild).toBe(theButtonElement);
	});

	test('should render before button and be clickable', () => {
		const handleClick = jest.fn(() => {});
		render(<SimpleTextInputWithButton btnOnClick={handleClick} />);
		fireEvent.click(screen.getByRole('button'));
		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});
