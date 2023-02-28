import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import { Popover } from '@westpac/popover';
import wbc from '@westpac/wbc';
const content =
	'Hello vivamus sagittis lacus vel augue laoreet rutrum faucibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
	'Nesciunt laboriosam, mollitia magnam ad magni consequuntur hic et quos optio corrupti praesentium veniam aspernatur minima aperiam ut quas, ' +
	'possimus non architecto. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut animi velit in? Suscipit nostrum itaque voluptatibus ' +
	'dolorem qui soluta nobis modi officia incidunt eos dolores atque, unde error delectus officiis.';

// Popover specific tests
describe('Popover component', () => {
	const SimplePopover = () => (
		<GEL brand={wbc}>
			<Popover heading="Popover heading" content={content}>
				Popover with heading
			</Popover>
		</GEL>
	);

	test('It should render Popover', () => {
		render(<SimplePopover />);
	});
});
