/** @jsx jsx */

import { jsx, Global, useBrand } from '@westpac/core';
import { FormPod, FormPodPanel, FormPodPanelBody } from '@westpac/form-pod';
import { TickIcon } from '@westpac/icon';

import { Intopia } from '../../../helpers/example/components/Intopia.js';
import { Playground } from '../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	const { COLORS } = useBrand();

	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Intopia ignore />

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
		</Playground>
	);
};
