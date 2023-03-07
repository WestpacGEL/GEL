import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import { Collapsible } from '@westpac/collapsible';
import { Body } from '@westpac/body';
import wbc from '@westpac/wbc';

// Component specific tests
describe('Collapsible component', () => {
	const ExampleContent = () => (
		<Body>
			<p>
				Hello vivamus sagittis lacus vel augue laoreet rutrum faucibus. Lorem ipsum dolor sit amet,
				consectetur adipisicing elit.{' '}
			</p>
			<p>
				Nesciunt laboriosam, mollitia magnam ad magni consequuntur hic et quos optio corrupti
				praesentium veniam aspernatur minima aperiam ut quas, possimus non architecto. Lorem ipsum
				dolor sit amet, consectetur adipisicing elit. Aut animi velit in? Suscipit nostrum itaque
				voluptatibus dolorem qui soluta nobis modi officia incidunt eos dolores atque, unde error
				delectus officiis.
			</p>
		</Body>
	);
	const SimpleCollapsible = () => (
		<GEL brand={wbc}>
			<Collapsible data-cy="small-collapsible" text="Toggle collapsible" size="small">
				<ExampleContent />
			</Collapsible>
		</GEL>
	);

	test('It should render Simple Collapsible', () => {
		const { container } = render(<SimpleCollapsible />);
		expect(container).toBeInTheDocument();
	});
});
