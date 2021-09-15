import React from 'react';
import { render } from '@testing-library/react';

import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';
import { SkipLink, VisuallyHidden } from '@westpac/a11y';
import { GEL } from '@westpac/core';
import wbc from '@westpac/wbc';

// VisuallyHidden
overridesTest({
	name: 'a11y', // the name has to be the package name without '@westpac/' scope
	overrides: ['VisuallyHidden'], // every single override root key
	Component: (props) => <VisuallyHidden {...props}>Visually Hidden</VisuallyHidden>,
});

// another default test to check that the component errors when outside of GEL and renders when inside
nestingTest({
	name: 'a11y',
	Component: (props) => <VisuallyHidden {...props}>Visually Hidden</VisuallyHidden>,
});

describe('Visually Hidden specific tests', () => {
	// Renders content
	test('', () => {});

	// can use the tag prop

	// is hidden but in the dom
});

// SkipLink
overridesTest({
	name: 'a11y', // the name has to be the package name without '@westpac/' scope
	overrides: ['SkipLink'], // every single override root key
	Component: (props) => (
		<SkipLink href="#" {...props}>
			Skip Link
		</SkipLink>
	),
});

// another default test to check that the component errors when outside of GEL and renders when inside
nestingTest({
	name: 'a11y',
	Component: (props) => (
		<SkipLink href="#" {...props}>
			Skip Link
		</SkipLink>
	),
});

describe('SkipLink specific tests', () => {
	// renders content
	test('', () => {});

	// on click the url changes?
});
