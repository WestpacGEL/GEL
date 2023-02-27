import { jsx } from '@westpac/core';
import { Fragment, useState } from 'react';
import { components } from 'react-select';
import { Autocomplete } from '@westpac/autocomplete';
import { Form, FormGroup, Field, Fieldset, InputCluster, Item } from '@westpac/form';
import { TextInput, Select } from '@westpac/text-input';
import { Link, Container } from './_utils';
import { Playground } from '../../../../website/src/components/playground/macro';

const Input = ({ autoComplete, options, ...props }) => (
	<components.Input {...props} autoComplete="street-address" />
);

const Demo = ({ context, showCode, showDemo }) => {
	const [manual, setManual] = useState(false);

	const Hint = () => (
		<Fragment>
			Not a PO Box
			<br />
			<Link
				onClick={(e) => {
					e.preventDefault();
					setManual((manual) => !manual);
				}}
			>
				{manual ? 'Search for your address instead' : 'Enter manually instead'}
			</Link>
		</Fragment>
	);

	const Footer = (props) => (
		<Fragment {...props}>
			Can't find your address?{' '}
			<Link
				onClick={(e) => {
					e.preventDefault();
					setManual((manual) => !manual);
				}}
			>
				Enter it manually
			</Link>
		</Fragment>
	);

	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Container>
				<Form spacing="large">
					{manual ? (
						<Fragment>
							<FormGroup>
								<Fieldset legend="Street address" hint={Hint}>
									<InputCluster>
										<Item>
											<Field hideLabel label="Line 1 of 2">
												<TextInput size="large" autoComplete="street address-line1" />
											</Field>
										</Item>
										<Item>
											<Field hideLabel label="Line 2 of 2">
												<TextInput size="large" autoComplete="street address-line2" />
											</Field>
										</Item>
									</InputCluster>
								</Fieldset>
							</FormGroup>
							<FormGroup>
								<Field label="Suburb">
									<TextInput size="large" width={20} autoComplete="address-level2" />
								</Field>
							</FormGroup>
							<FormGroup>
								<Field label="State">
									<Select size="large" width={10} autoComplete="address-level1">
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
									<TextInput size="large" width={4} autoComplete="postal-code" />
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
									components={{ Input }}
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
