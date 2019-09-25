import React from 'react';
import { ButtonGroup, Button } from '../src';

export default () => (
	<>
		<h2>Default instance (no styling props)</h2>
		<ButtonGroup name="example-default">
			<Button value="left">Left</Button>
			<Button value="middle">Middle</Button>
			<Button value="right">Right</Button>
		</ButtonGroup>

		<hr />

		<h2>Primary</h2>
		<ButtonGroup appearance="primary" name="example-primary">
			<Button value="left">Left</Button>
			<Button value="middle">Middle</Button>
			<Button value="right">Right</Button>
		</ButtonGroup>

		<hr />

		<h2>Hero</h2>
		<ButtonGroup appearance="hero" name="example-hero">
			<Button value="left">Left</Button>
			<Button value="middle">Middle</Button>
			<Button value="right">Right</Button>
		</ButtonGroup>

		<hr />

		<h2>Neutral</h2>
		<ButtonGroup appearance="neutral" name="example-neutral">
			<Button value="left">Left</Button>
			<Button value="middle">Middle</Button>
			<Button value="right">Right</Button>
		</ButtonGroup>

		<hr />

		<h2>Faint</h2>
		<ButtonGroup appearance="faint" name="example-faint">
			<Button value="left">Left</Button>
			<Button value="middle">Middle</Button>
			<Button value="right">Right</Button>
		</ButtonGroup>
	</>
);
