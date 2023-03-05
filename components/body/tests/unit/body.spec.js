import React from 'react';
import { Body } from '@westpac/body';
import { render } from '@testing-library/react';

import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';
import { GEL } from '@westpac/core';
import wbc from '@westpac/wbc';

// The default tests every component should run
overridesTest({
	name: 'body', // the name has to be the package name without '@westpac/' scope
	overrides: ['Body'], // every single override root key
	Component: (props) => <Body {...props}>Body content</Body>, // the component with all components rendered
});

// another default test to check that the component errors when outside of GEL and renders when inside
nestingTest({
	name: 'body',
	Component: (props) => <Body {...props} />,
});

describe('Body component', () => {
	test('should render its content', () => {
		const text = 'Hello';
		const content = <span data-testid="my-span">{text}</span>;
		const SimpleBody = () => (
			<GEL brand={wbc}>
				<Body>{content}</Body>
			</GEL>
		);

		const { container, getByTestId } = render(<SimpleBody />);

		expect(container).toHaveTextContent(text);
		expect(getByTestId('my-span')).toBeInTheDocument();
	});
});
