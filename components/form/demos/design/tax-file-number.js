/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { Fragment, useState } from 'react';
import { Form, Field, FormGroup } from '@westpac/form';
import { TextInput, Select } from '@westpac/text-input';
import { Alert } from '@westpac/alert';
import { Container } from './_utils';
import { Playground } from '../../../../website/src/components/playground/macro';

export const TaxFileNumberPattern = ({ showPrevious = false, showErrors = false }) => {
	const [value, setValue] = useState();
	const { BRAND } = useBrand();

	const error = showErrors ? 'Error message goes here if activated' : '';
	const invalid = showErrors;

	return (
		<Fragment>
			<FormGroup>
				<Field
					label="Tax File Number preference"
					hint="Providing your TFN or TFN exemption is not compulsory. However, if you do not provide it, tax may be withheld at the highest marginal rate plus the Medicare Levy on the interest earned on the account."
					error={error}
				>
					<Select
						size="large"
						value={value}
						onChange={(e) => setValue(e.target.value)}
						invalid={invalid}
					>
						<option value="">Select</option>
						{showPrevious && <option value="previous">Use my TFN supplied previously</option>}
						<option value="provide-now">I'll provide my TFN now</option>
						<option value="exemption">I've got an exemption reason</option>
						<option value="provide-later">I'll provide my TFN later</option>
					</Select>
				</Field>
			</FormGroup>

			{value === 'previous' && (
				<FormGroup>
					<Field label="TFN supplied previously">
						<Select size="large">
							<option>Select</option>
							<option value="******777">******777</option>
							<option value="******888">******888</option>
							<option value="******999">******999</option>
						</Select>
					</Field>
				</FormGroup>
			)}

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
							<option>Age, service, veterans and invalid pensioners</option>
							<option>Any other pensioners</option>
							<option>No TFN/Exemption to be quoted</option>
						</Select>
					</Field>
				</FormGroup>
			)}

			{value === 'provide-later' && (
				<Alert>
					You can provide your TFN at any time via phone or at a {BRAND.name} branch. In the
					meantime, please note, we may need to withhold tax from any interest you earn.
				</Alert>
			)}
		</Fragment>
	);
};

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Container>
				<Form spacing="large">
					<TaxFileNumberPattern />
				</Form>
			</Container>
		</Playground>
	);
};

export default Demo;
