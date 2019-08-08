import React from 'react';

import { Global, useTheme } from '@westpac/core';

import {
	FormPod,
	FormPodPanel,
	FormPodPanelBody,
	FormPodPanelFooter,
	FormPodContactList,
	FormPodIndicator,
	FormPodActions,
} from '../src';
import { Alert } from '../../alert/src';
// import { List } from '../../list/src'; //TODO: implement list
import { AlertIcon, HeadsetIcon, LiveChatIcon, RefreshIcon } from '../../icon/src';
import { Button } from '../../button/src';

export default () => {
	const { colors, template } = useTheme();

	// Contact detail data
	const contactItems = [
		{
			icon: HeadsetIcon,
			text: '1300 888 888',
			url: 'tel:1300888888',
			onClick: () => {},
		},
	];

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
				<FormPodPanel noBorderTop>
					<Alert appearance="danger" icon={AlertIcon}>
						{/* Nb. Tabindex="-1" for programmatically set focus */}
						<h3 style={{ marginTop: 0 }} tabIndex="-1">
							Please fix the 4 errors listed below
						</h3>

						{/* TODO: Use List component*/}
						<ul>
							<li>
								<a href="#title">Select a title</a>
							</li>
							<li>
								<a href="#given-name">Enter your given name</a>
							</li>
							<li>
								<a href="#family-name">Enter your family name</a>
							</li>
						</ul>
					</Alert>
					<FormPodPanelBody>[PANEL CONTENT]</FormPodPanelBody>
					<FormPodPanelFooter
						left={<FormPodContactList items={contactItems} />}
						right={<FormPodIndicator icon={RefreshIcon} />}
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
