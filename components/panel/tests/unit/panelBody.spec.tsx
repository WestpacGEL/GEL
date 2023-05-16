import { Body, Panel } from '@westpac/panel';
import { GEL } from '@westpac/core';
import { render, screen } from '@testing-library/react';
import { blenderBody } from '../../src/overrides/body.js';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';
import { PanelBodyProps } from '../../src/PanelBody';
import { ErrorBoundary } from '../../../../helpers/tests/error-boundary.js';
import wbc from '@westpac/wbc';

overridesTest({
	name: 'panel',
	overrides: ['Panel', 'Body'],
	Component: (props: any) => (
		<Panel heading="Faint panel" look="hero" headingTag="h1" {...props}>
			<Body />
		</Panel>
	),
});

// another default test to check that the component errors when outside of GEL and renders when inside
nestingTest({
	name: 'panel',
	Component: (props: PanelBodyProps) => (
		<Panel look="hero" heading="hero panel" headingTag="h3">
			<Body {...props}>{props.children}</Body>
		</Panel>
	),
});

const SimplePanelBody = (props: PanelBodyProps) => (
	<GEL brand={wbc}>
		<Panel look="hero" heading="hero panel" headingTag="h3">
			<Body data-testid="test-panelBody" {...props}>
				{props.children}
			</Body>
		</Panel>
	</GEL>
);

describe('PanelBody component', () => {
	test('should render PanelBody', () => {
		const { container } = render(<SimplePanelBody />);
		expect(container).toBeInTheDocument();
	});

	test('should render panelBody with blender overrides', () => {
		const overridesObj = {
			Body: {
				component: blenderBody.component,
				styles: () => blenderBody.styles(),
				attributes: () => blenderBody.attributes(),
			},
		};
		const { container } = render(<SimplePanelBody overrides={overridesObj}></SimplePanelBody>);
		expect(container).toBeInTheDocument();
	});

	test('throw the error if PanelBody is not wrapped by Panel', () => {
		const Wrapper = () => (
			<GEL brand={wbc}>
				<Body data-testid="test-body">test Body</Body>
			</GEL>
		);
		render(<Wrapper />, { wrapper: ErrorBoundary });
		expect(screen.queryByText(/components should be wrapped in a <Panel>./i)).toBeInTheDocument();
	});
});
