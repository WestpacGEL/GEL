import React from 'react';
import { Header } from '@westpac/header';
import { render } from '@testing-library/react';

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

describe('Heading component', () => {
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
});
