import React from 'react';

import { Global, useTheme } from '@westpac/core';

import {
	FormPod,
	FormPodPanel,
	FormPodPanelBody,
	FormPodActions,
	FormPodActionsText,
} from '../src';
import { Button } from '@westpac/button';

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

			<FormPod preheading="Preheading" heading="Heading">
				<FormPodPanel>
					<FormPodPanelBody>[PANEL CONTENT]</FormPodPanelBody>
				</FormPodPanel>
				<FormPodActions
					isReverse
					primary={
						<>
							<Button appearance="primary" isSoft size="large" isBlock={[true, false]}>
								Find a branch
							</Button>
							<Button appearance="primary" isSoft size="large" isBlock={[true, false]}>
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
