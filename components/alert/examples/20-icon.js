/** @jsx jsx */

import { jsx } from '@westpac/core';
import { HelpIcon } from '@westpac/icon';
import { Alert } from '@westpac/alert';

import { Intopia } from '../../../helpers/example/components/Intopia.js';
import { Playground } from '../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Intopia />

			<h2>Custom icon</h2>
			<Alert look="info" icon={HelpIcon}>
				<strong>Heads up!</strong> This alert needs your attention, but it’s not super important. Oh
				wow look, I have a custom icon. <a href="#">Link</a>
			</Alert>

			<hr />

			<h2>No icon</h2>
			<Alert look="info" icon={null}>
				<strong>Heads up!</strong> This alert needs your attention, but it’s not super important. Oh
				wow look, I have no icon. <a href="#">Link</a>
			</Alert>
		</Playground>
	);
};
