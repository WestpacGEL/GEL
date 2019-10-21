import React from 'react';
import { ButtonGroup, Button } from '../src';
import { InfoIcon } from '@westpac/icon';

export default () => (
	<>
		<h2>‘Screen reader only’ text mode</h2>
		<ButtonGroup name="example-buttongroup-srOnlyText">
			<Button iconAfter={InfoIcon} value="option-1" srOnlyText>
				Screen reader only
			</Button>
			<Button iconAfter={InfoIcon} value="option-2" srOnlyText>
				Screen reader only
			</Button>
			<Button iconAfter={InfoIcon} value="option-3" srOnlyText>
				Screen reader only
			</Button>
		</ButtonGroup>
	</>
);
