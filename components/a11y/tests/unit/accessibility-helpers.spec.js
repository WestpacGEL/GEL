import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import { VisuallyHidden, SkipLink } from '@westpac/a11y';
import wbc from '@westpac/wbc';

// Component specific tests
describe('Accessibility helper component', () => {
	const SimpleVisuallyHidden = () => (
		<GEL brand={wbc}>
			<VisuallyHidden>This is screen reader only text</VisuallyHidden>
		</GEL>
	);
	const SimpleSkipLink = () => (
		<GEL brand={wbc}>
			<SkipLink href="#content">This is screen reader only text (visible when focussed)</SkipLink>
		</GEL>
	);
	test('It should render Visually Hidden', () => {
		render(<SimpleVisuallyHidden />);
	});
	test('It should render Skip Link', () => {
		render(<SimpleSkipLink />);
	});
});
