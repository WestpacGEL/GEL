import React, { useState } from 'react';
import { Button } from '@westpac/button';
import { GEL } from '@westpac/core';
import { fireEvent, render, screen, within } from '@testing-library/react';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';
import wbc from '@westpac/wbc';
import { ArrowLeftIcon } from '@westpac/icon';

// The default tests every component should run
overridesTest({
	name: 'button', // the name has to be the package name without '@westpac/' scope
	overrides: ['Button'], // every single override root key
	Component: (props) => <Button {...props}>Button content</Button>, // the component with all components rendered
});

// another default test to check that the component errors when outside of GEL and renders when inside
nestingTest({
	name: 'button',
	Component: (props) => <Button {...props} />,
});

const SimpleButton = (props) => (
	<GEL brand={wbc}>
		<Button {...props}>{props.children}</Button>
	</GEL>
);

// Component specific tests
describe('Button component', () => {
	const HelperComponent = function (props) {
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

	test('should be disabled when prop "disabled" is passed', () => {
		const someText = 'Hello World';
		const someContent = <span data-testid="my-span">{someText}</span>;
		const { container, getByRole } = render(<SimpleButton disabled>{someContent}</SimpleButton>);
		expect(getByRole('button')).toBeInTheDocument();
		expect(getByRole('button')).toHaveAttribute('disabled');
		const theButton = container.querySelector('button[disabled]');
		expect(theButton).toBeInTheDocument();
		expect(theButton).toHaveTextContent(someText);
	});

	test('should be inactive when the disabled prop is passed', () => {
		const { getByTestId } = render(<SimpleButton disabled data-testid="my-button" />);
		const theButton = getByTestId('my-button');
		expect(theButton).toHaveAttribute('disabled');
	});

	test('should respond to a click', () => {
		const handleClick = jest.fn(() => console.log('Button clicked'));
		const logSpy = jest.spyOn(console, 'log');
		render(
			<SimpleButton data-testid="my-button" className="active" onClick={handleClick}>
				Click Me
			</SimpleButton>
		);
		fireEvent.click(screen.getByText(/click me/i));
		expect(handleClick).toHaveBeenCalledTimes(1);
		expect(logSpy).toBeCalledTimes(1);
		expect(logSpy).toHaveBeenCalledWith('Button clicked');
	});

	test('should trigger the onClick event when it is clicked', () => {
		const { queryByRole } = render(<HelperComponent></HelperComponent>);
		const theButton = queryByRole('button');
		expect(theButton).toBeInTheDocument();
		expect(theButton).toHaveTextContent('Login');
		fireEvent.click(screen.getByText('Login'));
		expect(theButton).toHaveTextContent('Logout');
		fireEvent.click(screen.getByText('Logout'));
		expect(theButton).toHaveTextContent('Login');
	});

	test('should render Icon component in LHS of button when iconBefore property is arrow', () => {
		const { container, getByRole } = render(
			<SimpleButton iconBefore={ArrowLeftIcon}>Icon Before</SimpleButton>
		);
		const theButtonElement = getByRole('button');
		const leftIconElement = container.querySelector('span[class$=button-icon-before]');
		expect(theButtonElement).toBeInTheDocument();
		expect(leftIconElement).toBeInTheDocument();
		// const theSvgElement = within(leftIconElement).getByRole('img'); // not able to getByRole
		const theSvgElement = container.querySelector('svg[class$=icon-svg]');
		const theSvgElementClone = container.querySelector('svg');
		expect(theSvgElement).toBeInTheDocument();
		expect(theSvgElementClone).toBeInTheDocument();
		expect(theSvgElement === theSvgElementClone);
	});
});
