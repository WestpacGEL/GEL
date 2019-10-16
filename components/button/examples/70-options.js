import React from 'react';
import { Button } from '../src';
import { HouseIcon } from '@westpac/icon';

export default () => (
	<>
		<h2>Trim</h2>

		<Button appearance="link" trim>
			Trimmed link button
		</Button>

		<hr />

		<h2>‘Screen reader only’ text mode</h2>

		<Button iconAfter={HouseIcon} srOnlyText>
			Screen reader only text
		</Button>
	</>
);
