/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Collapsible } from '@westpac/collapsible';

const content =
	'Hello vivamus sagittis lacus vel augue laoreet rutrum faucibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
	'Nesciunt laboriosam, mollitia magnam ad magni consequuntur hic et quos optio corrupti praesentium veniam aspernatur minima aperiam ut quas, ' +
	'possimus non architecto. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut animi velit in? Suscipit nostrum itaque voluptatibus ' +
	'dolorem qui soluta nobis modi officia incidunt eos dolores atque, unde error delectus officiis.';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Default</h2>
			<Collapsible text="Toggle collapsible" open={true}>
				{content}
			</Collapsible>

			<hr />

			<h2>Sizes</h2>

			<h3>Small</h3>
			<Collapsible text="Toggle collapsible" size="small" open={true}>
				{content}
			</Collapsible>

			<h3>Medium</h3>
			<Collapsible text="Toggle collapsible" size="medium" open={true}>
				{content}
			</Collapsible>

			<h3>Large</h3>
			<Collapsible text="Toggle collapsible" size="large" open={true}>
				{content}
			</Collapsible>

			<h3>Xlarge</h3>
			<Collapsible text="Toggle collapsible" size="xlarge" open={true}>
				{content}
			</Collapsible>
		</GEL>
	);
}

export default Example;
