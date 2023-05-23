import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';
import { Pagination, Page } from '@westpac/pagination';
import wbc from '@westpac/wbc';
import { PageProps } from '../../src/Page';

overridesTest({
	name: 'pagination',
	overrides: ['Pagination', 'Page', 'Link'],
	Component: (props: PageProps) => (
		<Pagination current={1} {...props}>
			<Page />
		</Pagination>
	),
});

nestingTest({
	name: 'pagination',
	Component: (props: PageProps) => (
		<Pagination current={1} {...props}>
			<Page />
		</Pagination>
	),
});

// Page specific tests
describe('Page component', () => {
	const SimplePage = () => (
		<GEL brand={wbc}>
			<Pagination current={1}>
				<Page text="page1" />
				<Page text="page2" />
				<Page text="page3" />
			</Pagination>
		</GEL>
	);

	it('renders Page correctly', () => {
		const { container } = render(<SimplePage />);
		expect(container).toBeInTheDocument();
	});
});
