import React from 'react';

import { Global, useTheme } from '@westpac/core';

import {
	FormPod,
	FormPodActions,
	FormPodContactList,
	FormPodIndicator,
	FormPodPanel,
	FormPodPanelBody,
	FormPodPanelFooter,
} from '../src';
import { HeadsetIcon, LiveChatIcon } from '@westpac/icon';
import { Button } from '@westpac/button';

export default () => {
	const {
		colors,
		template: { wrapper },
	} = useTheme();

	// Contact detail data
	const contactItems = [
		{
			icon: HeadsetIcon,
			// iconColor: colors.muted,
			text: '1300 888 888',
			url: 'tel:1300888888',
			onClick: () => {},
		},
		// {
		// 	icon: LiveChatIcon,
		// 	iconColor: colors.muted,
		// 	text: 'LiveChat',
		// 	url: '#0',
		// 	onClick: () => {},
		// },
	];

	return (
		<>
			<Global
				styles={{
					// Lets apply a background to simulate being inside the Template component
					body: {
						backgroundColor: wrapper.backgroundColor,
					},
				}}
			/>

			<FormPod preheading="Preheading" heading="Heading">
				<FormPodPanel>
					<FormPodPanelBody>[PANEL CONTENT]</FormPodPanelBody>
					<FormPodPanelFooter
						left={<FormPodContactList items={contactItems} />}
						right={<FormPodIndicator />}
					/>
				</FormPodPanel>
				<FormPodActions
					primary={
						<>
							<Button appearance="primary" soft size="large" block={[true, false]}>
								Back
							</Button>
							<Button appearance="primary" size="large" block={[true, false]}>
								Next
							</Button>
						</>
					}
					secondary={
						<Button appearance="faint" soft size="large" block={[true, false]}>
							Cancel
						</Button>
					}
				/>
			</FormPod>
		</>
	);
};
