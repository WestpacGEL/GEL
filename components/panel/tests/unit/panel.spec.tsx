import { Body, Footer, Panel } from '@westpac/panel';
import { GEL } from '@westpac/core';
import { render, screen } from '@testing-library/react';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { blenderPanel } from '../../src/overrides/panel.js';
import { blenderHeader } from '../../src/overrides/header.js';
import { blenderHeading } from '../../src/overrides/heading.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';
import { PanelProps } from '../../src/Panel';
import wbc from '@westpac/wbc';
import { ErrorBoundary } from '../../../../helpers/tests/error-boundary.js';

overridesTest({
	name: 'panel',
	overrides: ['Panel'],
	Component: ({ look, heading, headingTag, ...rest }: PanelProps) => (
		<Panel look="hero" heading="Faint panel" headingTag="h3" {...rest}></Panel>
	),
});

// another default test to check that the component errors when outside of GEL and renders when inside
nestingTest({
	name: 'panel',
	Component: ({ look, heading, headingTag, ...rest }: PanelProps) => (
		<Panel look="hero" heading="Faint panel" headingTag="h3" {...rest}></Panel>
	),
});

const SimplePanel = (props: PanelProps) => (
	<GEL brand={wbc}>
		<Panel data-testid="test-table" {...props}>
			{props.children}
		</Panel>
	</GEL>
);

// Component specific tests
describe('Panel component', () => {
	test('should render Panel with required props', () => {
		const { container } = render(<SimplePanel look="hero" heading="Faint panel" headingTag="h1" />);
		expect(container).toBeInTheDocument();
	});
	test('throw the error if child component is not wrapped by parent component', () => {
		const Wrapper = () => (
			<GEL brand={wbc}>
				<Body data-testid="test-body">test Body</Body>
			</GEL>
		);
		render(<Wrapper />, { wrapper: ErrorBoundary });
		expect(screen.queryByText(/components should be wrapped in a <Panel>./i)).toBeInTheDocument();
	});

	test('should render child component inside Panel', () => {
		const { getByTestId } = render(
			<SimplePanel look="hero" heading="Faint panel" headingTag="h1">
				<Body data-testid="test-body">test Body</Body>
				<Footer data-testid="test-footer">test Footer</Footer>
			</SimplePanel>
		);
		expect(getByTestId('test-body')).toBeInTheDocument();
		expect(getByTestId('test-footer')).toBeInTheDocument();
	});

	test('should render panel with blender overrides', () => {
		const overridesObj = {
			Panel: {
				component: blenderPanel.component,
				// Todo: blenderPanel styles property can't read look props
				// styles: () => blenderPanel.styles(null, { look: 'hero' }),
				attributes: () => blenderPanel.attributes(null, { look: 'hero' }),
			},
			Header: {
				component: blenderHeader.component,
				// Todo: blenderHeader styles property can't read look props
				// styles: () => blenderHeader.styles(null, {}),
				attributes: () => blenderHeader.attributes,
			},
			Heading: {
				component: blenderHeading.component,
				styles: () => blenderHeading.styles(),
				attributes: () => blenderHeading.attributes,
			},
		};
		const { container } = render(
			<SimplePanel overrides={overridesObj} look="faint" heading="Faint panel" headingTag="h3">
				<Body />
				<Footer />
			</SimplePanel>
		);
		expect(container).toBeInTheDocument();
	});
});
