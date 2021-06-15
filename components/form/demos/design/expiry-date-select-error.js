/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Form, FormGroup, Field, Fieldset, InputCluster, Item } from '@westpac/form';
import { Select } from '@westpac/text-input';
import { Container } from './_utils';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Container>
				<Form spacing="large">
					<FormGroup>
						<Fieldset legend="Expiry date" error="Error message goes here if activated">
							<InputCluster horizontal>
								<Item>
									<Field label="Month" subLabel>
										<Select inline size="large" invalid>
											<option value="">Select</option>
											<option value="1">01</option>
											<option value="2">02</option>
											<option value="3">03</option>
											<option value="4">04</option>
											<option value="5">05</option>
											<option value="6">06</option>
											<option value="7">07</option>
											<option value="8">08</option>
											<option value="9">09</option>
											<option value="10">10</option>
											<option value="11">11</option>
											<option value="12">12</option>
										</Select>
									</Field>
								</Item>
								<Item>
									<Field label="Year" subLabel>
										<Select inline size="large">
											<option value="">Select</option>
											<option value="2018">2018</option>
											<option value="2019">2019</option>
											<option value="2020">2020</option>
											<option value="2021">2021</option>
											<option value="2022">2022</option>
											<option value="2023">2023</option>
											<option value="2024">2024</option>
											<option value="2025">2025</option>
										</Select>
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
