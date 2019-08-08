import React from 'react';

import { Global, useTheme } from '@westpac/core';

import {
	FormPod,
	FormPodPanel,
	FormPodPanelBody,
	FormPodActions,
	FormPodActionsText,
} from '../src';
import { HeadsetIcon, LiveChatIcon, RefreshIcon } from '../../icon/src'; //until icon package is published
import { Button } from '../../button/src'; //until icon package is published

export default () => {
	const { colors, template } = useTheme();

	return (
		<>
			<Global
				styles={{
					// Lets apply a background to simulate being inside the Template component
					body: {
						backgroundColor: template.wrapper.backgroundColor,
					},
				}}
			/>

			<FormPod preheading="Preheading" heading="Heading">
				<FormPodPanel>
					<FormPodPanelBody>[PANEL CONTENT]</FormPodPanelBody>
				</FormPodPanel>
				<FormPodActions
					reverse
					primary={
						<>
							<Button appearance="primary" soft size="large" block={[true, false]}>
								Find a branch
							</Button>
							<Button appearance="primary" soft size="large" block={[true, false]}>
								Internet banking
							</Button>
						</>
					}
					secondary={<FormPodActionsText>[TEXT CAN GO HERE]</FormPodActionsText>}
				/>
			</FormPod>
		</>
	);
};
