import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import { List, Item } from '@westpac/list';
import { AppleIcon } from '@westpac/icon';
import wbc from '@westpac/wbc';

import { overridesTest } from '../../../../helpers/tests/overrides-test';
import { nestingTest } from '../../../../helpers/tests/nesting-test';
import { ItemProps } from '../../src/Item';

overridesTest({
	name: 'list',
	overrides: ['Item', 'Content'],
	Component: (props: ItemProps) => (
		<List {...props}>
			<Item>item1</Item>
		</List>
	),
});

overridesTest({
	name: 'list',
	overrides: ['Item', 'Icon'],
	Component: (props: ItemProps) => (
		<List {...props}>
			<Item
				type="icon"
				icon={() => {
					<AppleIcon copyrightYear="2020" />;
				}}
			>
				item1
			</Item>
		</List>
	),
});

nestingTest({
	name: 'list',
	Component: (props: ItemProps) => (
		<List {...props}>
			<Item>item1</Item>
		</List>
	),
});

describe('Item component', () => {
	const WBCItem = () => (
		<GEL brand={wbc}>
			<List>
				<Item>item1</Item>
				<Item>item2</Item>
				<Item>item3</Item>
			</List>
		</GEL>
	);

	it('renders Item correctly', () => {
		const { container, getByText } = render(<WBCItem />);
		expect(container).toBeInTheDocument();
		expect(getByText(/item1/i)).toBeInTheDocument();
		expect(getByText(/item2/i)).toBeInTheDocument();
		expect(getByText(/item3/i)).toBeInTheDocument();
	});
});
