import React from 'react';

import { Global, useTheme } from '@westpac/core';

import { FormPod, FormPodPanel } from '../src';
import { TickIcon } from '../../icon/src'; //until icon package is published

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
				<FormPodPanel>[PANEL CONTENT]</FormPodPanel>
				{/*<FormPodFooter>
					[FOOTER CONTENT]
				</FormPodFooter>
				<FormPodActions primary="[PRIMARY CONTENT]" secondary="[SECONDARY CONTENT]" />*/}
			</FormPod>
		</>
	);
};
