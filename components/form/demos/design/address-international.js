/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Fragment } from 'react';
import { Form, FormGroup, Field, Fieldset, InputCluster, Item } from '@westpac/form';
import { Autocomplete } from '@westpac/autocomplete';
import { TextInput } from '@westpac/text-input';
import { Link } from './_utils';
import { Playground } from '../../../../website/src/components/playground/macro';

const Footer = (props) => (
	<Fragment {...props}>
		Can't find your country? <Link>Enter it manually</Link>
	</Fragment>
);

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Form spacing="large">
				<FormGroup>
					<Fieldset legend="Street">
						<InputCluster>
							<Item>
								<Field hideLabel label="Line 1 of 2">
									<TextInput size="large" />
								</Field>
							</Item>
							<Item>
								<Field hideLabel label="Line 2 of 2">
									<TextInput size="large" />
								</Field>
							</Item>
						</InputCluster>
					</Fieldset>
				</FormGroup>
				<FormGroup>
					<Field label="City, town or suburb">
						<TextInput size="large" width={20} />
					</Field>
				</FormGroup>
				<FormGroup>
					<Field label="State, province or region">
						<TextInput size="large" width={20} />
					</Field>
				</FormGroup>
				<FormGroup>
					<Field label="Postcode or Zip code">
						<TextInput size="large" width={5} />
					</Field>
				</FormGroup>
				<FormGroup>
					<Field
						label="Search for your country"
						hint="Start typing your country and select from the list"
					>
						<Autocomplete
							size="large"
							footer={Footer}
							noOptionsMessage={() => 'None found'}
							options={[
								{ value: '', label: 'United States' },
								{ value: '', label: 'China' },
								{ value: '', label: 'Japan' },
								{ value: '', label: 'Germany' },
								{ value: '', label: 'India' },
								{ value: '', label: 'United Kingdom' },
								{ value: '', label: 'France' },
								{ value: '', label: 'Italy' },
								{ value: '', label: 'Brazil' },
								{ value: '', label: 'Canada' },
								{ value: '', label: 'Russia' },
								{ value: '', label: 'South Korea' },
								{ value: '', label: 'Australia' },
								{ value: '', label: 'Spain' },
								{ value: '', label: 'Mexico' },
								{ value: '', label: 'Indonesia' },
								{ value: '', label: 'Netherlands' },
								{ value: '', label: 'Saudi Arabia' },
								{ value: '', label: 'Turkey' },
								{ value: '', label: 'Switzerland' },
								{ value: '', label: 'Poland' },
								{ value: '', label: 'Thailand' },
								{ value: '', label: 'Sweden' },
								{ value: '', label: 'Belgium' },
								{ value: '', label: 'Nigeria' },
							]}
						/>
					</Field>
				</FormGroup>
			</Form>
		</Playground>
	);
};

export default Demo;
