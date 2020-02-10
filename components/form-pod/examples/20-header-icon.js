/** @jsx jsx */

import { jsx, Global, useBrand } from '@westpac/core';
import { FormPod, FormPodPanel, FormPodPanelBody } from '@westpac/form-pod';
import { TickIcon } from '@westpac/icon';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	const { COLORS } = useBrand();

	return (
		<Playground brand={brand}>
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
