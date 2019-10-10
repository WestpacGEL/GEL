import React from 'react';
import { ButtonGroup, Button } from '../src';

export default () => (
	<>
		<h2>Small</h2>
		<ButtonGroup size="small" name="example-small-block" block>
			<Button value="left">Left</Button>
			<Button value="middle">Middle</Button>
			<Button value="right">Right</Button>
		</ButtonGroup>

		<hr />

		<h2>Medium</h2>
		<ButtonGroup size="medium" name="example-medium-block" block>
			<Button value="left">Left</Button>
			<Button value="middle">Middle</Button>
			<Button value="right">Right</Button>
		</ButtonGroup>

		<hr />

		<h2>Large</h2>
		<ButtonGroup size="large" name="example-large-block" block>
			<Button value="left">Left</Button>
			<Button value="middle">Middle</Button>
			<Button value="right">Right</Button>
		</ButtonGroup>

		<hr />

		<h2>Extra large</h2>
		<ButtonGroup size="xlarge" name="example-xlarge-block" block>
			<Button value="left">Left</Button>
			<Button value="middle">Middle</Button>
			<Button value="right">Right</Button>
		</ButtonGroup>
	</>
);
