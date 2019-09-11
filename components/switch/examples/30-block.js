import React from 'react';
import { Switch } from '../src';

export default () => (
	<>
		<h2>Default block</h2>
		<Switch name="example-block-1" isBlock>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur corporis sint, facere
			sequi provident eius similique ab velit, beatae aut architecto porro quidem neque
			necessitatibus, quis nulla itaque labore harum, in nesciunt! Molestiae, voluptatum, voluptas.
			Quo pariatur, voluptate ducimus nemo?
		</Switch>
		<Switch name="example-block-2" isBlock>
			Lorem ipsum dolor sit amet
		</Switch>

		<hr />

		<h2>Flipped block</h2>
		<Switch name="example-flipped-block-1" toggleText={['Yes', 'No']} isFlipped isBlock>
			Enable notifications
		</Switch>
		<Switch name="example-flipped-block-2" isFlipped isBlock>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur corporis sint, facere
			sequi provident eius similique ab velit, beatae aut architecto porro quidem neque
			necessitatibus, quis nulla itaque labore harum, in nesciunt! Molestiae, voluptatum, voluptas.
			Quo pariatur, voluptate ducimus nemo?
		</Switch>
	</>
);
