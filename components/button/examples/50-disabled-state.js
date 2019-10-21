import React from 'react';
import { Button } from '../src';

export default () => (
	<>
		<Button appearance="primary" disabled>
			Primary
		</Button>{' '}
		<Button appearance="hero" disabled>
			Hero
		</Button>{' '}
		<Button appearance="faint" disabled>
			Faint
		</Button>{' '}
		<Button appearance="link" disabled>
			Link
		</Button>
		<br />
		<br />
		<Button appearance="primary" soft disabled>
			Primary soft
		</Button>{' '}
		<Button appearance="hero" soft disabled>
			Hero soft
		</Button>{' '}
		<Button appearance="faint" soft disabled>
			Faint soft
		</Button>
	</>
);
