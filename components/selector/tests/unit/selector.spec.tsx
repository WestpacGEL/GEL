import { GEL } from '@westpac/core';
import { fireEvent, render } from '@testing-library/react';
import { Selector, Option } from '@westpac/selector';
import wbc from '@westpac/wbc';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';
import { AccessibilityIcon } from '@westpac/icon';
import { AccessibilityPictogram } from '@westpac/pictogram';
import { SelectorProps } from '../../src/Selector.js';
import { blenderPictogram } from '../../src/overrides/pictogram.js';
import { blenderIcon } from '../../src/overrides/icon.js';
import { blenderIndicatorNext } from '../../src/overrides/indicatorNext.js';

// NOTE: having trouble inluding OptionBtn as part of the overrides for this
overridesTest({
	name: 'selector',
	overrides: [
		'Selector',
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
	// using any for props as type needs to be specified for tests
	Component: (props: any) => (
		<>
			<Selector type="radio" {...props}>
				<Option value="1" hint="hint test" secondaryLabel="secondary label test">
					Here is a label
				</Option>
				<Option value="2">Here is a label</Option>
				<Option value="3">Here is a label</Option>
			</Selector>
			<Selector type="link" pictogramHeight={10} {...props}>
				<Option
					value="1"
					pictogram={() => {
						<AccessibilityPictogram copyrightYear="2020" mode="light" />;
					}}
				>
					Here is a label
				</Option>
				<Option
					value="2"
					icon={() => {
						<AccessibilityIcon copyrightYear="2020" />;
					}}
				>
					Here is a label
				</Option>
				<Option value="3">Here is a label</Option>
			</Selector>
		</>
	),
});

nestingTest({
	name: 'selector',
	Component: (props: SelectorProps) => <Selector {...props}>{props.children}</Selector>,
});

const SimpleSelector = (props: SelectorProps) => (
	<GEL brand={wbc}>
		<Selector {...props}>
			<Option value="1" data-testid="opt1">
				option 1
			</Option>
			<Option value="2" data-testid="opt2">
				option 2
			</Option>
			<Option value="3" data-testid="opt3">
				option 3
			</Option>
		</Selector>
	</GEL>
);

const SimpleSelectorNoOptions = (props: SelectorProps) => (
	<GEL brand={wbc}>
		<Selector {...props}>{props.children}</Selector>
	</GEL>
);

// Component specific tests
describe('Selector component', () => {
	test('It should render Simple Selector as radio', () => {
		const { container } = render(<SimpleSelector type="radio" />);

		expect(container).toBeInTheDocument();
	});

	test('should render with correct defaultValue when defaultValue prop passed', () => {
		const { getByTestId } = render(<SimpleSelector type="radio" defaultValue="2" />);

		expect(getByTestId('opt1')).not.toBeChecked();
		expect(getByTestId('opt2')).toBeChecked();
		expect(getByTestId('opt3')).not.toBeChecked();
	});

	test('should render with correct defaultValue when value prop passed', () => {
		const { getByTestId } = render(<SimpleSelector type="radio" value="2" />);

		expect(getByTestId('opt1')).not.toBeChecked();
		expect(getByTestId('opt2')).toBeChecked();
		expect(getByTestId('opt3')).not.toBeChecked();
	});

	test('should select correct option when clicked', () => {
		const { getByTestId } = render(<SimpleSelector type="radio" />);
		const optionOne = getByTestId('opt1');
		const optionTwo = getByTestId('opt2');

		expect(optionOne).not.toBeChecked();
		fireEvent.click(optionOne);
		expect(optionOne).toBeChecked();
		fireEvent.click(optionTwo);
		expect(optionOne).not.toBeChecked();
		expect(optionTwo).toBeChecked();
	});

	test('should options should be disabled if disabled prop is passed', () => {
		const { getByTestId } = render(<SimpleSelector disabled type="checkbox" />);

		expect(getByTestId('opt1')).toBeDisabled();
		expect(getByTestId('opt2')).toBeDisabled();
		expect(getByTestId('opt3')).toBeDisabled();
	});

	test('should work as intened if type is button', () => {
		const handleChange = jest.fn(() => {});
		const { getByText } = render(<SimpleSelector onChange={handleChange} type="button" />);

		fireEvent.click(getByText(/option 1/));
		expect(handleChange).toBeCalledTimes(1);
	});

	test('should be able to select multiple options if type is checkbox', () => {
		const { getByTestId } = render(<SimpleSelector type="checkbox" />);
		const optionOne = getByTestId('opt1');
		const optionTwo = getByTestId('opt2');
		const optionThree = getByTestId('opt3');

		expect(optionOne).not.toBeChecked();
		expect(optionTwo).not.toBeChecked();
		expect(optionThree).not.toBeChecked();
		fireEvent.click(optionOne);
		fireEvent.click(optionTwo);
		expect(optionOne).toBeChecked();
		expect(optionTwo).toBeChecked();
		expect(optionThree).not.toBeChecked();
	});

	test('should update selections correctly when unchecking a checked checkbox', () => {
		const { getByTestId } = render(
			<SimpleSelector type="checkbox" defaultValue={['1', '2', '3']} />
		);
		const optionOne = getByTestId('opt1');
		const optionTwo = getByTestId('opt2');
		const optionThree = getByTestId('opt3');

		expect(optionOne).toBeChecked();
		expect(optionTwo).toBeChecked();
		expect(optionThree).toBeChecked();
		fireEvent.click(optionOne);
		fireEvent.click(optionTwo);
		expect(optionOne).not.toBeChecked();
		expect(optionTwo).not.toBeChecked();
		expect(optionThree).toBeChecked();
	});

	test('should render options with hints when passed in through data prop', () => {
		const testData = [
			{ value: '1', text: 'test text 1', hint: 'test hint' },
			{ value: '2', text: 'test text 2' },
			{ value: '3', text: 'test text 3' },
		];
		const { getByText } = render(<SimpleSelectorNoOptions type="radio" data={testData} />);

		expect(getByText(/test text 1/)).toBeInTheDocument();
		expect(getByText(/test text 2/)).toBeInTheDocument();
		expect(getByText(/test text 3/)).toBeInTheDocument();
		expect(getByText(/test hint/)).toBeInTheDocument();
	});

	test('should call function passed in through onChange prop when option selected', () => {
		const handleChange = jest.fn(() => {});
		const { getByTestId } = render(<SimpleSelector type="radio" onChange={handleChange} />);

		fireEvent.click(getByTestId('opt1'));
		expect(handleChange).toBeCalledTimes(1);
	});

	// Testing blender overrides
	test('should render with various blender overrides', () => {
		const overridesObj = {
			IndicatorNext: {
				component: blenderIndicatorNext.component,
			},
			Pictogram: {
				component: blenderPictogram.component,
			},
			Icon: {
				attributes: () => blenderIcon.attributes(null, { iconSize: 'small' }),
			},
		};

		const { container } = render(
			<SimpleSelectorNoOptions type="link" overrides={overridesObj}>
				<Option
					value="1"
					pictogram={() => {
						<AccessibilityPictogram copyrightYear="2020" mode="light" />;
					}}
				>
					Here is a label
				</Option>
				<Option
					value="2"
					icon={() => {
						<AccessibilityIcon copyrightYear="2020" />;
					}}
				>
					Here is a label
				</Option>
				<Option value="3">Here is a label</Option>
			</SimpleSelectorNoOptions>
		);
		expect(container).toBeInTheDocument();
	});
});
