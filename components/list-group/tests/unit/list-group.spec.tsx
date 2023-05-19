import { GEL } from '@westpac/core';
import { render, screen } from '@testing-library/react';
import { ListGroup, Item } from '@westpac/list-group';
import { ButtonGroup, Item as BtnGroupItem } from '@westpac/button-group';
import wbc from '@westpac/wbc';
import { overridesTest } from '../../../../helpers/tests/overrides-test';
import { nestingTest } from '../../../../helpers/tests/nesting-test';
import { ListGroupProps } from '../../src/ListGroup';
import { ErrorBoundary } from '../../../../helpers/tests/error-boundary.js';

overridesTest({
	name: 'list-group',
	//TODO: OverridesTest picks Item from List not ListGroup
	overrides: ['ListGroup'],
	Component: (props: ListGroupProps) => <ListGroup {...props}></ListGroup>,
});

nestingTest({
	name: 'list-group',
	Component: (props: ListGroupProps) => (
		<ListGroup {...props}>
			<Item>item 1</Item>{' '}
		</ListGroup>
	),
});

// Component specific tests
describe('List Group component', () => {
	const SimpleListGroup = () => (
		<GEL brand={wbc}>
			<ListGroup>
				<Item>List item 1</Item>
				<Item>List item 2</Item>
				<Item>List item 3</Item>
				<Item>List item 4</Item>
			</ListGroup>
		</GEL>
	);

	it('throws the error if child component is not wrapped by parent component', () => {
		const Wrapper = () => (
			<GEL brand={wbc}>
				<Item data-testid="test-component">item 1</Item>
			</GEL>
		);
		render(<Wrapper />, { wrapper: ErrorBoundary });
		expect(
			screen.queryByText(/components should be wrapped in a <ListGroup>./i)
		).toBeInTheDocument();
	});

	it('renders List Group', () => {
		const { container } = render(<SimpleListGroup />);
		expect(container).toBeInTheDocument();
	});

	it('renders List Group with driven data props', () => {
		const SimpleListGroupWithData = (props: ListGroupProps) => (
			<GEL brand={wbc}>
				<ListGroup {...props} />
			</GEL>
		);

		const props: ListGroupProps = {
			data: [
				'List item 1',
				'list item 2',
				'list item 3',
				<>
					{' '}
					Send me sms reminders
					<ButtonGroup size="small" name="example-default-1" css={undefined}>
						<BtnGroupItem data-testid="button1" value="yes">
							Yes
						</BtnGroupItem>
						<BtnGroupItem data-testid="button2" value="no">
							No
						</BtnGroupItem>
					</ButtonGroup>
				</>,
			],
		};
		const { getByText, getByTestId } = render(<SimpleListGroupWithData {...props} />);
		expect(getByText(/List item 1/i)).toBeInTheDocument();
		expect(getByText(/List item 2/i)).toBeInTheDocument();
		expect(getByText(/List item 3/i)).toBeInTheDocument();
		expect(getByTestId(/button1/i)).toBeInTheDocument();
		expect(getByTestId(/button2/i)).toBeInTheDocument();
	});
});
