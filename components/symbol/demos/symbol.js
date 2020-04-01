/** @jsx jsx */

import { jsx } from '@westpac/core';
import { WBCLogo } from '@westpac/symbol';
import { Playground } from '../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<WBCLogo />
		</Playground>
	);
};
