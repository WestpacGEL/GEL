import React from 'react';

import { ButtonGroup, Button } from '../src';
// import Button from '@westpac/button';
// import { Button } from '../../button/src'; //until button package is published

export default () => (
	<>
		<h3>Default instance (no props)</h3>
		<ButtonGroup>
			<Button>Left</Button>
			<Button>Middle</Button>
			<Button>Right</Button>
		</ButtonGroup>

		<hr />

		<h3>Primary buttons</h3>
		<ButtonGroup appearance="primary" size="small">
			<Button>Left</Button>
			<Button>Middle</Button>
			<Button>Right</Button>
		</ButtonGroup>{' '}
		<ButtonGroup appearance="primary" size="medium">
			<Button>Left</Button>
			<Button>Middle</Button>
			<Button>Right</Button>
		</ButtonGroup>{' '}
		<ButtonGroup appearance="primary" size="large">
			<Button>Left</Button>
			<Button>Middle</Button>
			<Button>Right</Button>
		</ButtonGroup>{' '}
		<ButtonGroup appearance="primary" size="xlarge">
			<Button>Left</Button>
			<Button>Middle</Button>
			<Button>Right</Button>
		</ButtonGroup>

		<hr />

		<h3>Hero buttons</h3>
		<ButtonGroup appearance="hero" size="small">
			<Button>Left</Button>
			<Button>Middle</Button>
			<Button>Right</Button>
		</ButtonGroup>{' '}
		<ButtonGroup appearance="hero" size="medium">
			<Button>Left</Button>
			<Button>Middle</Button>
			<Button>Right</Button>
		</ButtonGroup>{' '}
		<ButtonGroup appearance="hero" size="large">
			<Button>Left</Button>
			<Button>Middle</Button>
			<Button>Right</Button>
		</ButtonGroup>{' '}
		<ButtonGroup appearance="hero" size="xlarge">
			<Button>Left</Button>
			<Button>Middle</Button>
			<Button>Right</Button>
		</ButtonGroup>

		<hr />

		<h3>Neutral buttons</h3>
		<ButtonGroup appearance="neutral" size="small">
			<Button>Left</Button>
			<Button>Middle</Button>
			<Button>Right</Button>
		</ButtonGroup>{' '}
		<ButtonGroup appearance="neutral" size="medium">
			<Button>Left</Button>
			<Button>Middle</Button>
			<Button>Right</Button>
		</ButtonGroup>{' '}
		<ButtonGroup appearance="neutral" size="large">
			<Button>Left</Button>
			<Button>Middle</Button>
			<Button>Right</Button>
		</ButtonGroup>{' '}
		<ButtonGroup appearance="neutral" size="xlarge">
			<Button>Left</Button>
			<Button>Middle</Button>
			<Button>Right</Button>
		</ButtonGroup>

		<hr />

		<h3>Faint buttons</h3>
		<ButtonGroup appearance="faint" size="small">
			<Button >Left</Button>
			<Button>Middle</Button>
			<Button>Right</Button>
		</ButtonGroup>{' '}
		<ButtonGroup appearance="faint" size="medium">
			<Button>Left</Button>
			<Button>Middle</Button>
			<Button>Right</Button>
		</ButtonGroup>{' '}
		<ButtonGroup appearance="faint" size="large">
			<Button>Left</Button>
			<Button>Middle</Button>
			<Button>Right</Button>
		</ButtonGroup>{' '}
		<ButtonGroup appearance="faint" size="xlarge">
			<Button>Left</Button>
			<Button>Middle</Button>
			<Button>Right</Button>
		</ButtonGroup>

	</>
);
