import React from 'react';
import { Button } from '../src';
import { HouseIcon } from '@westpac/icon';

export default () => (
	<>
		<h2>Trim</h2>
		<p>
			<Button appearance="link" isTrim>
				Trimmed link button
			</Button>
		</p>

		<hr />

		<h2>‘Screen reader only’ text mode</h2>
		<p>
			<Button iconAfter={HouseIcon} isSrOnlyText>
				Screen reader only text
			</Button>
		</p>
	</>
);
