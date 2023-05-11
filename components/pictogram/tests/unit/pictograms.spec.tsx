import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import wbc from '@westpac/wbc';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';
import * as pictograms from '@westpac/pictogram';
import { Pictogram, PictogramProps } from '../../src/Pictogram.tsx';

overridesTest({
	name: 'pictogram',
	overrides: ['Pictogram'],
	Component: (props: any) => <Pictogram copyrightYear="2023" {...props} />,
});

nestingTest({
	name: 'pictogram',
	Component: (props: any) => <Pictogram {...props} />,
});

function SimplePictogram(props: PictogramProps) {
	return (
		<GEL brand={wbc}>
			<Pictogram data-testid="test-pictogram" {...props} />
		</GEL>
	);
}

describe('Pictogram components', () => {
	test('should render base Pictogram component', () => {
		const { container } = render(<SimplePictogram copyrightYear="2020" />);
		expect(container).toBeInTheDocument();
	});
	// Tests every Pictogram in the library to see if it renders correctly
	for (let [key, val] of Object.entries(pictograms)) {
		// need to create new variable with expected typing and check if val is function for TS
		let typedVal: Function;
		if (typeof val === 'function') {
			typedVal = val;
		}
		test(`should render ${key} with testing prop options`, () => {
			const TestPictogram = (props: PictogramProps) => {
				return typedVal({ ...props });
			};
			const DefaultTestPictogram = () => {
				return typedVal({} as PictogramProps);
			};
			const { container } = render(
				<GEL brand={wbc}>
					<TestPictogram copyrightYear="2020" mode={{ highlight: '#fff', outline: '#fff' }} />
					<TestPictogram copyrightYear="2020" mode={{ highlight: '', outline: '#fff' }} />
					<TestPictogram copyrightYear="2020" mode={{ highlight: '#fff', outline: '' }} />
					<DefaultTestPictogram />
				</GEL>
			);
			expect(container).toBeInTheDocument();
		});
	}

	test('should render Pictogram with correct height and width when width passed in', () => {
		const { getByTestId } = render(
			<SimplePictogram
				width={[100, 150]}
				viewBoxWidth={200} // need to include both viewBoxWidth and viewBoxHeight for it to calculate height correctly
				viewBoxHeight={200}
				copyrightYear="2020"
			/>
		);
		const testPicto = getByTestId('test-pictogram');
		expect(testPicto).toHaveStyle('width: 100px');
		expect(testPicto).toHaveStyle('height: 100px');
	});
});
