import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import { ListGroup, Item } from '@westpac/list-group';
import wbc from '@westpac/wbc';
import { overridesTest } from '../../../../helpers/tests/overrides-test';
import { nestingTest } from '../../../../helpers/tests/nesting-test';
import { ItemProps } from '../../src/Item';

overridesTest({
	name: 'list-group',
	overrides: ['Item'],
	Component: (props: ItemProps) => (
		<ListGroup>
			<Item {...props} />
		</ListGroup>
	),
});

nestingTest({
	name: 'list-group',
	Component: (props: ItemProps) => (
		<ListGroup>
			<Item {...props} />
		</ListGroup>
	),
});

describe('Item Component', () => {
	const SimpleItem = () => (
		<GEL brand={wbc}>
			<ListGroup>
				<Item>List item 1</Item>
				<Item>List item 2</Item>
				<Item>List item 3</Item>
			</ListGroup>
		</GEL>
	);

	it('renders Item', () => {
		const { container, getByText } = render(<SimpleItem />);
		expect(container).toBeInTheDocument();
		expect(getByText(/List item 1/i)).toBeInTheDocument();
		expect(getByText(/List item 2/i)).toBeInTheDocument();
		expect(getByText(/List item 3/i)).toBeInTheDocument();
	});
});
