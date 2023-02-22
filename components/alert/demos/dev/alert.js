import { jsx } from '@westpac/core';
import { Alert } from '@westpac/alert';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Alert>This is a default alert.</Alert>
		</Playground>
	);
};

export default Demo;
