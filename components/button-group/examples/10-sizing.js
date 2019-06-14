import React from 'react';

import { ButtonGroup, Button } from '../src';
// import Button from '@westpac/button';
// import { Button } from '../../button/src'; //until button package is published

export default () => (
	<>
		<h3>Small</h3>
		<ButtonGroup size="small">
			<Button>Left</Button>
			<Button>Middle</Button>
			<Button>Right</Button>
		</ButtonGroup>

		<hr />

		<h3>Medium</h3>
		<ButtonGroup size="medium">
			<Button>Left</Button>
			<Button>Middle</Button>
			<Button>Right</Button>
		</ButtonGroup>

		<hr />

		<h3>Large</h3>
		<ButtonGroup size="large">
			<Button>Left</Button>
			<Button>Middle</Button>
			<Button>Right</Button>
		</ButtonGroup>

		<hr />

		<h3>Extra large</h3>
		<ButtonGroup size="xlarge">
			<Button>Left</Button>
			<Button>Middle</Button>
			<Button>Right</Button>
		</ButtonGroup>
	</>
);
