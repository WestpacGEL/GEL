/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Link } from '@westpac/link';
import { Body } from '@westpac/body';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Body>
				<Link href="#">Look, I’m a standalone link</Link>
			</Body>
		</Playground>
	);
};

export default Demo;
