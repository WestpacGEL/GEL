/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Alert } from '@westpac/alert';
import { Playground } from '../../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Alert look="info" icon={null}>
				<strong>Heads up!</strong> Oh wow look, I have no icon.
			</Alert>
		</Playground>
	);
};
