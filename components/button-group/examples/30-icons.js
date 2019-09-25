import React from 'react';
import { ButtonGroup, Button } from '../src';
import { InfoIcon } from '@westpac/icon';

export default () => (
	<>
		<h2>Small</h2>
		<ButtonGroup size="small" name="example-small">
			<Button iconAfter={InfoIcon}>Left</Button>
			<Button iconAfter={InfoIcon}>Middle</Button>
			<Button iconAfter={InfoIcon}>Right</Button>
		</ButtonGroup>
		<br />
		<br />
		<ButtonGroup size="small" name="example-small-block" block>
			<Button iconAfter={InfoIcon}>Left</Button>
			<Button iconAfter={InfoIcon}>Middle</Button>
			<Button iconAfter={InfoIcon}>Right</Button>
		</ButtonGroup>

		<hr />

		<h2>Medium</h2>
		<ButtonGroup size="medium" name="example-medium">
			<Button iconAfter={InfoIcon}>Left</Button>
			<Button iconAfter={InfoIcon}>Middle</Button>
			<Button iconAfter={InfoIcon}>Right</Button>
		</ButtonGroup>
		<br />
		<br />
		<ButtonGroup size="medium" name="example-medium-block" block>
			<Button iconAfter={InfoIcon}>Left</Button>
			<Button iconAfter={InfoIcon}>Middle</Button>
			<Button iconAfter={InfoIcon}>Right</Button>
		</ButtonGroup>

		<hr />

		<h2>Large</h2>
		<ButtonGroup size="large" name="example-large">
			<Button iconAfter={InfoIcon}>Left</Button>
			<Button iconAfter={InfoIcon}>Middle</Button>
			<Button iconAfter={InfoIcon}>Right</Button>
		</ButtonGroup>
		<br />
		<br />
		<ButtonGroup size="large" name="example-large-block" block>
			<Button iconAfter={InfoIcon}>Left</Button>
			<Button iconAfter={InfoIcon}>Middle</Button>
			<Button iconAfter={InfoIcon}>Right</Button>
		</ButtonGroup>

		<hr />

		<h2>Extra large</h2>
		<ButtonGroup size="xlarge" name="example-xlarge">
			<Button iconAfter={InfoIcon}>Left</Button>
			<Button iconAfter={InfoIcon}>Middle</Button>
			<Button iconAfter={InfoIcon}>Right</Button>
		</ButtonGroup>
		<br />
		<br />
		<ButtonGroup size="xlarge" name="example-xlarge-block" block>
			<Button iconAfter={InfoIcon}>Left</Button>
			<Button iconAfter={InfoIcon}>Middle</Button>
			<Button iconAfter={InfoIcon}>Right</Button>
		</ButtonGroup>
	</>
);
