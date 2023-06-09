import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import { List, Item } from '@westpac/list';
import { AppleIcon } from '@westpac/icon';
import wbc from '@westpac/wbc';
import { blenderList } from '../../src/overrides/list';
import { blenderIcon } from '../../src/overrides/icon';
import { overridesTest } from '../../../../helpers/tests/overrides-test';
import { nestingTest } from '../../../../helpers/tests/nesting-test';
import { ListProps } from '../../src/List';

const SimpleList = (props: ListProps) => (
	<List {...props}>
		<Item>item1</Item>
		<Item>item2</Item>
		<Item>item3</Item>
	</List>
);

const SimpleListWithIcon = (props: ListProps) => (
	<List
		type="icon"
		icon={() => {
			<AppleIcon copyrightYear="2020" />;
		}}
		{...props}
	>
		<Item>item1</Item>
		<Item>item2</Item>
		<Item>item3</Item>
	</List>
);

overridesTest({
	name: 'list',
	overrides: ['List', 'Item', 'Content'],
	Component: (props: ListProps) => <SimpleList {...props} />,
});

overridesTest({
	name: 'list',
	overrides: ['Icon'],
	Component: (props: ListProps) => <SimpleListWithIcon {...props} />,
});

nestingTest({
	name: 'list',
	Component: (props: ListProps) => <SimpleList {...props} />,
});

describe('List component', () => {
	const WBCList = (props: ListProps) => (
		<GEL brand={wbc}>
			<List {...props} />
		</GEL>
	);

	it('renders List with default props', () => {
		const { container } = render(<WBCList />);
		expect(container).toBeInTheDocument();
	});

	it('renders List correctly', () => {
		const defaultProps: ListProps = {
			assistiveText: 'Test Assistive Text',
			type: 'tick',
			look: 'hero',
			spacing: 'large',
			data: [
				<>
					<Item>item1</Item>
					<Item>item2</Item>
					<Item>item3</Item>
				</>,
			],
		};
		const { getByText, getByLabelText } = render(<WBCList {...defaultProps} />);
		expect(getByLabelText(/Test Assistive Text/i)).toBeInTheDocument();
		expect(getByText(/item1/i)).toBeInTheDocument();
		expect(getByText(/item2/i)).toBeInTheDocument();
		expect(getByText(/item3/i)).toBeInTheDocument();
	});

	it('renders nested List correctly', () => {
		const WBCNestedList = () => (
			<GEL brand={wbc}>
				<List
					data={[
						'item1',
						{
							text: 'item2',
							type: 'icon',
							icon: AppleIcon,
						},
						'item3',
						[
							'nested item 1',
							'nested item 2',
							'nested item 3',
							{
								type: 'icon',
								icon: AppleIcon,
								items: ['test icon'],
							},
						],
					]}
				/>
			</GEL>
		);

		const { getByText } = render(<WBCNestedList />);
		expect(getByText(/item1/i)).toBeInTheDocument();
		expect(getByText(/item2/i)).toBeInTheDocument();
		expect(getByText(/item3/i)).toBeInTheDocument();
		expect(getByText(/nested item 1/i)).toBeInTheDocument();
		expect(getByText(/nested item 2/i)).toBeInTheDocument();
		expect(getByText(/nested item 3/i)).toBeInTheDocument();
		expect(getByText(/test icon/i)).toBeInTheDocument();
	});

	it('renders list with blender overrides', () => {
		const overridesObj = {
			List: {
				component: blenderList.component,
				styles: () => blenderList.styles(null, { type: 'bullet', look: 'hero', spacing: 'large' }),
				attributes: () => blenderList.attributes,
			},
		};
		const { container } = render(<WBCList overrides={overridesObj} />);
		expect(container).toBeInTheDocument();
	});

	it('renders list with blender overrides with different styles', () => {
		const overridesObj = {
			List: {
				component: blenderList.component,
				styles: () =>
					blenderList.styles(null, { type: 'ordered', look: 'primary', spacing: 'large' }),
				attributes: () => blenderList.attributes,
			},
		};
		const { container } = render(<WBCList overrides={overridesObj} />);
		expect(container).toBeInTheDocument();
	});

	it('renders list with blender overrides with Icon', () => {
		const overridesObj = {
			Icon: {
				component: blenderIcon.component,
				styles: () => blenderIcon.styles,
				attributes: () => blenderIcon.attributes,
			},
		};
		const { container } = render(
			<WBCList
				type="icon"
				icon={() => {
					<AppleIcon copyrightYear="2020" />;
				}}
				overrides={overridesObj}
			>
				<Item>Test1</Item>
				<Item>Test2</Item>
			</WBCList>
		);
		expect(container).toBeInTheDocument();
	});
});
