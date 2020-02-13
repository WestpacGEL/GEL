/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Badge } from '@westpac/badge';

import { Intopia } from '../../../helpers/example/components/Intopia.js';
import { Playground } from '../../../website/site/components/playground/macro';

function Example({ context }) {
	return (
		<Playground context={context}>
			<Intopia />

			<p>
				<Badge value="Default" />
			</p>
			<p>
				<Badge look="primary" value="Primary" /> <Badge look="hero" value="Hero" />{' '}
				<Badge look="neutral" value="Neutral" /> <Badge look="faint" value="Faint" />
			</p>
			<p>
				<Badge look="success" value="Success" /> <Badge look="info" value="Info" />{' '}
				<Badge look="warning" value="Warning" /> <Badge look="danger" value="Danger" />
			</p>
		</Playground>
	);
}

export default Example;
