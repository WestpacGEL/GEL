/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Switch } from '@westpac/switch';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Default block</h2>
			<Switch name="example-block-1" block>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur corporis sint, facere
				sequi provident eius similique ab velit, beatae aut architecto porro quidem neque
				necessitatibus, quis nulla itaque labore harum, in nesciunt! Molestiae, voluptatum,
				voluptas. Quo pariatur, voluptate ducimus nemo?
			</Switch>
			<Switch name="example-block-2" block>
				Lorem ipsum dolor sit amet
			</Switch>

			<hr />

			<h2>Flipped block</h2>
			<Switch name="example-flipped-block-1" toggleText={['Yes', 'No']} flipped block>
				Enable notifications
			</Switch>
			<Switch name="example-flipped-block-2" flipped block>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur corporis sint, facere
				sequi provident eius similique ab velit, beatae aut architecto porro quidem neque
				necessitatibus, quis nulla itaque labore harum, in nesciunt! Molestiae, voluptatum,
				voluptas. Quo pariatur, voluptate ducimus nemo?
			</Switch>
		</GEL>
	);
}

export default Example;
