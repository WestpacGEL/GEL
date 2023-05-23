import { GEL } from '@westpac/core';
import { render, screen } from '@testing-library/react';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';
import { Pagination, Page } from '@westpac/pagination';
import wbc from '@westpac/wbc';
import { PaginationProps } from '../../src/Pagination';
import userEvent from '@testing-library/user-event';
import { blenderLink } from '../../src/overrides/link';
import { ErrorBoundary } from '../../../../helpers/tests/error-boundary.js';

overridesTest({
	name: 'pagination',
	overrides: ['Pagination', 'List', 'Page', 'Link'],
	Component: (props: PaginationProps) => (
		<Pagination {...props}>
			<Page text="1" onClick={() => console.log('page 1')} />
			<Page text="2" onClick={() => console.log('page 2')} />
		</Pagination>
	),
});

nestingTest({
	name: 'pagination',
	Component: (props: PaginationProps) => <Pagination {...props} />,
});

// Pagination specific tests
describe('Pagination component', () => {
	const handleClick = jest.fn(() => {});
	const SimplePagination = (props: PaginationProps) => (
		<GEL brand={wbc}>
			<Pagination
				infinite
				back={{
					visible: true,
					text: 'Go back',
					onClick: () => {
						handleClick;
					},
					assistiveText: () => `Go back to previous page`,
				}}
				next={{
					visible: true,
					text: 'Go forth',
					onClick: () => {
						handleClick;
					},
					assistiveText: () => `Go forth to next page`,
				}}
				{...props}
			>
				<Page text="page1" onClick={handleClick} />
				<Page text="page2" onClick={handleClick} />
				<Page text="page3" onClick={handleClick} />
			</Pagination>
		</GEL>
	);

	it('renders Pagination correctly', () => {
		const { container, getByLabelText } = render(<SimplePagination current={2} />);
		expect(container).toBeInTheDocument();
		expect(getByLabelText(/Go back to previous page/i)).toBeInTheDocument();
		expect(getByLabelText(/Go forth to next page/i)).toBeInTheDocument();
	});

	it('calls onClick handler when clicked', async () => {
		const { getByText } = render(<SimplePagination current={2} />);
		await userEvent.click(getByText(/page1/i));
		await userEvent.click(getByText(/page2/i));
		await userEvent.click(getByText(/page3/i));
		await userEvent.click(getByText(/Go back/i));
		await userEvent.click(getByText(/Go forth/i));
		expect(handleClick).toHaveBeenCalledTimes(5);
	});

	it('calls onClick handler when clicked with infinite and current page is 0 index', async () => {
		const { getByText } = render(<SimplePagination current={0} />);
		await userEvent.click(getByText(/Go back/i));
		await userEvent.click(getByText(/Go forth/i));
		expect(handleClick).toHaveBeenCalledTimes(7);
	});

	it('throws the error if child component is not wrapped by parent component', () => {
		const Wrapper = () => (
			<GEL brand={wbc}>
				<Page />
			</GEL>
		);
		render(<Wrapper />, { wrapper: ErrorBoundary });
		expect(
			screen.queryByText(/components should be wrapped in a <Pagination>./i)
		).toBeInTheDocument();
	});

	it('should render Pagination with blender overrides', () => {
		const overridesObj = {
			Link: {
				component: blenderLink.component,
				styles: () =>
					blenderLink.styles(null, { active: false, first: false, last: false, disabled: false }),
				attributes: () => blenderLink.attributes,
			},
		};
		const { container } = render(
			<GEL brand={wbc}>
				<Pagination current={1} overrides={overridesObj}>
					<Page text="1" onClick={() => console.log('page 1')} />
					<Page text="2" onClick={() => console.log('page 2')} />
				</Pagination>
			</GEL>
		);
		expect(container).toBeInTheDocument();
	});
});
