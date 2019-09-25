import React from 'react';
import { ButtonGroup, Button } from '../src';
import { InfoIcon } from '@westpac/icon';

export default () => (
	<>
		<h2>‘Screen reader only’ text mode</h2>
		<ButtonGroup name="example-buttongroup-srOnlyText">
			<Button iconAfter={InfoIcon} srOnlyText>
				Screen reader only
			</Button>
			<Button iconAfter={InfoIcon} srOnlyText>
				Screen reader only
			</Button>
			<Button iconAfter={InfoIcon} srOnlyText>
				Screen reader only
			</Button>
		</ButtonGroup>
	</>
);
