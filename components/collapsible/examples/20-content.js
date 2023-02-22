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
			<h2>Sizes</h2>

			<h3>Small</h3>
			<Body>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur illum quidem neque
					quod impedit, praesentium maiores unde perspiciatis accusantium non, quae debitis ut
					aliquid numquam ipsa hic tempora deleniti deserunt!
				</p>
				<Collapsible text="Toggle small collapsible" size="small">
					<ExampleContent />
				</Collapsible>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque ullam iure voluptatibus
					quos, recusandae quod veritatis ab alias blanditiis eos similique earum voluptate amet
					velit ducimus quibusdam iusto, maxime rerum.
				</p>
			</Body>

			<h3>Medium</h3>
			<Body>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur illum quidem neque
					quod impedit, praesentium maiores unde perspiciatis accusantium non, quae debitis ut
					aliquid numquam ipsa hic tempora deleniti deserunt!
				</p>
				<Collapsible text="Toggle medium collapsible" size="medium">
					<ExampleContent />
				</Collapsible>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque ullam iure voluptatibus
					quos, recusandae quod veritatis ab alias blanditiis eos similique earum voluptate amet
					velit ducimus quibusdam iusto, maxime rerum.
				</p>
			</Body>

			<h3>Large</h3>
			<Body>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur illum quidem neque
					quod impedit, praesentium maiores unde perspiciatis accusantium non, quae debitis ut
					aliquid numquam ipsa hic tempora deleniti deserunt!
				</p>
				<Collapsible text="Toggle large collapsible" size="large">
					<ExampleContent />
				</Collapsible>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque ullam iure voluptatibus
					quos, recusandae quod veritatis ab alias blanditiis eos similique earum voluptate amet
					velit ducimus quibusdam iusto, maxime rerum.
				</p>
			</Body>

			<h3>Xlarge</h3>
			<Body>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur illum quidem neque
					quod impedit, praesentium maiores unde perspiciatis accusantium non, quae debitis ut
					aliquid numquam ipsa hic tempora deleniti deserunt!
				</p>
				<Collapsible text="Toggle xlarge collapsible" size="xlarge">
					<ExampleContent />
				</Collapsible>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque ullam iure voluptatibus
					quos, recusandae quod veritatis ab alias blanditiis eos similique earum voluptate amet
					velit ducimus quibusdam iusto, maxime rerum.
				</p>
			</Body>
		</GEL>
	);
}

export default Example;
