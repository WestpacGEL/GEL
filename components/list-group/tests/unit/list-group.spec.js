import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import { ListGroup, Item } from '@westpac/list-group';
import wbc from '@westpac/wbc';

// Component specific tests
describe('List Group component', () => {
	const SimpleInputGroup = () => (
		<GEL brand={wbc}>
			<ListGroup>
				<Item>List item 1</Item>
				<Item>List item 2</Item>
				<Item>List item 3</Item>
				<Item>List item 4</Item>
			</ListGroup>
		</GEL>
	);

	test('It should render List Group', () => {
		render(<SimpleInputGroup />);
	});
});
