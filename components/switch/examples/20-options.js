import React from 'react';

import { Switch } from '../src';

export default () => (
	<>
		<h2>Flipped</h2>
		<Switch name="example-flipped-1" toggleText={['Yes', 'No']} flipped>
			Enable notifications
		</Switch>
		<Switch name="example-flipped-2" flipped>
			Turn notifications
		</Switch>

		<hr />

		<h2>Block</h2>
		<Switch name="example-block-1" toggleText={['Yes', 'No']} block>
			Enable notifications
		</Switch>
		<Switch name="example-block-2" block>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur corporis sint, facere
			sequi provident eius similique ab velit, beatae aut architecto porro quidem neque
			necessitatibus, quis nulla itaque labore harum, in nesciunt! Molestiae, voluptatum, voluptas.
			Quo pariatur, voluptate ducimus nemo?
		</Switch>

		<hr />

		<h2>Flipped &amp; block</h2>
		<Switch name="example-flipped-block-1" toggleText={['Yes', 'No']} flipped block>
			Enable notifications
		</Switch>
		<Switch name="example-flipped-block-2" flipped block>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur corporis sint, facere
			sequi provident eius similique ab velit, beatae aut architecto porro quidem neque
			necessitatibus, quis nulla itaque labore harum, in nesciunt! Molestiae, voluptatum, voluptas.
			Quo pariatur, voluptate ducimus nemo?
		</Switch>
	</>
);
