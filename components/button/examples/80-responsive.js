/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Button } from '@westpac/button';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

// Examples
const sizes = [
	['small', 'medium', 'large', 'xlarge'],
	['large', 'medium'],
	['small', null, 'large'],
];
const blocks = [
	[true, false, true, false],
	[true, false],
	[true, null, false],
];

function Example({ brand }) {
	return (
		<Playground context={context} brand={brand}>
			<Intopia />

			<h2>Responsive sizing</h2>
			{sizes.map((s, i) => (
				<p key={i}>
					<Button look="primary" size={s}>
						[{s.map(v => String(v)).join(', ')}]
					</Button>
				</p>
			))}

			<hr />

			<h2>Responsive block</h2>
			{blocks.map((b, i) => (
				<p key={i}>
					<Button look="primary" size="xlarge" block={b}>
						[{b.map(v => String(v)).join(', ')}]
					</Button>
				</p>
			))}
		</Playground>
	);
}

export default Example;
