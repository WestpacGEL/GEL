/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Switch } from '@westpac/switch';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	const label = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur corporis sint, facere sequi provident eius similique ab velit, beatae aut architecto porro quidem neque necessitatibus, quis nulla itaque labore harum, in nesciunt! Molestiae, voluptatum, voluptas. Quo pariatur, voluptate ducimus nemo?`;
	return (
		<GEL brand={brand}>
			<Intopia />

			<h2>Default block</h2>
			<Switch name="example-block-1" label={label} block />
			<Switch name="example-block-2" label="Lorem ipsum dolor sit amet" block />

			<hr />

			<h2>Flipped block</h2>
			<Switch name="example-flipped-block-1" label="Enable notifications" flipped block />
			<hr />

			<Switch name="example-flipped-block-2" label={label} flipped block />
		</GEL>
	);
}

export default Example;
