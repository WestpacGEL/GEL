import React from 'react';

import { Global, useBrand } from '@westpac/core';

import { FormPod, FormPodPanel, FormPodPanelBody } from '../src';

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
			<FormPod preheading="Preheading" heading="Heading">
				<FormPodPanel>
					<FormPodPanelBody expanded>[PANEL CONTENT]</FormPodPanelBody>
				</FormPodPanel>
			</FormPod>
		</>
	);
};
