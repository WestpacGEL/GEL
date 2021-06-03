/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Fragment } from 'react';
import { Autocomplete } from '@westpac/autocomplete';
import { Form, FormGroup, Field, Fieldset } from '@westpac/form';
import { Link } from './_utils';
import { Playground } from '../../../../website/src/components/playground/macro';

const Hint = () => (
	<Fragment>
		Not a PO Box
		<br />
		Start typing your address and select from the list or you can{' '}
		<Link>enter your adress maually</Link>
	</Fragment>
);

const Hint2 = () => (
	<Fragment>
		Start typing your address and select from the list or you can{' '}
		<Link>enter your adress maually</Link>
	</Fragment>
);

const Footer = (props) => (
	<Fragment {...props}>
		Can't find your address? <Link>Enter it manually</Link>
	</Fragment>
);

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Form spacing="large">
				<FormGroup>
					<Field label="Search for your home address" hint={Hint}>
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
				{/* FORK GOES HERE */}
				<Fieldset legend="Do you have a different mailing address?"></Fieldset>
				<FormGroup>
					<Field label="Search for your mailing address" hint={Hint2}>
						<Autocomplete
							size="large"
							footer={Footer}
							noOptionsMessage={() => 'None found'}
							options={[
								{ value: '', label: '123 Sesame Street, Hornsby, NSW, 2077 ' },
								{ value: '', label: '742 Evergreen Terrace , Chatswood, NSW, 2067 ' },
								{ value: '', label: '42 Wallaby Way, Sydney, NSW, 2000 ' },
								{ value: '', label: '124 Conch Street, Marrickville, NSW, 2204 ' },
							]}
						/>
					</Field>
				</FormGroup>
			</Form>
		</Playground>
	);
};

export default Demo;
