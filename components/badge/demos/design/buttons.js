/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Badge } from '@westpac/badge';
import { Button } from '@westpac/button';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<p>
				<Button size="large">
					Primary <Badge value="15" look="faint" />
				</Button>{' '}
				<Button look="hero" size="large">
					Hero <Badge value="15" look="faint" />
				</Button>{' '}
				<Button look="faint" size="large">
					Faint <Badge value="15" look="neutral" />
				</Button>
			</p>
			<p>
				<Button soft size="large">
					Primary Soft <Badge value="15" look="neutral" />
				</Button>{' '}
				<Button look="hero" size="large" soft>
					Hero Soft <Badge value="15" look="neutral" />
				</Button>{' '}
				<Button look="faint" size="large" soft>
					Faint Soft <Badge value="15" look="neutral" />
				</Button>
			</p>
		</Playground>
	);
};

export default Demo;
