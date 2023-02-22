import { jsx } from '@westpac/core';
import { Switch } from '@westpac/switch';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Switch name="example-default" label="I'm a switch" />
		</Playground>
	);
};

export default Demo;
