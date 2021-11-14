/** @jsx jsx */

import { jsx } from '@westpac/core';
import { useState, Fragment } from 'react';
import { Autocomplete } from '@westpac/autocomplete';
import { Form, FormGroup, Field } from '@westpac/form';
import { Select } from '@westpac/text-input';
import { Container } from './_utils';
import { Playground } from '../../../../website/src/components/playground/macro';

const EmploymentSelect = (props) => (
	<Select width={10} size="large" {...props}>
		<option>Select</option>
		<option value="full">Full time</option>
		<option value="part">Part time</option>
		<option value="casual-seasonal">Casual/Seasonal</option>
		<option value="self">Self employed</option>
		<option value="retired">Retired</option>
		<option value="home-duties">Home duties</option>
		<option value="social-security">Social Security</option>
		<option value="unemployed">Unemployed</option>
	</Select>
);

const IndustrySelect = (props) => (
	<Select size="large" {...props}>
		<option>Select</option>
		<option value="">Arts / Entertainment / Sport / Leisure</option>
		<option value="">Business Professional / Consultant</option>
		<option value="">Catering / Hospitality / Food Production</option>
		<option value="">Clerical</option>
		<option value="">Construction / Mechanical &amp; Transport</option>
		<option value="">Education / Knowledge</option>
		<option value="">Farm / Garden / Rural Services</option>
		<option value="">Finance / Retail Sales / Real Estate</option>
		<option value="">Machine Operation / Process Work</option>
		<option value="">Medical / Health</option>
		<option value="">Personal Services / Miscellaneous</option>
		<option value="">Public Services / Legal / Emergency &amp; Security</option>
		<option value="">Retired / Unpaid / Welfare recipients</option>
		<option value="">Science / Engineering/ Technology</option>
		<option value="">Trades</option>
	</Select>
);

const OccupationAutocomplete = (props) => (
	<Autocomplete
		size="large"
		options={[
			{
				value: '',
				label: 'Accounting clerk / Branch accountant financial institution',
			},
			{ value: '', label: 'Actuarial clerk' },
			{
				value: '',
				label: 'Articled clerk / Barrister / Solicitor / Legal Officer - corporation',
			},
			{ value: '', label: 'Booking clerk / TAB clerk / Ticket seller' },
			{ value: '', label: 'Business machine operator/Ledger keeper' },
			{ value: '', label: 'Charity collector / Debt collection clerk' },
			{ value: '', label: 'Clerk / Recordtaker' },
			{ value: '', label: 'Computer operator / Data entry' },
			{ value: '', label: 'Courier / Messenger' },
			{ value: '', label: 'Data processing - specialist manager' },
			{ value: '', label: 'Human resource clerk / Training personnel specialists' },
			{ value: '', label: 'Mail order clerk / Stock and purchasing clerk' },
			{ value: '', label: 'Mail sorter' },
			{ value: '', label: 'Office secretary / Stenographer' },
			{ value: '', label: 'Photocopying clerk' },
			{ value: '', label: 'Postal officer' },
			{ value: '', label: 'Production recording clerk' },
			{ value: '', label: 'Receptionist' },
			{ value: '', label: 'Service counter clerk' },
			{ value: '', label: 'Telephonist' },
			{ value: '', label: 'Transport / Despatch clerk / Customs agent' },
			{ value: '', label: 'Typist' },
			{ value: '', label: 'Word processing operator' },
		]}
		noOptionsMessage={() => 'None found'}
		{...props}
	/>
);

const EmploymentAutocompletePattern = () => {
	const [employment, setEmployment] = useState();

	const employed = ['full', 'part', 'casual-seasonal', 'self'];

	return (
		<Fragment>
			<FormGroup>
				<Field label="Employment type">
					<EmploymentSelect value={employment} onChange={(e) => setEmployment(e.target.value)} />
				</Field>
			</FormGroup>

			{employed.includes(employment) && (
				<Fragment>
					<FormGroup>
						<Field label="Industry category">
							<IndustrySelect />
						</Field>
					</FormGroup>
					<FormGroup>
						<Field label="Search for your occupation">
							<OccupationAutocomplete />
						</Field>
					</FormGroup>
				</Fragment>
			)}
		</Fragment>
	);
};

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Container>
				<Form spacing="large">
					<EmploymentAutocompletePattern />
				</Form>
			</Container>
		</Playground>
	);
};

export default Demo;
