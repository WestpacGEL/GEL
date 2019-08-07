import React from 'react';

import { FormSwitch } from '../src';

export default () => (
	<>
		<h3>Flipped switches</h3>
		<FormSwitch name="ex1" id="ex1" flip>
			Enable notifications
		</FormSwitch>
		<FormSwitch name="ex2" id="ex2" flip>
			Turn notifications
		</FormSwitch>
		<hr />

		<h3>Block switches</h3>
		<FormSwitch name="ex3" id="ex3" block>
			Turn notifications
		</FormSwitch>
		<FormSwitch name="ex4" id="ex4" block>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur corporis sint, facere
			sequi provident eius similique ab velit, beatae aut architecto porro quidem neque
			necessitatibus, quis nulla itaque labore harum, in nesciunt! Molestiae, voluptatum, voluptas.
			Quo pariatur, voluptate ducimus nemo?
		</FormSwitch>
		<hr />

		<h3>Flipped block switches</h3>
		<FormSwitch name="ex4" id="ex4" flip block>
			Enable notifications
		</FormSwitch>
		<FormSwitch name="ex5" id="ex5" flip block>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur corporis sint, facere
			sequi provident eius similique ab velit, beatae aut architecto porro quidem neque
			necessitatibus, quis nulla itaque labore harum, in nesciunt! Molestiae, voluptatum, voluptas.
			Quo pariatur, voluptate ducimus nemo?
		</FormSwitch>
	</>
);
