import { jsx } from '@westpac/core';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<p>To Do...</p>
		</Playground>
	);
};

export default Demo;
