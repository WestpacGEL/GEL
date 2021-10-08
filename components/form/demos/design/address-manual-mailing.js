/** @jsx jsx */

import { jsx, useMediaQuery } from '@westpac/core';
import { Form, Fieldset } from '@westpac/form';
import { Fork, Content } from '@westpac/fork';
import { Container } from './_utils';
import { Playground } from '../../../../website/src/components/playground/macro';
import { AddressManual } from './address-manual';

const Demo = ({ context, showCode, showDemo }) => {
	const mq = useMediaQuery();

	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Container>
				<Form spacing="large">
					<Fieldset legend="Do you have a different mailing address?">
						<Fork size="large" css={mq({ marginBottom: ['1.5rem', '1.875rem'] })}>
							<Content text="Yes">
								<AddressManual mailing />
							</Content>
							<Content text="No" />
						</Fork>
					</Fieldset>
				</Form>
			</Container>
		</Playground>
	);
};

export default Demo;
