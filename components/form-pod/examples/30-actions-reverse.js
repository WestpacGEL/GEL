/** @jsx jsx */

import { jsx, Global, useBrand } from '@westpac/core';
import {
	FormPod,
	FormPodPanel,
	FormPodPanelBody,
	FormPodActions,
	FormPodActionsText,
} from '@westpac/form-pod';
import { Button } from '@westpac/button';
import { Fragment } from 'react';

import { Intopia } from '../../../helpers/example/components/Intopia.js';
import { Playground } from '../../../website/src/components/playground/macro';

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

			<FormPod preheading="Preheading" heading="Heading">
				<FormPodPanel>
					<FormPodPanelBody>[PANEL CONTENT]</FormPodPanelBody>
				</FormPodPanel>
				<FormPodActions
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
					secondary={<FormPodActionsText>[TEXT CAN GO HERE]</FormPodActionsText>}
				/>
			</FormPod>
		</Playground>
	);
}

export default Example;
