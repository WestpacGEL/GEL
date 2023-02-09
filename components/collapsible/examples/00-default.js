/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Collapsible } from '@westpac/collapsible';
import { Body } from '@westpac/body';

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

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Default</h2>
			<Collapsible data-cy="default-collapsible" text="Toggle collapsible">
				<ExampleContent />
			</Collapsible>

			<hr />

			<h2>Sizes</h2>

			<h3>Small</h3>
			<Collapsible data-cy="small-collapsible" text="Toggle collapsible" size="small">
				<ExampleContent />
			</Collapsible>

			<h3>Medium</h3>
			<Collapsible data-cy="medium-collapsible" text="Toggle collapsible" size="medium">
				<ExampleContent />
			</Collapsible>

			<h3>Large</h3>
			<Collapsible data-cy="large-collapsible" text="Toggle collapsible" size="large">
				<ExampleContent />
			</Collapsible>

			<h3>Xlarge</h3>
			<Collapsible data-cy="xlarge-collapsible" text="Toggle collapsible" size="xlarge">
				<ExampleContent />
			</Collapsible>
		</GEL>
	);
}

export default Example;
