/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Alert } from '@westpac/alert';
import { HelpIcon } from '@westpac/icon';
import { Playground } from '../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Alert look="info" icon={HelpIcon}>
				<strong>Heads up!</strong> Oh wow look, I have a custom icon.
			</Alert>
		</Playground>
	);
};
