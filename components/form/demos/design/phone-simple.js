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
						<Field label="Home number" hint="Include the 2 digit area code">
							<TextInput type="tel" size="large" width={20} autoComplete="tel" />
						</Field>
					</FormGroup>
					<FormGroup>
						<Field label="Work number" hint="Include the 2 digit area code">
							<TextInput type="tel" size="large" width={20} autoComplete="tel" />
						</Field>
					</FormGroup>
					<FormGroup>
						<Field label="Mobile number">
							<TextInput type="tel" size="large" width={20} autoComplete="tel" />
						</Field>
					</FormGroup>
				</Form>
			</Container>
		</Playground>
	);
};

export default Demo;
