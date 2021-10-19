/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Fragment, useState, useLayoutEffect, useRef } from 'react';
import { components } from 'react-select';
import { Autocomplete } from '@westpac/autocomplete';
import { Form, FormGroup, Field } from '@westpac/form';
import { Link, Container } from './_utils';
import { Playground } from '../../../../website/src/components/playground/macro';

import { AddressManualPattern } from './address-manual';

const Input = ({ autoComplete, options, ...props }) => (
	<components.Input {...props} autoComplete="street-address" />
);

const Demo = ({ context, showCode, showDemo }) => {
	const [manual, setManual] = useState(false);
	const streetLegendRef = useRef(null);

	useLayoutEffect(() => {
		if (manual) {
			setTimeout(() => streetLegendRef.current.focus());
		}
	}, [manual, streetLegendRef]);

	const StreetHint = () => (
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
						/* A11y: tabindex="-1" so fieldset can receive programmatic focus on auto/manual toggle */
						<AddressManualPattern
							streetHint={StreetHint}
							streetLegendTabIndex="-1"
							streetLegendRef={streetLegendRef}
						/>
					) : (
						<FormGroup>
							<Field label="Search for your home address" hint={StreetHint}>
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
