import React from 'react';

import { Button } from '../src';

// Examples
const sizes = [
	['small', 'medium', 'large', 'xlarge'],
	['large', 'medium'],
	['small', null, 'large'],
];
const blocks = [[true, false, true, false], [true, false], [true, null, false]];

export default () => (
	<>
		<h2>Responsive sizing</h2>
		{sizes.map((s, i) => (
			<p key={i}>
				<Button appearance="primary" size={s}>
					[{s.map(v => String(v)).join(', ')}]
				</Button>
			</p>
		))}

		<hr />

		<h2>Responsive block</h2>
		{blocks.map((b, i) => (
			<p key={i}>
				<Button appearance="primary" size="xlarge" block={b}>
					[{b.map(v => String(v)).join(', ')}]
				</Button>
			</p>
		))}
	</>
);
