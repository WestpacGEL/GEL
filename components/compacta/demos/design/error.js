/** @jsx jsx */

import { jsx } from '@westpac/core';
import { CompactaDemo } from './default';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<CompactaDemo error />
		</Playground>
	);
};

export default Demo;
