import { Tab, Tabcordion } from '@westpac/tabcordion';
import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';
import { TabcordionProps } from '../../src/Tabcordion.js';
import wbc from '@westpac/wbc';

import { blenderTabcordion } from '../../src/overrides/tabcordion.js';
import { blenderTabBtn } from '../../src/overrides/tabBtn.js';
import { blenderTabRow } from '../../src/overrides/tabRow.js';
import { blenderAccordionBtn } from '../../src/overrides/accordionBtn.js';

const ResponsiveTabcordion = ({ mode, ...rest }: TabcordionProps) => (
	<Tabcordion mode="responsive" {...rest}>
		<Tab text="Test Tab 1">Test Tab 1</Tab>
		<Tab text="Test Tab 2">Test Tab 2</Tab>
	</Tabcordion>
);

const TabsTabcordion = ({ mode, ...rest }: TabcordionProps) => (
	<Tabcordion mode="tabs" {...rest}>
		<Tab text="Test Tab 1">Test Tab 1</Tab>
		<Tab text="Test Tab 2">Test Tab 2</Tab>
	</Tabcordion>
);

// Testing responsive mode Tabcordion
overridesTest({
	name: 'tabcordion',
	// TODO: 'AccordionIcon' needs to be added as a part of overrides test in the future
	overrides: ['Tabcordion', 'Item', 'AccordionBtn', 'Panel', 'PanelBody'],
	Component: (props: TabcordionProps) => <ResponsiveTabcordion {...props} />,
});

// Testing tabs mode Tabcordion
overridesTest({
	name: 'tabcordion',
	overrides: ['TabBtn', 'TabRow'],
	Component: (props: TabcordionProps) => <TabsTabcordion {...props} />,
});

// another default test to check that the component errors when outside of GEL and renders when inside
nestingTest({
	name: 'tabcordion',
	Component: (props: TabcordionProps) => <ResponsiveTabcordion {...props} />,
});

// Component specific tests
describe('Tabcordion component', () => {
	const WBCTabcordion = (props: TabcordionProps) => (
		<GEL brand={wbc}>
			<Tabcordion {...props} />
		</GEL>
	);
	it('renders Tabcordion with default props', async () => {
		const defaultProps: TabcordionProps = {
			children: (
				<>
					<Tab text="Test Tab 1">Test Tab 1</Tab>
					<Tab text="Test Tab 2">Test Tab 2</Tab>
				</>
			),
		};
		const { container, getByText } = render(<WBCTabcordion {...defaultProps} />);
		expect(container).toBeInTheDocument();
		expect(getByText(/Test Tab 1/i)).toBeInTheDocument();
		expect(getByText(/Test Tab 2/i)).toBeInTheDocument();
	});

	it('renders Tabcordion with accordion mode with lego look', async () => {
		const defaultProps: TabcordionProps = {
			mode: 'accordion',
			look: 'lego',
			children: (
				<>
					<Tab text="Test Tab 1">Test Tab 1</Tab>
					<Tab text="Test Tab 2">Test Tab 2</Tab>
				</>
			),
		};
		const { container, getByText } = render(<WBCTabcordion {...defaultProps} />);
		expect(container).toBeInTheDocument();
		expect(getByText(/Test Tab 1/i)).toBeInTheDocument();
		expect(getByText(/Test Tab 2/i)).toBeInTheDocument();
	});

	it('renders Tabcordion with blender overrides', () => {
		const overridesObj = {
			Tabcordion: {
				component: blenderTabcordion.component,
				styles: () => blenderTabcordion.styles(null, { mode: 'tabs', look: 'lego' }),
				attributes: () => blenderTabcordion.attributes,
			},
			TabBtn: {
				component: blenderTabBtn.component,
				styles: () => blenderTabBtn.styles(null, { selected: true }),
				attributes: () => blenderTabBtn.attributes,
			},
			TabRow: {
				component: blenderTabRow.component,
				styles: () => blenderTabRow.styles(null, { justify: false }),
				attributes: () => blenderTabRow.attributes,
			},
			AccordionBtn: {
				component: blenderAccordionBtn.component,
				styles: () => blenderAccordionBtn.styles(null, { hidden: false }),
				attributes: () => blenderAccordionBtn.attributes,
			},
		};
		const { container } = render(
			<WBCTabcordion mode="accordion" look="lego" overrides={overridesObj}>
				<Tab text="Test Tab 1">Test Tab 1</Tab>
			</WBCTabcordion>
		);
		expect(container).toBeInTheDocument();
	});
});
