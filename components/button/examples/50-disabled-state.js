import React from 'react';

import { Button } from '../src';

export default () => (
	<>
		<h3>Disabled buttons</h3>
		<p>
			<Button appearance="primary" disabled>
				Primary
			</Button>{' '}
			<Button appearance="hero" disabled>
				Hero
			</Button>{' '}
			<Button appearance="neutral" disabled>
				Neutral
			</Button>{' '}
			<Button appearance="faint" disabled>
				Faint
			</Button>{' '}
			<Button appearance="link" disabled>
				Link
			</Button>
		</p>
		<p>
			<Button appearance="primary" soft disabled>
				Primary soft
			</Button>{' '}
			<Button appearance="hero" soft disabled>
				Hero soft
			</Button>{' '}
			<Button appearance="neutral" soft disabled>
				Neutral soft
			</Button>{' '}
			<Button appearance="faint" soft disabled>
				Faint soft
			</Button>
		</p>
	</>
);
