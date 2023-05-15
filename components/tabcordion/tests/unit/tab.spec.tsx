import { Tab, Tabcordion } from '@westpac/tabcordion';
import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';
import { TabProps } from '../../src/Tab';
import { blenderPanel } from '../../src/overrides/panel.js';
import wbc from '@westpac/wbc';

overridesTest({
	name: 'tabcordion',
	overrides: [
		'Item',
		'AccordionBtn',
		// TODO: 'AccordionIcon' needs to be added as a part of overrides test in the future
		// 'AccordionIcon',
		'Panel',
		'PanelBody',
	],
	Component: (props: TabProps) => (
		<Tabcordion>
			<Tab {...props} />
		</Tabcordion>
	),
});

// another default test to check that the component errors when outside of GEL and renders when inside
nestingTest({
	name: 'tabcordion',
	Component: (props: TabProps) => (
		<Tabcordion>
			<Tab {...props} />
		</Tabcordion>
	),
});

// Component specific tests
describe('Tab component', () => {
	const WBCTab = (props: TabProps) => (
		<GEL brand={wbc}>
			<Tabcordion mode="tabs">
				<Tab {...props} />
				<Tab mode="tabs" last selected={false} text="tap2" onClick={() => {}}>
					test
				</Tab>
			</Tabcordion>
		</GEL>
	);

	it('renders Tab with default props', () => {
		const defaultProps: TabProps = {
			children: 'test tap',
			text: 'test text',
		};
		const { container } = render(<WBCTab {...defaultProps} />);
		expect(container).toBeInTheDocument();
	});

	it('renders Tab with blender overrides', () => {
		const defaultProps: TabProps = {
			children: 'test tap',
			text: 'test text',
		};
		const overridesObj = {
			Panel: {
				component: blenderPanel.component,
				styles: () => blenderPanel.styles(null, { selected: false }),
				attributes: () => blenderPanel.attributes,
			},
		};
		const { container } = render(<WBCTab {...defaultProps} overrides={overridesObj}></WBCTab>);
		expect(container).toBeInTheDocument();
	});
});
