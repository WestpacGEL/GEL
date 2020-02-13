/** @jsx jsx */

import { jsx, Global, useBrand } from '@westpac/core';
import { FormPod, FormPodPanel, FormPodPanelBody } from '@westpac/form-pod';
import { TickIcon } from '@westpac/icon';

import { Intopia } from '../../../helpers/example/components/Intopia.js';
import { Playground } from '../../../website/site/components/playground/macro';

function Example({ context }) {
	const { COLORS } = useBrand();

	return (
		<Playground context={context}>
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
}

export default Example;
