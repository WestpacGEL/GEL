import React from 'react';

import { Global, useBrand } from '@westpac/core';

import { FormPod, FormPodPanel, FormPodPanelBody } from '../src';
import { TickIcon } from '@westpac/icon';

export default () => {
	const { COLORS } = useBrand();

	return (
		<>
			<Global
				styles={{
					// Lets apply a background to simulate being inside the Template component
					body: {
						backgroundColor: COLORS.background,
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
