/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Switch } from '@westpac/switch';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Switch name="example-block-1" label="eStatements" block />
			<Switch name="example-block-2" label="Quick balance" block />
		</Playground>
	);
};

export default Demo;
