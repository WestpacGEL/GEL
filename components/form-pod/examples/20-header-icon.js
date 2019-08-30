import React from 'react';

import { Global, useTheme } from '@westpac/core';

import { FormPod, FormPodPanel, FormPodPanelBody } from '../src';
import { TickIcon } from '@westpac/icon';

export default () => {
	const { template } = useTheme();

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

			<FormPod icon={TickIcon} preheading="Preheading" heading="Heading">
				<FormPodPanel>
					<FormPodPanelBody>[PANEL CONTENT]</FormPodPanelBody>
				</FormPodPanel>
			</FormPod>
		</>
	);
};
