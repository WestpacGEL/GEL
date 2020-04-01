/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Label } from '@westpac/label';
import { Playground } from '../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Label value="Default" />
		</Playground>
	);
};
