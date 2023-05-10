import { Caption, Table, Tbody } from '@westpac/table';
import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';
import { CaptionProps } from '../../src/Caption';
import wbc from '@westpac/wbc';

// TODO: Fix overridesTest function to work with table
// There is no overridesTest function for the various table components due to how the overridesTest works,
// creating warnings relating to unexpected <div> as children/parents

nestingTest({
	name: 'table',
	Component: (props: CaptionProps) => (
		<Table>
			<Caption {...props} />
		</Table>
	),
});

const SimpleCaption = (props: CaptionProps) => (
	<GEL brand={wbc}>
		<Table>
			<Caption data-testid="test-caption" {...props}>
				{props.children}
			</Caption>
		</Table>
	</GEL>
);

describe('Caption component', () => {
	test('should render Caption with defaul props', () => {
		const { container } = render(<SimpleCaption />);
		expect(container).toBeInTheDocument();
	});

	test('should render children inside caption', () => {
		const { getByText } = render(<SimpleCaption>This is test caption</SimpleCaption>);
		expect(getByText(/This is test caption/)).toBeInTheDocument();
	});

	test('should render color DodgerBlue if you override styles', () => {
		const props: CaptionProps = {
			overrides: {
				Caption: {
					styles: (styles: any) => ({
						...styles,
						color: 'DodgerBlue',
					}),
				},
			},
		};
		const { container, getByTestId } = render(<SimpleCaption {...props}>Test</SimpleCaption>);
		expect(container).toBeInTheDocument();
		expect(getByTestId('test-caption')).toHaveStyle('color: DodgerBlue');
	});
});
