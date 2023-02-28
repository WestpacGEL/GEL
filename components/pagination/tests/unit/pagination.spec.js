import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import { Pagination, Page } from '@westpac/pagination';
import wbc from '@westpac/wbc';

// Pagination specific tests
describe('Pagination component', () => {
	const SimplePagination = () => (
		<GEL brand={wbc}>
			<Pagination>
				<Page text="1" onClick={(event, page) => console.log(`Page ${page}`, event)} />
				<Page text="2" onClick={(event, page) => console.log(`Page ${page}`, event)} />
				<Page text="3" onClick={(event, page) => console.log(`Page ${page}`, event)} />
			</Pagination>
		</GEL>
	);

	test('It should render Pagination', () => {
		render(<SimplePagination />);
	});
});
