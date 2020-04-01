/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Heading } from '@westpac/heading';
import { Playground } from '../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Heading size={1}>Heading</Heading>
		</Playground>
	);
};
