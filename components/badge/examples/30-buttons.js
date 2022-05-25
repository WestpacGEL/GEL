/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Button } from '@westpac/button';
import { Badge } from '@westpac/badge';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Default button instance (no styling props)</h2>
			<p>
				<Button>
					Default <Badge type="pill" value="Default" />
				</Button>
				{/* {' '}
				<Button look="faint">
					Faint <Badge type="pill" look="primary" value="Primary" />
				</Button>{' '}
				<Button look="primary" soft>
					Primary soft <Badge type="pill" value="Default" />
				</Button> */}
			</p>

			<hr />

			<h2>Button looks</h2>

			<h3>Primary</h3>
			<p>
				<Button look="primary">
					Primary <Badge type="pill" value="Default" />
				</Button>
			</p>
			<p>
				<Button look="primary">
					Primary <Badge type="pill" look="primary" value="Primary" />
				</Button>{' '}
				<Button look="primary">
					Primary <Badge type="pill" look="hero" value="Hero" />
				</Button>{' '}
				<Button look="primary">
					Primary <Badge type="pill" look="neutral" value="Neutral" />
				</Button>{' '}
				<Button look="primary">
					Primary <Badge type="pill" look="faint" value="Faint" />
				</Button>
			</p>
			<p>
				<Button look="primary">
					Primary <Badge type="pill" look="success" value="Success" />
				</Button>{' '}
				<Button look="primary">
					Primary <Badge type="pill" look="info" value="Info" />
				</Button>{' '}
				<Button look="primary">
					Primary <Badge type="pill" look="warning" value="Warning" />
				</Button>{' '}
				<Button look="primary">
					Primary <Badge type="pill" look="danger" value="Danger" />
				</Button>
			</p>
			<p>
				<Button look="primary" soft>
					Primary soft <Badge type="pill" value="Default" />
				</Button>
			</p>
			<p>
				<Button look="primary" soft>
					Primary soft <Badge type="pill" look="primary" value="Primary" />
				</Button>{' '}
				<Button look="primary" soft>
					Primary soft <Badge type="pill" look="hero" value="Hero" />
				</Button>{' '}
				<Button look="primary" soft>
					Primary soft <Badge type="pill" look="neutral" value="Neutral" />
				</Button>{' '}
				<Button look="primary" soft>
					Primary soft <Badge type="pill" look="faint" value="Faint" />
				</Button>
			</p>
			<p>
				<Button look="primary" soft>
					Primary soft <Badge type="pill" look="success" value="Success" />
				</Button>{' '}
				<Button look="primary" soft>
					Primary soft <Badge type="pill" look="info" value="Info" />
				</Button>{' '}
				<Button look="primary" soft>
					Primary soft <Badge type="pill" look="warning" value="Warning" />
				</Button>{' '}
				<Button look="primary" soft>
					Primary soft <Badge type="pill" look="danger" value="Danger" />
				</Button>
			</p>

			<h3>Hero</h3>
			<p>
				<Button look="hero">
					Hero <Badge type="pill" value="Default" />
				</Button>
			</p>
			<p>
				<Button look="hero">
					Hero <Badge type="pill" look="primary" value="Primary" />
				</Button>{' '}
				<Button look="hero">
					Hero <Badge type="pill" look="hero" value="Hero" />
				</Button>{' '}
				<Button look="hero">
					Hero <Badge type="pill" look="neutral" value="Neutral" />
				</Button>{' '}
				<Button look="hero">
					Hero <Badge type="pill" look="faint" value="Faint" />
				</Button>
			</p>
			<p>
				<Button look="hero">
					Hero <Badge type="pill" look="success" value="Success" />
				</Button>{' '}
				<Button look="hero">
					Hero <Badge type="pill" look="info" value="Info" />
				</Button>{' '}
				<Button look="hero">
					Hero <Badge type="pill" look="warning" value="Warning" />
				</Button>{' '}
				<Button look="hero">
					Hero <Badge type="pill" look="danger" value="Danger" />
				</Button>
			</p>
			<p>
				<Button look="hero" soft>
					Hero soft <Badge type="pill" value="Default" />
				</Button>
			</p>
			<p>
				<Button look="hero" soft>
					Hero soft <Badge type="pill" look="primary" value="Primary" />
				</Button>{' '}
				<Button look="hero" soft>
					Hero soft <Badge type="pill" look="hero" value="Hero" />
				</Button>{' '}
				<Button look="hero" soft>
					Hero soft <Badge type="pill" look="neutral" value="Neutral" />
				</Button>{' '}
				<Button look="hero" soft>
					Hero soft <Badge type="pill" look="faint" value="Faint" />
				</Button>
			</p>
			<p>
				<Button look="hero" soft>
					Hero soft <Badge type="pill" look="success" value="Success" />
				</Button>{' '}
				<Button look="hero" soft>
					Hero soft <Badge type="pill" look="info" value="Info" />
				</Button>{' '}
				<Button look="hero" soft>
					Hero soft <Badge type="pill" look="warning" value="Warning" />
				</Button>{' '}
				<Button look="hero" soft>
					Hero soft <Badge type="pill" look="danger" value="Danger" />
				</Button>
			</p>

			<h3>Faint</h3>
			<p>
				<Button look="faint">
					Faint <Badge type="pill" value="Default" />
				</Button>
			</p>
			<p>
				<Button look="faint">
					Faint <Badge type="pill" look="primary" value="Primary" />
				</Button>{' '}
				<Button look="faint">
					Faint <Badge type="pill" look="hero" value="Hero" />
				</Button>{' '}
				<Button look="faint">
					Faint <Badge type="pill" look="neutral" value="Neutral" />
				</Button>{' '}
				<Button look="faint">
					Faint <Badge type="pill" look="faint" value="Faint" />
				</Button>
			</p>
			<p>
				<Button look="faint">
					Faint <Badge type="pill" look="success" value="Success" />
				</Button>{' '}
				<Button look="faint">
					Faint <Badge type="pill" look="info" value="Info" />
				</Button>{' '}
				<Button look="faint">
					Faint <Badge type="pill" look="warning" value="Warning" />
				</Button>{' '}
				<Button look="faint">
					Faint <Badge type="pill" look="danger" value="Danger" />
				</Button>
			</p>
			<p>
				<Button look="faint" soft>
					Faint soft <Badge type="pill" value="Default" />
				</Button>
			</p>
			<p>
				<Button look="faint" soft>
					Faint soft <Badge type="pill" look="primary" value="Primary" />
				</Button>{' '}
				<Button look="faint" soft>
					Faint soft <Badge type="pill" look="hero" value="Hero" />
				</Button>{' '}
				<Button look="faint" soft>
					Faint soft <Badge type="pill" look="neutral" value="Neutral" />
				</Button>{' '}
				<Button look="faint" soft>
					Faint soft <Badge type="pill" look="faint" value="Faint" />
				</Button>
			</p>
			<p>
				<Button look="faint" soft>
					Faint soft <Badge type="pill" look="success" value="Success" />
				</Button>{' '}
				<Button look="faint" soft>
					Faint soft <Badge type="pill" look="info" value="Info" />
				</Button>{' '}
				<Button look="faint" soft>
					Faint soft <Badge type="pill" look="warning" value="Warning" />
				</Button>{' '}
				<Button look="faint" soft>
					Faint soft <Badge type="pill" look="danger" value="Danger" />
				</Button>
			</p>
		</GEL>
	);
}

export default Example;
