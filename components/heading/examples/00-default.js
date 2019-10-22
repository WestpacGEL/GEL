/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Heading } from '@westpac/heading';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>
				Without <code>tag</code> prop
			</h2>
			<Heading size="1">Size: 1</Heading>
			<Heading size={2}>Size: 2</Heading>
			<hr />
			<h2>
				With <code>tag</code> prop
			</h2>
			<Heading tag="h2" size="1">
				Tag: h2 size: 1
			</Heading>
			<Heading tag="h1" size="2">
				Tag: h1 size: 2
			</Heading>
			<hr />
			<h2>Invalid props</h2>
			<Heading size="0">Size too small</Heading>
			<Heading size="10">Size too large</Heading>
			<Heading tag="span" size="5">
				Tag not headline tag
			</Heading>
		</GEL>
	);
}

export default Example;
