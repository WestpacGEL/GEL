/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Badge } from '@westpac/badge';
import { Button } from '@westpac/button';
import { Playground } from '../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<p>
				<Button>
					Primary <Badge value="15" look="faint" />
				</Button>{' '}
				<Button look="hero">
					Hero <Badge value="15" look="faint" />
				</Button>{' '}
				<Button look="faint">
					Faint <Badge value="15" look="neutral" />
				</Button>
			</p>
			<p>
				<Button soft>
					Primary Soft <Badge value="15" look="neutral" />
				</Button>{' '}
				<Button look="hero" soft>
					Hero Soft <Badge value="15" look="neutral" />
				</Button>{' '}
				<Button look="faint" soft>
					Faint Soft <Badge value="15" look="neutral" />
				</Button>
			</p>
		</Playground>
	);
};
