/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Body } from '@westpac/body';
import { Playground } from '../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Body>
				<h2>Body</h2>
				<p>Body with default tag</p>
			</Body>
		</Playground>
	);
};
