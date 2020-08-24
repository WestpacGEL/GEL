/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Switch } from '@westpac/switch';
import { Playground } from '../../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Switch name="example-small" label="Small 30px" size="small" />
			<br />
			<br />
			<Switch name="example-medium" label="Medium 36px" size="medium" />
			<br />
			<br />
			<Switch name="example-large" label="Large 42px" size="large" />
			<br />
			<br />
			<Switch name="example-xlarge" label="X Large 48px" size="xlarge" />
		</Playground>
	);
};
