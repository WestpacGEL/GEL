/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Fragment, useState } from 'react';
import { Autocomplete } from '@westpac/autocomplete';
import { Form, FormGroup, Field, Fieldset, InputCluster, Item } from '@westpac/form';
import { TextInput, Select } from '@westpac/text-input';
import { Link, Container } from './_utils';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	const [manual, setManual] = useState(false);

	const Hint = () => (
		<Fragment>
			Not a PO Box
			<br />
			<Link onClick={() => setManual((manual) => !manual)}>
				{manual ? 'Search for your address instead' : 'Enter manually instead'}
			</Link>
		</Fragment>
	);

	const Footer = (props) => (
		<Fragment {...props}>
			Can't find your address?{' '}
			<Link onClick={() => setManual((manual) => !manual)}>Enter it manually</Link>
		</Fragment>
	);

	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Container>
				<Form spacing="large">
					{manual ? (
						<Fragment>
							<FormGroup>
								<Fieldset legend="Home address" hint={Hint}>
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
								<Field label="Suburb">
									<TextInput size="large" width={20} />
								</Field>
							</FormGroup>
							<FormGroup>
								<Field label="State">
									<Select size="large" width={10}>
										<option>Select</option>
										<option>NSW</option>
										<option>VIC</option>
										<option>QLD</option>
										<option>ACT</option>
										<option>SA</option>
										<option>WA</option>
										<option>NT</option>
									</Select>
								</Field>
							</FormGroup>
							<FormGroup>
								<Field label="Postcode">
									<TextInput size="large" width={4} />
								</Field>
							</FormGroup>
						</Fragment>
					) : (
						<FormGroup>
							<Field
								label="Search for your home address"
								hint={Hint}
								error="Error message goes here if activated"
							>
								<Autocomplete
									size="large"
									footer={Footer}
									options={[
										{ value: '', label: '123 Sesame Street, Hornsby, NSW, 2077 ' },
										{ value: '', label: '742 Evergreen Terrace , Chatswood, NSW, 2067 ' },
										{ value: '', label: '42 Wallaby Way, Sydney, NSW, 2000 ' },
										{ value: '', label: '124 Conch Street, Marrickville, NSW, 2204 ' },
									]}
									noOptionsMessage={() => 'None found'}
								/>
							</Field>
						</FormGroup>
					)}
				</Form>
			</Container>
		</Playground>
	);
};

export default Demo;
