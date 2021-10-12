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
							legend="Date of birth"
							hint="Example: 31 3 1980"
							error={['Day must be valid', 'Year must be valid']}
						>
							<InputCluster horizontal>
								<Item>
									<Field label="Day" subLabel>
										<TextInput
											type="number"
											size="large"
											width={2}
											invalid
											defaultValue={33}
											autoComplete="bday-day"
										/>
									</Field>
								</Item>
								<Item>
									<Field label="Month" subLabel>
										<TextInput
											type="number"
											size="large"
											width={2}
											defaultValue={'02'}
											autoComplete="bday-month"
										/>
									</Field>
								</Item>
								<Item>
									<Field label="Year" subLabel>
										<TextInput
											type="number"
											size="large"
											width={4}
											invalid
											defaultValue={3000}
											autoComplete="bday-year"
										/>
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
