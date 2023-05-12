import { Footer, Panel } from '@westpac/panel';
import { GEL } from '@westpac/core';
import { render, screen } from '@testing-library/react';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';
import { PanelFooterProps } from '../../src/PanelFooter';
import { ErrorBoundary } from '../../../../helpers/tests/error-boundary.js';

import wbc from '@westpac/wbc';

overridesTest({
	name: 'panel',
	overrides: ['Panel', 'Footer'],
	Component: (props: any) => (
		<Panel heading="Faint panel" look="hero" headingTag="h1" {...props}>
			<Footer />
		</Panel>
	),
});

// another default test to check that the component errors when outside of GEL and renders when inside
nestingTest({
	name: 'panel',
	Component: (props: PanelFooterProps) => (
		<Panel look="hero" heading="hero panel" headingTag="h3">
			<Footer {...props}>{props.children}</Footer>
		</Panel>
	),
});

const SimplePanelFooter = (props: PanelFooterProps) => (
	<GEL brand={wbc}>
		<Panel look="hero" heading="hero panel" headingTag="h3">
			<Footer data-testid="test-panelBody" {...props}>
				{props.children}
			</Footer>
		</Panel>
	</GEL>
);

describe('PanelFooter component', () => {
	test('should render PanelFooter', () => {
		const { container } = render(<SimplePanelFooter />);
		expect(container).toBeInTheDocument();
	});

	test('throw the error if PanelFooter is not wrapped by Panel', () => {
		const Wrapper = () => (
			<GEL brand={wbc}>
				<Footer data-testid="test-body">test Footer</Footer>
			</GEL>
		);
		render(<Wrapper />, { wrapper: ErrorBoundary });
		expect(screen.queryByText(/components should be wrapped in a <Panel>./i)).toBeInTheDocument();
	});
});
