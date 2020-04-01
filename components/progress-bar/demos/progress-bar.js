/** @jsx jsx */

import { jsx } from '@westpac/core';
import { ProgressBar } from '@westpac/progress-bar';
import { Playground } from '../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<ProgressBar value={20} />
		</Playground>
	);
};
