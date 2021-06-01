/** @jsx jsx */

import { jsx } from '@emotion/react';

export let type = 'caption';

export function Node({ attributes, children }) {
	return (
		<figcaption css={{ padding: 8, textAlign: 'center' }} {...attributes}>
			{children}
		</figcaption>
	);
}
