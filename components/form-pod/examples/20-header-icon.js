/** @jsx jsx */

import { GEL, jsx, Global, useBrand } from '@westpac/core';
import { FormPod, Panel, PanelBody } from '@westpac/form-pod';
import { TickIcon } from '@westpac/icon';

function Example({ brand }) {
	const { COLORS } = useBrand();

	return (
		<GEL brand={brand}>
			<Global
				styles={{
					// Lets apply a background to simulate being inside the Template component
					body: {
						backgroundColor: COLORS.background,
					},
				}}
			/>

			<FormPod preheading="Preheading" heading="Heading" icon={TickIcon}>
				<Panel>
					<PanelBody>[PANEL CONTENT]</PanelBody>
				</Panel>
			</FormPod>
		</GEL>
	);
}

export default Example;
