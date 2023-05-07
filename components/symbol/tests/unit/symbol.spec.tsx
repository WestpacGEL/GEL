import { GEL } from '@westpac/core';
import { render, screen } from '@testing-library/react';
import wbc from '@westpac/wbc';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';
import * as symbols from '@westpac/symbol';
import { Symbol } from '../../src/Symbol.js';
import { blenderSymbol } from '../../src/overrides/symbol.js';

overridesTest({
	name: 'symbol',
	overrides: ['Symbol'],
	Component: (props: any) => <Symbol copyrightYear="2020" align="center" {...props} />,
});

nestingTest({
	name: 'symbol',
	Component: (props: any) => <Symbol {...props} />,
});

// using any typing on props as symbol is not TS and does not have an interface
function SimpleSymbol(props: any) {
	return (
		<GEL brand={wbc}>
			<Symbol data-testid="test-symbol" {...props} />
		</GEL>
	);
}

describe('Symbol components', () => {
	// Tests every Symbol in the library to see if it renders correctly
	for (let [key, val] of Object.entries(symbols)) {
		// need to create new variable with expected typing and check if val is function for TS
		let typedVal: Function;
		if (typeof val === 'function') {
			typedVal = val;
		}
		test(`should render ${key} with default props`, () => {
			// using any typing on props as symbol is not TS and does not have an interface
			const TestSymbol = (props: any) => {
				return typedVal({
					align: props.align,
					copyrightYear: props.copyrightYear,
				});
			};
			const { container } = render(
				<GEL brand={wbc}>
					<TestSymbol />
				</GEL>
			);
			expect(container).toBeInTheDocument();
		});
	}

	test('should render base Symbol component', () => {
		const { container } = render(<SimpleSymbol />);
		expect(container).toBeInTheDocument();
	});

	test('should add transform attribute on added g child when align and offset props passed', () => {
		const { container } = render(<SimpleSymbol align="center" offset={[10, 10, 10]} />);
		const gTag = container.querySelector('g');
		expect(gTag).toHaveAttribute('transform', 'translate(10)');
	});

	test('should render base Symbol with blender overrides and modifier props', () => {
		const overridesObj = {
			Symbol: {
				component: blenderSymbol.component,
				styles: blenderSymbol.styles,
				attributes: blenderSymbol.attributes,
			},
		};
		const { container } = render(
			<>
				<SimpleSymbol overrides={overridesObj} />
				<SimpleSymbol overrides={overridesObj} width="100px" />
				<SimpleSymbol overrides={overridesObj} symbol="WBCLogo" />
			</>
		);
		expect(container).toBeInTheDocument();
	});
});
