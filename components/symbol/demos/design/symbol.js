import { jsx } from '@westpac/core';
import { WBCLogo } from '@westpac/symbol';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<WBCLogo />
		</Playground>
	);
};

export default Demo;
