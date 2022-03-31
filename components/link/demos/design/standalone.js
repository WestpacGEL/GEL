/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Link } from '@westpac/link';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Link href="#">Look, I’m a standalone link</Link>
		</Playground>
	);
};

export default Demo;
