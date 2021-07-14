/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Form, FormGroup, Field, Fieldset, InputCluster, Item } from '@westpac/form';
import { TextInput } from '@westpac/text-input';
import { Container } from './_utils';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Container>
				<Form spacing="large">
					<FormGroup>
						<Fieldset
							legend="Expiry date"
							hint="Example: 03 2020"
							error={['Day must be valid', 'Year must be valid']}
						>
							<InputCluster horizontal>
								<Item>
									<Field label="Month" subLabel>
										<TextInput type="number" size="large" width={2} invalid />
									</Field>
								</Item>
								<Item>
									<Field label="Year" subLabel>
										<TextInput type="number" size="large" width={4} invalid />
									</Field>
								</Item>
							</InputCluster>
						</Fieldset>
					</FormGroup>
				</Form>
			</Container>
		</Playground>
	);
};

export default Demo;
