import { jsx } from '@westpac/core';
import { FaceHappyIcon } from '@westpac/icon';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<FaceHappyIcon />
		</Playground>
	);
};

export default Demo;
