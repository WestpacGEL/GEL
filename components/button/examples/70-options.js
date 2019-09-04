import React from 'react';
import { Button } from '../src';
import { HouseIcon } from '@westpac/icon';

export default () => (
	<>
		<h2>Trim</h2>
		<p>
			<Button appearance="link" trim>
				Trimmed link button
			</Button>
		</p>

		<hr />

		<h2>srOnlyText (screen reader only text)</h2>
		<p>
			<Button iconAfter={HouseIcon} srOnlyText>
				Screen reader only text
			</Button>
		</p>
	</>
);
