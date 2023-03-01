import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import { Sidebar } from '@westpac/sidebar';
import wbc from '@westpac/wbc';

// Component specific tests
describe('Sidebar component', () => {
	const SimpleSidebar = () => (
		<GEL brand={wbc}>
			<Sidebar heading="Sidebar heading" contentHeading="Sidebar content heading">
				<p>Sidebar content</p>
			</Sidebar>
		</GEL>
	);

	test('It should render Simple Selector', () => {
		const { container } = render(<SimpleSidebar />);
		expect(container).toBeInTheDocument();
	});
});
