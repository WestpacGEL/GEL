import { GEL } from '@westpac/core';
import { render, screen } from '@testing-library/react';
import { Footer } from '@westpac/footer';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';
import wbc from '@westpac/wbc';

// The default tests every component should run
overridesTest({
	name: 'footer', // the name has to be the package name without '@westpac/' scope
	overrides: ['Footer', 'Inner', 'Left', 'Right', 'LogoLink', 'Logo'], // every single override root key
	Component: (props) => (
		<Footer {...props}>Footer content</Footer> // the component with all components rendered
	),
});

// another default test to check that the component errors when outside of GEL and renders when inside
nestingTest({
	name: 'footer',
	Component: (props) => <Footer {...props} />,
});

// Component specific tests
describe('Footer component', () => {
	const SimpleContent = () => <h1>Just a title</h1>;
	const SimpleFooter = (props) => (
		<GEL brand={wbc}>
			<Footer {...props}>
				<SimpleContent />
			</Footer>
		</GEL>
	);

	test('It should render Footer', () => {
		const { container } = render(<SimpleFooter />);
		expect(container).toBeInTheDocument();
		expect(screen.getByText(/Just a title/)).toBeInTheDocument();
	});

	test('should render the hidden screen reader text when srOnlyText prop passed', () => {
		render(<SimpleFooter srOnlyText="Go to home" />);
		expect(screen.getByText(/Go to home/)).toBeInTheDocument();
	});

	test('should show Westpac logo at right hand side', () => {
		render(<SimpleFooter />);
		expect(screen.getByRole('img', { name: 'Westpac' })).toBeInTheDocument();
	});

	test('should hide Westpac logo when hideLogo prop is passed', () => {
		render(<SimpleFooter hideLogo />);
		expect(screen.queryByRole('img', { name: 'Westpac' })).not.toBeInTheDocument();
	});
});
