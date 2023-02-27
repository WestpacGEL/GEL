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
			<Collapsible data-cy="open-collapsible" text="Toggle collapsible" open={true}>
				<ExampleContent />
			</Collapsible>

			<hr />

			<h2>Sizes</h2>

			<h3>Small</h3>
			<Collapsible text="Toggle collapsible" size="small" open={true}>
				<ExampleContent />
			</Collapsible>

			<h3>Medium</h3>
			<Collapsible text="Toggle collapsible" size="medium" open={true}>
				<ExampleContent />
			</Collapsible>

			<h3>Large</h3>
			<Collapsible text="Toggle collapsible" size="large" open={true}>
				<ExampleContent />
			</Collapsible>

			<h3>Xlarge</h3>
			<Collapsible text="Toggle collapsible" size="xlarge" open={true}>
				<ExampleContent />
			</Collapsible>
		</GEL>
	);
}

export default Example;
