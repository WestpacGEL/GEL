import { GEL, jsx } from '@westpac/core';
import { Heading } from '@westpac/heading';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>
				Without <code>tag</code> prop
			</h2>
			<Heading size={[10, 8, 6, 4, 2]}>Heading size: [10, 8, 6, 4, 2]</Heading>
			<Heading size={[10, null, null, null, 2]}>Heading size: [10, null, null, null, 2]</Heading>

			<hr />

			<h2>
				With <code>tag</code> prop
			</h2>
			<Heading tag="h2" size={[10, 8, 6, 4, 2]}>
				Heading tag: h2 size: [10, 8, 6, 4, 2]
			</Heading>
			<Heading tag="h2" size={[10, null, null, null, 2]}>
				Heading tag: h2 size: [10, null, null, null, 2]
			</Heading>
		</GEL>
	);
}

export default Example;
