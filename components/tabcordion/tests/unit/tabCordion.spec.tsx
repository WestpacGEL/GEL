import { Tab, Tabcordion } from '@westpac/tabcordion';
import { GEL } from '@westpac/core';
import { render, screen } from '@testing-library/react';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';
import { TabcordionProps } from '../../src/Tabcordion';
import wbc from '@westpac/wbc';
import { ErrorBoundary } from '../../../../helpers/tests/error-boundary.js';

const SimpleTabCordion = ({ mode, look, justify, openTab, ...rest }: TabcordionProps) => (
	<>
		<Tabcordion mode={'tabs'} look={'soft'} justify={false} openTab={0} {...rest}>
			<Tab panelId="test" tabId="test" mode="tabs" text="test1">
				Test Tab1
			</Tab>
		</Tabcordion>
		<Tabcordion mode={'accordion'} look={'lego'} justify={false} openTab={0} {...rest}>
			<Tab tabId="test" panelId="test" mode="accordion" text="test1">
				Test Tab1
			</Tab>
		</Tabcordion>
		<Tabcordion mode={'responsive'} look={'lego'} justify={false} openTab={0} {...rest}>
			<Tab tabId="test" panelId="test" mode="accordion" text="test1">
				Test Tab1
			</Tab>
		</Tabcordion>
	</>
);

overridesTest({
	name: 'tabcordion',
	overrides: [
		'Tabcordion',
		'TabBtn',
		'TabRow',
		'Item',
		'AccordionBtn',
		'AccordionIcon',
		'Panel',
		'PanelBody',
	],
	Component: (props: TabcordionProps) => <SimpleTabCordion {...props} />,
});

// another default test to check that the component errors when outside of GEL and renders when inside
nestingTest({
	name: 'tabcordion',
	Component: (props: TabcordionProps) => <Tabcordion {...props} />,
});

// Component specific tests
describe('TabCordion component', () => {
	const WBCTabCordion = (props: TabcordionProps) => (
		<GEL brand={wbc}>
			<Tabcordion {...props} />
		</GEL>
	);

	it('renders TabCordion with default props', () => {
		const defaultProps: TabcordionProps = {
			mode: 'responsive',
			look: 'soft',
			justify: false,
			openTab: 0,
			children: [],
		};
		const { container } = render(<WBCTabCordion {...defaultProps} />);
		expect(container).toBeInTheDocument();
	});

	// 	test('throw the error if child component is not wrapped by parent component', () => {
	// 		const Wrapper = () => (
	// 			<GEL brand={wbc}>
	// 				<Caption data-testid="test-component" />
	// 			</GEL>
	// 		);
	// 		render(<Wrapper />, { wrapper: ErrorBoundary });
	// 		expect(
	// 			screen.queryByText(/Table sub-components should be wrapped in a <Table>./i)
	// 		).toBeInTheDocument();
	// 	});

	// 	test('should render bordered style table when bordered property is passed in props', () => {
	// 		const { container } = render(<SimpleTable bordered />);
	// 		expect(container).toBeInTheDocument();
	// 	});

	// 	test('should render striped style table when striped property is passed in props', () => {
	// 		const { container } = render(<SimpleTable striped />);
	// 		expect(container).toBeInTheDocument();
	// 	});

	// 	test('should render striped & bordered table when striped and bordered property is passed in props', () => {
	// 		const { container } = render(<SimpleTable bordered striped />);
	// 		expect(container).toBeInTheDocument();
	// 	});

	// 	test('should render children inside Table', () => {
	// 		const { getByTestId } = render(
	// 			<SimpleTable>
	// 				<Caption data-testid="test-child">Test Caption</Caption>
	// 			</SimpleTable>
	// 		);
	// 		expect(getByTestId('test-child')).toBeInTheDocument();
	// 	});

	// 	test('should render backgroundColor: #efe8ed if you overrides styles', () => {
	// 		const props: TableProps = {
	// 			overrides: {
	// 				Table: {
	// 					styles: (styles: any) => ({
	// 						...styles,
	// 						backgroundColor: '#efe8ed',
	// 					}),
	// 				},
	// 			},
	// 		};
	// 		const { container, getByTestId } = render(<SimpleTable {...props}>Test</SimpleTable>);
	// 		expect(container).toBeInTheDocument();
	// 		expect(getByTestId('test-table')).toHaveStyle('backgroundColor: efe8ed');
	// 	});

	// 	test('should render table with blender overrides', () => {
	// 		const overridesObj = {
	// 			Table: {
	// 				component: blenderTable.component,
	// 				styles: () => blenderTable.styles(null, { striped: false, bordered: false }),
	// 				attributes: () => blenderTable.attributes,
	// 			},
	// 			Tr: {
	// 				component: blenderTr.component,
	// 				styles: () => blenderTr.styles(null, { highlighted: false }),
	// 				attributes: () => blenderTr.attributes,
	// 			},
	// 			Td: {
	// 				component: blenderTd.component,
	// 				styles: () => blenderTd.styles(null, { highlighted: false, highlightStart: false }),
	// 				attributes: () => blenderTd.attributes,
	// 			},
	// 		};
	// 		const { container } = render(
	// 			<SimpleTable overrides={overridesObj}>
	// 				<Tbody>
	// 					<Tr>
	// 						<Td></Td>
	// 					</Tr>
	// 				</Tbody>
	// 			</SimpleTable>
	// 		);
	// 		expect(container).toBeInTheDocument();
	// 	});
});
