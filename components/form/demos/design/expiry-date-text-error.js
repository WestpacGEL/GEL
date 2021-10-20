/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Form } from '@westpac/form';
import { Container } from './_utils';
import { Playground } from '../../../../website/src/components/playground/macro';
import { ExpiryDateTextPattern } from './expiry-date-text';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Container>
				<Form spacing="large">
					<ExpiryDateTextPattern showErrors />
				</Form>
			</Container>
		</Playground>
	);
};

export default Demo;
