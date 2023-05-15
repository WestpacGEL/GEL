import { Tab, Tabcordion } from '@westpac/tabcordion';
import { GEL } from '@westpac/core';
import { render, screen } from '@testing-library/react';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';
import { TabProps } from '../../src/Tab';
import wbc from '@westpac/wbc';
import { ErrorBoundary } from '../../../../helpers/tests/error-boundary.js';

overridesTest({
	name: 'tabcordion',
	overrides: [
		'Item',
		'AccordionBtn',
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
	Component: (props: TabProps) => <Tab {...props} />,
});

// Component specific tests
// describe('TabCordion component', () => {
// 	const WBCTabCordion = (props: TabcordionProps) => (
// 		<GEL brand={wbc}>
// 			<Tabcordion {...props} />
// 		</GEL>
// 	);

// 	it('renders TabCordion with default props', () => {
// 		const defaultProps: TabcordionProps = {
// 			mode: 'responsive',
// 			look: 'soft',
// 			justify: false,
// 			openTab: 0,
// 			children: [],
// 		};
// 		const { container } = render(<WBCTabCordion {...defaultProps} />);
// 		expect(container).toBeInTheDocument();
// 	});
