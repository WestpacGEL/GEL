import React from 'react';
import { Button } from '../src';

export default () => (
	<>
		<h2>Small</h2>
		<Button appearance="primary" size="small">
			Primary
		</Button>{' '}
		<Button appearance="hero" size="small">
			Hero
		</Button>{' '}
		<Button appearance="faint" size="small">
			Faint
		</Button>{' '}
		<Button appearance="link" size="small">
			Link
		</Button>
		<hr />
		<h2>Medium</h2>
		<Button appearance="primary">Primary</Button> <Button appearance="hero">Hero</Button>{' '}
		<Button appearance="faint">Faint</Button> <Button appearance="link">Link</Button>
		<hr />
		<h2>Large</h2>
		<Button appearance="primary" size="large">
			Primary
		</Button>{' '}
		<Button appearance="hero" size="large">
			Hero
		</Button>{' '}
		<Button appearance="faint" size="large">
			Faint
		</Button>{' '}
		<Button appearance="link" size="large">
			Link
		</Button>
		<hr />
		<h2>Extra large</h2>
		<Button appearance="primary" size="xlarge">
			Primary
		</Button>{' '}
		<Button appearance="hero" size="xlarge">
			Hero
		</Button>{' '}
		<Button appearance="faint" size="xlarge">
			Faint
		</Button>{' '}
		<Button appearance="link" size="xlarge">
			Link
		</Button>
		<p></p>
	</>
);
