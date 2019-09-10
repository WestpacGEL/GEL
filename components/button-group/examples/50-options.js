import React from 'react';
import { ButtonGroup, ButtonGroupButton } from '../src';
import { InfoIcon } from '@westpac/icon';

export default () => (
	<>
		<h2>‘Screen reader only’ text mode</h2>
		<ButtonGroup name="example-buttongroup-srOnlyText">
			<ButtonGroupButton iconAfter={InfoIcon} isSrOnlyText>
				Screen reader only
			</ButtonGroupButton>
			<ButtonGroupButton iconAfter={InfoIcon} isSrOnlyText>
				Screen reader only
			</ButtonGroupButton>
			<ButtonGroupButton iconAfter={InfoIcon} isSrOnlyText>
				Screen reader only
			</ButtonGroupButton>
		</ButtonGroup>
	</>
);
