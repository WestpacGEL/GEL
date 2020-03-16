/** @jsx jsx */
import { jsx } from '@westpac/core';
import { Badge } from '@westpac/badge';
import { Button } from '@westpac/button';
import { Playground } from '../../../website/src/components/playground/macro';
export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<p>
				<Button look="primary">
					Primary <Badge value="Default" />
				</Button>
			</p>
			<p>
				<Button look="primary">
					Primary <Badge look="primary" value="Primary" />
				</Button>{' '}
				<Button look="primary">
					Primary <Badge look="hero" value="Hero" />
				</Button>{' '}
				<Button look="primary">
					Primary <Badge look="neutral" value="Neutral" />
				</Button>{' '}
				<Button look="primary">
					Primary <Badge look="faint" value="Faint" />
				</Button>
			</p>
			<p>
				<Button look="primary">
					Primary <Badge look="success" value="Success" />
				</Button>{' '}
				<Button look="primary">
					Primary <Badge look="info" value="Info" />
				</Button>{' '}
				<Button look="primary">
					Primary <Badge look="warning" value="Warning" />
				</Button>{' '}
				<Button look="primary">
					Primary <Badge look="danger" value="Danger" />
				</Button>
			</p>
			<p>
				<Button look="primary" soft>
					Primary soft <Badge value="Default" />
				</Button>
			</p>
			<p>
				<Button look="primary" soft>
					Primary soft <Badge look="primary" value="Primary" />
				</Button>{' '}
				<Button look="primary" soft>
					Primary soft <Badge look="hero" value="Hero" />
				</Button>{' '}
				<Button look="primary" soft>
					Primary soft <Badge look="neutral" value="Neutral" />
				</Button>{' '}
				<Button look="primary" soft>
					Primary soft <Badge look="faint" value="Faint" />
				</Button>
			</p>
			<p>
				<Button look="primary" soft>
					Primary soft <Badge look="success" value="Success" />
				</Button>{' '}
				<Button look="primary" soft>
					Primary soft <Badge look="info" value="Info" />
				</Button>{' '}
				<Button look="primary" soft>
					Primary soft <Badge look="warning" value="Warning" />
				</Button>{' '}
				<Button look="primary" soft>
					Primary soft <Badge look="danger" value="Danger" />
				</Button>
			</p>
		</Playground>
	);
};
