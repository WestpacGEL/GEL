import React from 'react';

import { Switch } from '../src';
import { Box } from './_utils';

export default () => (
	<>
		<h3>Flipped switches</h3>
		<Box>
			<Switch name="ex1" flipped>
				Enable notifications
			</Switch>
			<Switch name="ex2" values flipped>
				Turn notifications
			</Switch>
		</Box>
		<hr />

		<h3>Block switches</h3>
		<Switch name="ex3" block>
			Turn notifications
		</Switch>
		<Switch name="ex4" values block>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur corporis sint, facere
			sequi provident eius similique ab velit, beatae aut architecto porro quidem neque
			necessitatibus, quis nulla itaque labore harum, in nesciunt! Molestiae, voluptatum, voluptas.
			Quo pariatur, voluptate ducimus nemo?
		</Switch>
		<hr />

		<h3>Flipped block switches</h3>
		<Switch name="ex4" flipped block>
			Enable notifications
		</Switch>
		<Switch name="ex5" values flipped block>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur corporis sint, facere
			sequi provident eius similique ab velit, beatae aut architecto porro quidem neque
			necessitatibus, quis nulla itaque labore harum, in nesciunt! Molestiae, voluptatum, voluptas.
			Quo pariatur, voluptate ducimus nemo?
		</Switch>
		<hr />
	</>
);
