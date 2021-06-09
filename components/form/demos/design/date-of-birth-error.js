/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Form, FormGroup, Field, Fieldset, InputCluster, Item } from '@westpac/form';
import { TextInput } from '@westpac/text-input';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Form spacing="large">
				<FormGroup>
					<Fieldset
						legend="Date of birth"
						hint="For example 31 3 1980"
						hintIdPrefix="dob-hint"
						ariadescribedby="dob-hint"
						error={['Day must be valid', 'Year must be valid']}
					>
						<InputCluster horizontal>
							<Item>
								<Field label="Day" subLabel>
									<TextInput type="number" size="large" width={2} invalid defaultValue={33} />
								</Field>
							</Item>
							<Item>
								<Field label="Month" subLabel>
									<TextInput type="number" size="large" width={2} defaultValue={'02'} />
								</Field>
							</Item>
							<Item>
								<Field label="Year" subLabel>
									<TextInput type="number" size="large" width={4} invalid defaultValue={3000} />
								</Field>
							</Item>
						</InputCluster>
					</Fieldset>
				</FormGroup>
			</Form>
		</Playground>
	);
};

export default Demo;
