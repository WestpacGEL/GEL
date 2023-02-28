import { jsx } from '@westpac/core';
import { Heading } from '@westpac/heading';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Heading size={[10, 8, 6, 4, 2]}>Heading</Heading>
		</Playground>
	);
};

export default Demo;
