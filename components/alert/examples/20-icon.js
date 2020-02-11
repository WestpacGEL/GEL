/** @jsx jsx */

import { jsx } from '@westpac/core';
import { HelpIcon } from '@westpac/icon';
import { Alert } from '@westpac/alert';
import { Playground } from '../../../website/site/components/playground';
import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	return (
		<Playground context={context} brand={brand}>
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
}

export default Example;
