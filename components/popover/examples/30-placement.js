import { GEL, jsx } from '@westpac/core';
import { Popover } from '@westpac/popover';

const content =
	'Hello vivamus sagittis lacus vel augue laoreet rutrum faucibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
	'Nesciunt laboriosam, mollitia magnam ad magni consequuntur hic et quos optio corrupti praesentium veniam aspernatur minima aperiam ut quas, ' +
	'possimus non architecto. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut animi velit in? Suscipit nostrum itaque voluptatibus ' +
	'dolorem qui soluta nobis modi officia incidunt eos dolores atque, unde error delectus officiis.';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Popover content={content} placement="top">
				Popover open top
			</Popover>{' '}
			<Popover content={content} placement="bottom">
				Popover open bottom
			</Popover>
		</GEL>
	);
}

export default Example;
