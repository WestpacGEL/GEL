/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Switch } from '@westpac/switch';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Switch name="example-default" label="Switch" />
			<br />
			<br />
			<Switch name="example-disabled" disabled label="Switch" />
		</Playground>
	);
};

export default Demo;
