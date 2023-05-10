import { Caption, Table, Tbody } from '@westpac/table';
import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';
import { CaptionProps } from '../../src/Caption';
import wbc from '@westpac/wbc';

// Todo: generic override function cause error for table component **fix override function for table component

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
