/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Alert } from '@westpac/alert';
import { Playground } from '../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Alert look="success">
				<strong>It worked!</strong> This alert tells you that something went just the way it was meant to.
			</Alert>

			<Alert look="info">
				<strong>Heads up!</strong> This alert needs your attention, but it’s not super important.
			</Alert>

			<Alert look="warning">
				<strong>Warning!</strong> This alert warns you about a thing.
			</Alert>

			<Alert look="danger">
				<strong>Danger!</strong> This alert stops you in your tracks and grabs your attention.
			</Alert>

			<Alert look="system">
				<strong>System Error 8942:</strong> Alert communicates a system message that is important.
			</Alert>
		</Playground>
	);
};
