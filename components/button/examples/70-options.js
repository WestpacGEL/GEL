import React from 'react';

import { Button } from '../src';
import { HouseIcon } from '../../icon/src'; //until icon package is published

export default () => (
	<>
		<h3>Trim (no horizontal padding)</h3>
		<p>
			<Button appearance="link" trim>
				Trimmed link button
			</Button>
		</p>

		<h3>srOnlyText (screen reader only text)</h3>
		<p>
			<Button iconAfter={HouseIcon} srOnlyText>
				Screen reader only text
			</Button>
		</p>
	</>
);
