/** @jsx jsx */

import { GEL, jsx, Global, useBrand } from '@westpac/core';
import { FormPod, Panel, PanelBody, Actions, ActionsText } from '@westpac/form-pod';
import { Button } from '@westpac/button';
import { Fragment } from 'react';

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

			<FormPod preheading="Preheading" heading="Heading">
				<Panel>
					<PanelBody>[PANEL CONTENT]</PanelBody>
				</Panel>
				<Actions
					reverse
					primary={
						<Fragment>
							<Button appearance="primary" soft size="large" block={[true, false]}>
								Find a branch
							</Button>
							<Button appearance="primary" soft size="large" block={[true, false]}>
								Internet banking
							</Button>
						</Fragment>
					}
					secondary={<ActionsText>[TEXT CAN GO HERE]</ActionsText>}
				/>
			</FormPod>
		</GEL>
	);
}

export default Example;
