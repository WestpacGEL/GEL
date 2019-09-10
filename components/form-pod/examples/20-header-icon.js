import React from 'react';

import { Global, useTheme } from '@westpac/core';

import { FormPod, FormPodPanel, FormPodPanelBody } from '../src';
import { TickIcon } from '@westpac/icon';

export default () => {
	const {
		template: { wrapper },
	} = useTheme();

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

			<FormPod preheading="Preheading" heading="Heading" icon={TickIcon}>
				<FormPodPanel>
					<FormPodPanelBody>[PANEL CONTENT]</FormPodPanelBody>
				</FormPodPanel>
			</FormPod>
		</>
	);
};
