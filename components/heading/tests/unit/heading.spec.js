import React from 'react';
import { Heading } from '@westpac/heading';
import { render } from '@testing-library/react';

import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';
import { GEL } from '@westpac/core';
import wbc from '@westpac/wbc';

// The default tests every component should run
overridesTest({
	name: 'heading', // the name has to be the package name without '@westpac/' scope
	overrides: ['Heading'], // every single override root key
	Component: (props) => (
		<Heading size={1} {...props}>
			Heading content
		</Heading>
	), // the component with all components rendered
});

// another default test to check that the component errors when outside of GEL and renders when inside
nestingTest({
	name: 'heading',
	Component: (props) => <Heading size={1} {...props} />,
});

describe('Heading component', () => {
	test('should render its content', () => {
		const text = 'Hello';
		const content = <span data-testid="my-span">{text}</span>;
		const SimpleHeading = () => (
			<GEL brand={wbc}>
				<Heading size={1}>{content}</Heading>
			</GEL>
		);

		const { container, getByTestId } = render(<SimpleHeading />);

		expect(container).toHaveTextContent(text);
		expect(getByTestId('my-span')).toBeInTheDocument();
	});
});
