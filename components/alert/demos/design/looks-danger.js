/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Alert } from '@westpac/alert';
import { Playground } from '../../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Alert look="danger">
				<strong>Danger!</strong> This alert stops you in your tracks and grabs your attention.
			</Alert>
		</Playground>
	);
};
