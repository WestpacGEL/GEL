/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Form, FormGroup, Field } from '@westpac/form';
import { TextInput } from '@westpac/text-input';
import { Container } from './_utils';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Container>
				<Form spacing="large">
					<FormGroup>
						<Field label="Given name">
							<TextInput size="large" width={30} autoComplete="given-name" />
						</Field>
					</FormGroup>
					<FormGroup>
						<Field label="Family name" error="Error message goes here if activated">
							<TextInput size="large" width={30} invalid autoComplete="family-name" />
						</Field>
					</FormGroup>
				</Form>
			</Container>
		</Playground>
	);
};

export default Demo;
