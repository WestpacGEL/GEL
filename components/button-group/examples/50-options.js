import React from 'react';
import { ButtonGroup, ButtonGroupButton } from '../src';
import { InfoIcon } from '@westpac/icon';

export default () => (
	<>
		<h2>srOnlyText (screen reader only text)</h2>
		<ButtonGroup name="example-buttongroup-srOnlyText">
			<ButtonGroupButton iconAfter={InfoIcon} srOnlyText>
				Screen reader only
			</ButtonGroupButton>
			<ButtonGroupButton iconAfter={InfoIcon} srOnlyText>
				Screen reader only
			</ButtonGroupButton>
			<ButtonGroupButton iconAfter={InfoIcon} srOnlyText>
				Screen reader only
			</ButtonGroupButton>
		</ButtonGroup>
	</>
);
