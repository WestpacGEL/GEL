import { GEL } from '@westpac/core';
import { fireEvent, render, screen } from '@testing-library/react';
import { Selector, Option } from '@westpac/selector';
import wbc from '@westpac/wbc';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';
import { AccessibilityIcon } from '@westpac/icon';
import { AccessibilityPictogram } from '@westpac/pictogram';
import { OptionProps } from '../../src/Option.js';

// NOTE: having trouble inluding OptionBtn as part of the overrides for this
overridesTest({
	name: 'selector',
	overrides: [
		'Option',
		'Pictogram',
		'Icon',
		'Text',
		'Label',
		'LabelSecondary',
		'Hint',
		'IndicatorCheck',
		'IndicatorNext',
	],
	Component: (props: any) => (
		<>
			<Option value="1" hint="hint test" secondaryLabel="secondary label test" {...props}>
				Here is a label
			</Option>
			<Option
				value="1"
				pictogram={() => {
					<AccessibilityPictogram copyrightYear="2020" mode="light" />;
				}}
				disabled
				{...props}
			>
				Here is a label
			</Option>
			<Option
				value="2"
				icon={() => {
					<AccessibilityIcon copyrightYear="2020" />;
				}}
				{...props}
			>
				Here is a label
			</Option>
			<Option value="3" href="test" {...props}>
				Here is a label
			</Option>
		</>
	),
});

nestingTest({
	name: 'selector',
	Component: (props: OptionProps) => <Option {...props}>{props.children}</Option>,
});

const SimpleOption = (props: OptionProps) => (
	<GEL brand={wbc}>
		<Option {...props} data-testid="test-option">
			{props.children}
		</Option>
	</GEL>
);

describe('Option component', () => {
	test('should render Simple Option', () => {
		const { container } = render(<SimpleOption>Test option</SimpleOption>);

		expect(container).toBeInTheDocument();
	});

	test('should render option with hint', () => {
		const { getByText } = render(<SimpleOption hint="test hint">Test option</SimpleOption>);
		expect(getByText(/test hint/)).toBeInTheDocument();
	});

	test('should render option with secondaryLabel', () => {
		const { getByText } = render(
			<SimpleOption secondaryLabel="test secondary label">Test option</SimpleOption>
		);

		expect(getByText(/test secondary label/)).toBeInTheDocument();
	});

	test('should change type to link if href prop passed', () => {
		const { getByRole } = render(<SimpleOption href="test">Test option</SimpleOption>);

		expect(getByRole('link', { current: false })).toBeInTheDocument();
	});

	test('should be disabled if disable prop is passed', () => {
		const { getByTestId } = render(<SimpleOption disabled>Test option</SimpleOption>);

		expect(getByTestId('test-option')).toBeDisabled();
	});

	test('should add id attribute to hint if type is checkbox or radio', () => {
		const { getByText } = render(
			<>
				<SimpleOption type="radio" hint="test radio hint">
					{' '}
					option{' '}
				</SimpleOption>
				<SimpleOption type="checkbox" hint="test checkbox hint">
					{' '}
					option{' '}
				</SimpleOption>
				<SimpleOption href="test" hint="test link hint">
					{' '}
					option{' '}
				</SimpleOption>
			</>
		);

		expect(getByText(/test radio hint/)).toHaveAttribute('id');
		expect(getByText(/test checkbox hint/)).toHaveAttribute('id');
		expect(getByText(/test link hint/)).not.toHaveAttribute('id');
	});
});
