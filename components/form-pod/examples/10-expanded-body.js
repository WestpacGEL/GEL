import React from 'react';

import { Global, useTheme } from '@westpac/core';

import { FormPod, FormPodPanel, FormPodPanelBody } from '../src';

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
			<FormPod preheading="Preheading" heading="Heading">
				<FormPodPanel>
					<FormPodPanelBody expanded>[PANEL CONTENT]</FormPodPanelBody>
				</FormPodPanel>
			</FormPod>
		</>
	);
};
