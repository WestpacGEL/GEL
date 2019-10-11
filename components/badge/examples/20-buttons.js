import React from 'react';
import { Badge } from '../src';
import { Button } from '@westpac/button';

export default () => (
	<>
		<h2>Default button instance (no styling props)</h2>
		<p>
			<Button>
				Default <Badge>Default</Badge>
			</Button>
		</p>

		<hr />

		<h2>Button appearances</h2>

		<h3>Primary</h3>
		<p>
			<Button appearance="primary">
				Primary <Badge>Default</Badge>
			</Button>
		</p>
		<p>
			<Button appearance="primary">
				Primary <Badge appearance="primary">Primary</Badge>
			</Button>{' '}
			<Button appearance="primary">
				Primary <Badge appearance="hero">Hero</Badge>
			</Button>{' '}
			<Button appearance="primary">
				Primary <Badge appearance="neutral">Neutral</Badge>
			</Button>{' '}
			<Button appearance="primary">
				Primary <Badge appearance="faint">Faint</Badge>
			</Button>
		</p>
		<p>
			<Button appearance="primary">
				Primary <Badge appearance="success">Success</Badge>
			</Button>{' '}
			<Button appearance="primary">
				Primary <Badge appearance="info">Info</Badge>
			</Button>{' '}
			<Button appearance="primary">
				Primary <Badge appearance="warning">Warning</Badge>
			</Button>{' '}
			<Button appearance="primary">
				Primary <Badge appearance="danger">Danger</Badge>
			</Button>
		</p>
		<p>
			<Button appearance="primary" soft>
				Primary soft <Badge>Default</Badge>
			</Button>
		</p>
		<p>
			<Button appearance="primary" soft>
				Primary soft <Badge appearance="primary">Primary</Badge>
			</Button>{' '}
			<Button appearance="primary" soft>
				Primary soft <Badge appearance="hero">Hero</Badge>
			</Button>{' '}
			<Button appearance="primary" soft>
				Primary soft <Badge appearance="neutral">Neutral</Badge>
			</Button>{' '}
			<Button appearance="primary" soft>
				Primary soft <Badge appearance="faint">Faint</Badge>
			</Button>
		</p>
		<p>
			<Button appearance="primary" soft>
				Primary soft <Badge appearance="success">Success</Badge>
			</Button>{' '}
			<Button appearance="primary" soft>
				Primary soft <Badge appearance="info">Info</Badge>
			</Button>{' '}
			<Button appearance="primary" soft>
				Primary soft <Badge appearance="warning">Warning</Badge>
			</Button>{' '}
			<Button appearance="primary" soft>
				Primary soft <Badge appearance="danger">Danger</Badge>
			</Button>
		</p>

		<h3>Hero</h3>
		<p>
			<Button appearance="hero">
				Hero <Badge>Default</Badge>
			</Button>
		</p>
		<p>
			<Button appearance="hero">
				Hero <Badge appearance="primary">Primary</Badge>
			</Button>{' '}
			<Button appearance="hero">
				Hero <Badge appearance="hero">Hero</Badge>
			</Button>{' '}
			<Button appearance="hero">
				Hero <Badge appearance="neutral">Neutral</Badge>
			</Button>{' '}
			<Button appearance="hero">
				Hero <Badge appearance="faint">Faint</Badge>
			</Button>
		</p>
		<p>
			<Button appearance="hero">
				Hero <Badge appearance="success">Success</Badge>
			</Button>{' '}
			<Button appearance="hero">
				Hero <Badge appearance="info">Info</Badge>
			</Button>{' '}
			<Button appearance="hero">
				Hero <Badge appearance="warning">Warning</Badge>
			</Button>{' '}
			<Button appearance="hero">
				Hero <Badge appearance="danger">Danger</Badge>
			</Button>
		</p>
		<p>
			<Button appearance="hero" soft>
				Hero soft <Badge>Default</Badge>
			</Button>
		</p>
		<p>
			<Button appearance="hero" soft>
				Hero soft <Badge appearance="primary">Primary</Badge>
			</Button>{' '}
			<Button appearance="hero" soft>
				Hero soft <Badge appearance="hero">Hero</Badge>
			</Button>{' '}
			<Button appearance="hero" soft>
				Hero soft <Badge appearance="neutral">Neutral</Badge>
			</Button>{' '}
			<Button appearance="hero" soft>
				Hero soft <Badge appearance="faint">Faint</Badge>
			</Button>
		</p>
		<p>
			<Button appearance="hero" soft>
				Hero soft <Badge appearance="success">Success</Badge>
			</Button>{' '}
			<Button appearance="hero" soft>
				Hero soft <Badge appearance="info">Info</Badge>
			</Button>{' '}
			<Button appearance="hero" soft>
				Hero soft <Badge appearance="warning">Warning</Badge>
			</Button>{' '}
			<Button appearance="hero" soft>
				Hero soft <Badge appearance="danger">Danger</Badge>
			</Button>
		</p>

		<h3>Neutral</h3>
		<p>
			<Button appearance="neutral">
				Neutral <Badge>Default</Badge>
			</Button>
		</p>
		<p>
			<Button appearance="neutral">
				Neutral <Badge appearance="primary">Primary</Badge>
			</Button>{' '}
			<Button appearance="neutral">
				Neutral <Badge appearance="hero">Hero</Badge>
			</Button>{' '}
			<Button appearance="neutral">
				Neutral <Badge appearance="neutral">Neutral</Badge>
			</Button>{' '}
			<Button appearance="neutral">
				Neutral <Badge appearance="faint">Faint</Badge>
			</Button>{' '}
		</p>
		<p>
			<Button appearance="neutral">
				Neutral <Badge appearance="success">Success</Badge>
			</Button>{' '}
			<Button appearance="neutral">
				Neutral <Badge appearance="info">Info</Badge>
			</Button>{' '}
			<Button appearance="neutral">
				Neutral <Badge appearance="warning">Warning</Badge>
			</Button>{' '}
			<Button appearance="neutral">
				Neutral <Badge appearance="danger">Danger</Badge>
			</Button>
		</p>
		<p>
			<Button appearance="neutral" soft>
				Neutral soft <Badge>Default</Badge>
			</Button>
		</p>
		<p>
			<Button appearance="neutral" soft>
				Neutral soft <Badge appearance="primary">Primary</Badge>
			</Button>{' '}
			<Button appearance="neutral" soft>
				Neutral soft <Badge appearance="hero">Hero</Badge>
			</Button>{' '}
			<Button appearance="neutral" soft>
				Neutral soft <Badge appearance="neutral">Neutral</Badge>
			</Button>{' '}
			<Button appearance="neutral" soft>
				Neutral soft <Badge appearance="faint">Faint</Badge>
			</Button>
		</p>
		<p>
			<Button appearance="neutral" soft>
				Neutral soft <Badge appearance="success">Success</Badge>
			</Button>{' '}
			<Button appearance="neutral" soft>
				Neutral soft <Badge appearance="info">Info</Badge>
			</Button>{' '}
			<Button appearance="neutral" soft>
				Neutral soft <Badge appearance="warning">Warning</Badge>
			</Button>{' '}
			<Button appearance="neutral" soft>
				Neutral soft <Badge appearance="danger">Danger</Badge>
			</Button>
		</p>

		<h3>Faint</h3>
		<p>
			<Button appearance="faint">
				Faint <Badge>Default</Badge>
			</Button>
		</p>
		<p>
			<Button appearance="faint">
				Faint <Badge appearance="primary">Primary</Badge>
			</Button>{' '}
			<Button appearance="faint">
				Faint <Badge appearance="hero">Hero</Badge>
			</Button>{' '}
			<Button appearance="faint">
				Faint <Badge appearance="neutral">Neutral</Badge>
			</Button>{' '}
			<Button appearance="faint">
				Faint <Badge appearance="faint">Faint</Badge>
			</Button>
		</p>
		<p>
			<Button appearance="faint">
				Faint <Badge appearance="success">Success</Badge>
			</Button>{' '}
			<Button appearance="faint">
				Faint <Badge appearance="info">Info</Badge>
			</Button>{' '}
			<Button appearance="faint">
				Faint <Badge appearance="warning">Warning</Badge>
			</Button>{' '}
			<Button appearance="faint">
				Faint <Badge appearance="danger">Danger</Badge>
			</Button>
		</p>
		<p>
			<Button appearance="faint" soft>
				Faint soft <Badge>Default</Badge>
			</Button>
		</p>
		<p>
			<Button appearance="faint" soft>
				Faint soft <Badge appearance="primary">Primary</Badge>
			</Button>{' '}
			<Button appearance="faint" soft>
				Faint soft <Badge appearance="hero">Hero</Badge>
			</Button>{' '}
			<Button appearance="faint" soft>
				Faint soft <Badge appearance="neutral">Neutral</Badge>
			</Button>{' '}
			<Button appearance="faint" soft>
				Faint soft <Badge appearance="faint">Faint</Badge>
			</Button>
		</p>
		<p>
			<Button appearance="faint" soft>
				Faint soft <Badge appearance="success">Success</Badge>
			</Button>{' '}
			<Button appearance="faint" soft>
				Faint soft <Badge appearance="info">Info</Badge>
			</Button>{' '}
			<Button appearance="faint" soft>
				Faint soft <Badge appearance="warning">Warning</Badge>
			</Button>{' '}
			<Button appearance="faint" soft>
				Faint soft <Badge appearance="danger">Danger</Badge>
			</Button>
		</p>
	</>
);
