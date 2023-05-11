import { GEL } from '@westpac/core';
import { render, fireEvent } from '@testing-library/react';
import { PasswordInput } from '@westpac/form';
import wbc from '@westpac/wbc';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';

overridesTest({
	name: 'form',
	overrides: ['PasswordInput'],
	Component: (props) => <PasswordInput {...props} />,
});

nestingTest({
	name: 'form',
	Component: () => <PasswordInput size="medium" inline={false} invalid={false} />,
});

function SimplePasswordInput(props) {
	return (
		<GEL brand={wbc}>
			<PasswordInput
				data-testid="test-password-input"
				size="medium"
				inline={false}
				invalid={false}
			/>
		</GEL>
	);
}

describe('PasswordInput component', () => {
	test('should render Form', () => {
		const { container } = render(<SimplePasswordInput />);
		expect(container).toBeInTheDocument();
	});

	// Below test is using the aria-label to check if when pressing the eye icon the state changes
	test('should be able to click button and change state', () => {
		const { getByRole } = render(<SimplePasswordInput />);
		const btn = getByRole('button');
		expect(btn).toHaveAttribute('aria-label', 'Reveal password');
		fireEvent.click(btn);
		expect(btn).toHaveAttribute('aria-label', 'Obscure password');
		fireEvent.click(btn);
		expect(btn).toHaveAttribute('aria-label', 'Reveal password');
	});
});
