import React from 'react';
import { ButtonGroup, ButtonGroupButton } from '../src';

export default () => (
	<>
		<ButtonGroup name="example-checked">
			<ButtonGroupButton value="left">Left</ButtonGroupButton>
			<ButtonGroupButton value="middle" checked>
				Middle
			</ButtonGroupButton>
			<ButtonGroupButton value="right">Right</ButtonGroupButton>
		</ButtonGroup>
	</>
);
