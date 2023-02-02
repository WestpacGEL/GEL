import React from 'react';
import { Header } from '@westpac/header';
import { Button } from '@westpac/button';
import { render, within } from '@testing-library/react';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';
import { GEL } from '@westpac/core';
import wbc from '@westpac/wbc';

// The default tests every component should run
overridesTest({
	name: 'header', // the name has to be the package name without '@westpac/' scope
	overrides: ['Header', 'Inner', 'Left', 'LeftBtn', 'LogoLink', 'Logo', 'Right'], // every single override root key
	Component: (props) => (
		<Header leftIcon="arrow" {...props}>
			Header content
		</Header>
	), // the component with all components rendered
});

// another default test to check that the component errors when outside of GEL and renders when inside
nestingTest({
	name: 'header',
	Component: (props) => <Header {...props} />,
});

describe('Header component', () => {
	const originalError = console.error;
	beforeEach(() => {
		console.error = jest.fn();
	});
	afterEach(() => {
		console.error = originalError;
	});

	test('should render its content', () => {
		const text = 'Hello';
		const content = <span data-testid="my-span">{text}</span>;
		const SimpleHeader = () => (
			<GEL brand={wbc}>
				<Header>{content}</Header>
			</GEL>
		);

		const { container, getByTestId } = render(<SimpleHeader />);

		expect(container).toHaveTextContent(text);
		expect(getByTestId('my-span')).toBeInTheDocument();
	});

	test('should render Left and LeftBtn components when leftIcon property is arrow', () => {
		const text = 'Hello';
		const content = <span data-testid="my-span">{text}</span>;
		const SimpleHeader = () => (
			<GEL brand={wbc}>
				<Header leftIcon="arrow">{content}</Header>
			</GEL>
		);

		const { container } = render(<SimpleHeader />);

		const leftElement = container.querySelector('div[class*=header-Left]');
		expect(leftElement).toBeInTheDocument();
		expect(leftElement).toHaveStyle('display: flex');
		expect(leftElement).toHaveStyle('alignItems: center');
		expect(within(leftElement).getByRole('button')).toBeInTheDocument();
		const svg = leftElement.querySelector('svg');
		expect(svg).toBeInTheDocument();
	});

	test('should render Left and LeftBtn components when leftIcon property is hamburger', () => {
		const text = 'Hello';
		const content = <span data-testid="my-span">{text}</span>;
		const SimpleHeader = () => (
			<GEL brand={wbc}>
				<Header leftIcon="hamburger">{content}</Header>
			</GEL>
		);

		const { container } = render(<SimpleHeader />);
		const leftElement = container.querySelector('div[class*=header-Left]');

		expect(leftElement).toBeInTheDocument();
		expect(leftElement).toHaveStyle('display: flex');
		expect(leftElement).toHaveStyle('alignItems: center');
		expect(within(leftElement).getByRole('button')).toBeInTheDocument();
		const svg = leftElement.querySelector('svg');
		expect(svg).toBeInTheDocument();
	});

	test('should have a prop type warning when unexpected leftIcon value is specified', () => {
		// Left and LeftBtn components are always rendered if leftIcon property is assigned any value
		const logSpy = jest.spyOn(console, 'error');
		const text = 'Hello';
		const content = <span data-testid="my-span">{text}</span>;
		const SimpleHeader = () => (
			<GEL brand={wbc}>
				<Header leftIcon="cherry"> {content}</Header>
			</GEL>
		);
		render(<SimpleHeader />);
		const expectedPartOfErrorMessage =
			'Invalid prop `leftIcon` of value `cherry` supplied to `Header`, expected one of ["arrow","hamburger"]';
		const expectedPartOfErrorMessageIsPresent =
			logSpy.mock.calls[0].join(' ').indexOf(expectedPartOfErrorMessage) !== -1;
		expect(expectedPartOfErrorMessageIsPresent).toBe(true);
	});

	test('should have a prop type warning when leftIcon is assigned empty string', () => {
		const logSpy = jest.spyOn(console, 'error');
		const SimpleHeader = () => (
			<GEL brand={wbc}>
				<Header leftIcon="" />
			</GEL>
		);
		render(<SimpleHeader />);
		const expectedPartOfErrorMessage =
			'Invalid prop `leftIcon` of value `` supplied to `Header`, expected one of ["arrow","hamburger"]';
		const expectedPartOfErrorMessageIsPresent =
			logSpy.mock.calls[0].join(' ').indexOf(expectedPartOfErrorMessage) !== -1;
		expect(expectedPartOfErrorMessageIsPresent).toBe(true);
	});

	test('should not render Left and LeftBtn components when leftIcon property is not provided', () => {
		const text = 'Hello';
		const content = <span data-testid="my-span">{text}</span>;
		const SimpleHeader = () => (
			<GEL brand={wbc}>
				<Header>{content}</Header>
			</GEL>
		);

		const { container } = render(<SimpleHeader />);
		const leftElement = container.querySelector('div[class*=header-Left]');
		expect(leftElement).not.toBeInTheDocument();
	});

	test('should render Westpac LogoLink and Link components at all times', () => {
		const SimpleHeader = () => (
			<GEL brand={wbc}>
				<Header />
			</GEL>
		);

		const { getByRole, getByLabelText } = render(<SimpleHeader />);
		const svgElement = getByLabelText('Westpac');
		const svgElementClone = within(getByRole('link')).getByRole('img');

		expect(getByRole('link')).toBeInTheDocument();
		expect(svgElement).toBeInTheDocument();
		expect(svgElementClone).toBeInTheDocument();
		expect(svgElement === svgElementClone);
	});

	test('should render Right component and children when children are passed', () => {
		const theChild = (
			<Button look="faint" soft>
				Sign out
			</Button>
		);
		const SimpleHeader = () => (
			<GEL brand={wbc}>
				<Header>{theChild}</Header>
			</GEL>
		);
		const { container, getByText } = render(<SimpleHeader />);
		const rightElement = container.querySelector('div[class*=header-right]');
		const childElement = within(rightElement).getByRole('button');
		const childElementClone = getByText('Sign out');

		expect(rightElement).toBeInTheDocument();
		expect(childElement).toBeInTheDocument();
		expect(childElementClone).toBeInTheDocument();
		expect(childElement === childElementClone);
	});

	test('should get rendered fixed to the top of the window', () => {
		const SimpleHeader = () => (
			<GEL brand={wbc}>
				<Header fixed></Header>
			</GEL>
		);
		const { container } = render(<SimpleHeader />);
		const innerElement = container.querySelector('div[class*=header-inner]');

		expect(innerElement).toHaveStyle('position: fixed');
	});
});
