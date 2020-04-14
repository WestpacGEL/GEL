/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Well } from '@westpac/well';
import { Playground } from '../../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Well>Look, I'm in a well.</Well>
		</Playground>
	);
};
