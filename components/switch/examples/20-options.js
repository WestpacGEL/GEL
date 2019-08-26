import React from 'react';

import { Switch } from '../src';

export default () => (
	<>
		<h3>Flipped switches</h3>
		<Switch name="ex1" toggleText={['Yes', 'No']} flip>
			Enable notifications
		</Switch>
		<Switch name="ex2" flip>
			Turn notifications
		</Switch>
		<hr />

		<h3>Block switches</h3>
		<Switch name="ex3" toggleText={['Yes', 'No']} block>
			Enable notifications
		</Switch>
		<Switch name="ex4" block>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur corporis sint, facere
			sequi provident eius similique ab velit, beatae aut architecto porro quidem neque
			necessitatibus, quis nulla itaque labore harum, in nesciunt! Molestiae, voluptatum, voluptas.
			Quo pariatur, voluptate ducimus nemo?
		</Switch>
		<hr />

		<h3>Flipped block switches</h3>
		<Switch name="ex5" toggleText={['Yes', 'No']} flip block>
			Enable notifications
		</Switch>
		<Switch name="ex6" flip block>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur corporis sint, facere
			sequi provident eius similique ab velit, beatae aut architecto porro quidem neque
			necessitatibus, quis nulla itaque labore harum, in nesciunt! Molestiae, voluptatum, voluptas.
			Quo pariatur, voluptate ducimus nemo?
		</Switch>
	</>
);
