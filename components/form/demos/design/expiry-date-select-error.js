/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Form, FormGroup, Field, Fieldset, InputCluster, Item } from '@westpac/form';
import { Select } from '@westpac/text-input';
import { Container } from './_utils';
import { Playground } from '../../../../website/src/components/playground/macro';
import { ExpiryDateSelectPattern } from './expiry-date-select';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Container>
				<Form spacing="large">
					<ExpiryDateSelectPattern showErrors />
				</Form>
			</Container>
		</Playground>
	);
};

export default Demo;
