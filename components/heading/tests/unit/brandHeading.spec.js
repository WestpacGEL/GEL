import React from 'react';
import { BrandHeading } from '@westpac/heading';
import { render } from '@testing-library/react';

import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';
import { GEL } from '@westpac/core';
import wbc from '@westpac/wbc';

// The default tests every component should run
overridesTest({
	name: 'heading', // the name has to be the package name without '@westpac/' scope
	overrides: ['BrandHeading'], // every single override root key
	Component: (props) => (
		<BrandHeading size={1} {...props}>
			Heading content
		</BrandHeading>
	), // the component with all components rendered
});

// another default test to check that the component errors when outside of GEL and renders when inside
nestingTest({
	name: 'brandHeading',
	Component: (props) => <BrandHeading size={1} {...props} />,
});

describe('Heading component', () => {
	test('should render its content', () => {
		const text = 'Hello';
		const content = <span data-testid="my-span">{text}</span>;
		const SimpleBrandHeading = () => (
			<GEL brand={wbc}>
				<BrandHeading size={1}>{content}</BrandHeading>
			</GEL>
		);

		const { container, getByTestId } = render(<SimpleBrandHeading />);

		expect(container).toHaveTextContent(text);
		expect(getByTestId('my-span')).toBeInTheDocument();
	});
});
