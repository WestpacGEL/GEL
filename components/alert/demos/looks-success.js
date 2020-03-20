/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Alert } from '@westpac/alert';
import { Playground } from '../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Alert look="success">
				<strong>It worked!</strong> This alert tells you that something went just the way it was
				meant to.
			</Alert>
		</Playground>
	);
};
