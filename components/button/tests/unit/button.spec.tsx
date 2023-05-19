import { useState } from 'react';
import { Button } from '@westpac/button';
import { GEL } from '@westpac/core';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';
import wbc from '@westpac/wbc';
import { ArrowLeftIcon } from '@westpac/icon';
import { ButtonProps } from '../../src/Button';

// The default tests every component should run
overridesTest({
	name: 'button', // the name has to be the package name without '@westpac/' scope
	overrides: ['Button', 'Content', 'Text', 'Icon'], // every single override root key
	Component: (props: ButtonProps) => (
		<Button iconAfter={() => <ArrowLeftIcon copyrightYear="2020" />} {...props}>
			Button content
		</Button>
	), // the component with all components rendered
});

// another default test to check that the component errors when outside of GEL and renders when inside
nestingTest({
	name: 'button',
	Component: (props: ButtonProps) => <Button {...props} />,
});

const SimpleButton = (props: ButtonProps) => (
	<GEL brand={wbc}>
		<Button data-testid="buttonTest" {...props}>
			{props.children}
		</Button>
	</GEL>
);

// Component specific tests
describe('Button component', () => {
	const HelperComponent = function (props: ButtonProps) {
		const [active, setActive] = useState(false);
		const handleClick = () => {
			setActive(!active);
		};
		return (
			<GEL brand={wbc}>
				<Button {...props} onClick={handleClick}>
					{active ? 'Logout' : 'Login'}
				</Button>
			</GEL>
		);
	};

	it('should be disabled when prop "disabled" is passed', async () => {
		const { getByTestId } = render(
			<SimpleButton data-testid="my-button" disabled>
				Click Me
			</SimpleButton>
		);

		expect(getByTestId(/my-button/)).toBeDisabled();
	});

	it('should be inactive when the disabled prop is passed', () => {
		const { getByTestId } = render(<SimpleButton disabled data-testid="my-button" />);
		const theButton = getByTestId('my-button');
		expect(theButton).toHaveAttribute('disabled');
	});

	it('should respond to a click', async () => {
		const handleClick = jest.fn(() => {});
		render(
			<SimpleButton data-testid="my-button" className="active" onClick={handleClick}>
				Click Me
			</SimpleButton>
		);
		const user = userEvent.setup();
		await user.click(screen.getByText(/click me/i));
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it('should trigger the onClick event when it is clicked', async () => {
		const { getByRole } = render(<HelperComponent />);
		const theButton = getByRole('button');
		expect(theButton).toBeInTheDocument();
		expect(theButton).toHaveTextContent('Login');
		const user = userEvent.setup();
		await user.click(theButton);
		expect(theButton).toHaveTextContent('Logout');
		await user.click(theButton);
		expect(theButton).toHaveTextContent('Login');
	});

	it('should render Icon component in LHS of button when iconBefore property is arrow', () => {
		const { getByRole } = render(
			<SimpleButton iconBefore={() => <ArrowLeftIcon copyrightYear="2020" />}>
				Icon Before
			</SimpleButton>
		);
		const theButtonElement = getByRole('button');
		const leftIconElement = getByRole('img');
		expect(theButtonElement).toBeInTheDocument();
		expect(leftIconElement).toBeInTheDocument();
		expect(leftIconElement.ariaLabel === 'Arrow Left');
	});

	it('should only render button without horizontal padding in link style with horizontalPadding prop', () => {
		const { getByTestId } = render(
			<SimpleButton horizontalPadding={false} look="link">
				Link Style Button
			</SimpleButton>
		);
		expect(getByTestId(/buttonTest/)).toHaveStyle(`
			padding-left: 0;
			padding-right: 0;
		`);
	});

	it('should not render button without horizontal padding in other styles with horizontalPadding prop', () => {
		const { getByTestId } = render(
			<SimpleButton horizontalPadding={false} look="primary">
				Primary Style Button
			</SimpleButton>
		);
		expect(getByTestId(/buttonTest/)).not.toHaveStyle(`
			padding-left: 0;
			padding-right: 0;
		`);
	});

	it('should render button with min-width when min-width is given as prop', () => {
		const { getByTestId } = render(
			<SimpleButton minWidth="150px" look="primary">
				Primary Style Button
			</SimpleButton>
		);
		expect(getByTestId(/buttonTest/)).toHaveStyle(`
			min-width: 150px;
		`);
	});
});
