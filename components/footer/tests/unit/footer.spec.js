import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import { Footer } from '@westpac/footer';
import wbc from '@westpac/wbc';

// Component specific tests
describe('Footer component', () => {
	const SimpleContent = () => <h1>Just a title</h1>;
	const SimpleFooter = () => (
		<GEL brand={wbc}>
			<Footer>
				<SimpleContent />
			</Footer>
		</GEL>
	);

	test('It should render Footer', () => {
		render(<SimpleFooter />);
	});
});
