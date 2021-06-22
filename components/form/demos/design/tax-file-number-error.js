/** @jsx jsx */

import { jsx } from '@westpac/core';
import { useState } from 'react';
import { Form, Field, FormGroup } from '@westpac/form';
import { TextInput, Select } from '@westpac/text-input';
import { Alert } from '@westpac/alert';
import { Container } from './_utils';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	const [value, setValue] = useState();

	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Container>
				<Form spacing="large">
					<FormGroup>
						<Field
							label="Tax File Number preference"
							hint="Providing your tax file number (TFN) is not compulsory. However, tax may be withheld if you do not quote your TFN or an exemption reason."
							error="Error message goes here if activated"
						>
							<Select size="large" value={value} onChange={(e) => setValue(e.target.value)} invalid>
								<option value="">Select</option>
								<option value="provide-now">I'll provide my TFN now</option>
								<option value="exemption">I've got an exemption reason</option>
								<option value="provide-later">I'll provide my TFN later</option>
							</Select>
						</Field>
					</FormGroup>

					{value === 'provide-now' && (
						<FormGroup>
							<Field label="Enter your Tax File Number (TFN)">
								<TextInput size="large" />
							</Field>
						</FormGroup>
					)}

					{value === 'exemption' && (
						<FormGroup>
							<Field label="Exemption reason">
								<Select size="large">
									<option>Select</option>
								</Select>
							</Field>
						</FormGroup>
					)}

					{value === 'provide-later' && (
						<Alert>
							You can provide your TFN at any time via phone or at a Westpac branch. In the
							meantime, please note, we may need to withhold tax from any interest you earn.
						</Alert>
					)}
				</Form>
			</Container>
		</Playground>
	);
};

export default Demo;
