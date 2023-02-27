import { jsx } from '@westpac/core';
import { useState, Fragment } from 'react';
import { Form, FormGroup, Field, Fieldset, InputCluster, Item } from '@westpac/form';
import { TextInput, Select } from '@westpac/text-input';
import { Alert } from '@westpac/alert';
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

const OccupationSelect = (props) => (
	<Select size="large" {...props}>
		<option>Select</option>
		<option>Accounting clerk / Branch accountant financial institution</option>
		<option>Actuarial clerk</option>
		<option>Articled clerk / Barrister / Solicitor / Legal Officer - corporation</option>
		<option>Booking clerk / TAB clerk / Ticket seller</option>
		<option>Business machine operator/Ledger keeper</option>
		<option>Charity collector / Debt collection clerk</option>
		<option>Clerk / Recordtaker</option>
		<option>Computer operator / Data entry</option>
		<option>Courier / Messenger</option>
		<option>Data processing - specialist manager</option>
		<option>Human resource clerk / Training personnel specialists</option>
		<option>Mail order clerk / Stock and purchasing clerk</option>
		<option>Mail sorter</option>
		<option>Office secretary / Stenographer</option>
		<option>Photocopying clerk</option>
		<option>Postal officer</option>
		<option>Production recording clerk</option>
		<option>Receptionist</option>
		<option>Service counter clerk</option>
		<option>Telephonist</option>
		<option>Transport / Despatch clerk / Customs agent</option>
		<option>Typist</option>
		<option>Word processing operator</option>
	</Select>
);

const Wrapper = (props) => (
	<div css={{ borderTop: '1px solid #e8e8ed', padding: '2.25rem 0 0' }} {...props} />
);

export const EmploymentSelectFullPattern = ({ showErrors = false }) => {
	const error = showErrors ? 'Error message goes here if activated' : '';
	const invalid = showErrors;

	const [employment, setEmployment] = useState();
	const [prevEmployment, setPrevEmployment] = useState();
	const [years, setYears] = useState();

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
						<Field label="Occupation category">
							<IndustrySelect />
						</Field>
					</FormGroup>
					<FormGroup>
						<Field label="Occupation">
							<OccupationSelect />
						</Field>
					</FormGroup>
					<FormGroup>
						<Field
							label={`${employment === 'self' ? 'Company' : 'Employer'}’s legal business name`}
							error={error}
						>
							<TextInput size="large" invalid={invalid} />
						</Field>
					</FormGroup>
					<FormGroup>
						<Fieldset
							legend={`Length of time with this ${employment === 'self' ? 'company' : 'employer'}`}
							error={error}
						>
							<InputCluster horizontal>
								<Item>
									<Field label="Years" subLabel>
										<Select
											value={years}
											onChange={(e) => {
												setYears(e.target.value);
											}}
											width={5}
											size="large"
										>
											<option>Select</option>
											<option value="1">1</option>
											<option value="2">2</option>
										</Select>
									</Field>
								</Item>
								<Item>
									<Field label="Months" subLabel>
										<Select width={5} size="large">
											<option>Select</option>
											<option value="1">1</option>
											<option value="2">2</option>
										</Select>
									</Field>
								</Item>
							</InputCluster>
						</Fieldset>
					</FormGroup>
				</Fragment>
			)}

			{years === '1' && (
				<Wrapper>
					<Alert>
						As you have only been with your current employer for less than x years, we need to
						capture your previous employment details.
					</Alert>
					<FormGroup>
						<Field label="Previous employment type">
							<EmploymentSelect
								value={prevEmployment}
								onChange={(e) => setPrevEmployment(e.target.value)}
							/>
						</Field>
					</FormGroup>
					<FormGroup>
						<Field label="Previous industry category">
							<IndustrySelect />
						</Field>
					</FormGroup>
					<FormGroup>
						<Field label="Previous occupation">
							<Select size="large">
								<option>Select</option>
							</Select>
						</Field>
					</FormGroup>
					<FormGroup>
						<Field
							label={`${prevEmployment === 'self' ? 'Company' : 'Employer'}’s legal business name`}
						>
							<TextInput size="large" />
						</Field>
					</FormGroup>
					<FormGroup>
						<Fieldset
							legend={`Length of time with this ${
								prevEmployment === 'self' ? 'company' : 'employer'
							}`}
						>
							<InputCluster horizontal>
								<Item>
									<Field label="Years" subLabel>
										<Select width={5} size="large">
											<option>Select</option>
											<option value="1">1</option>
											<option value="2">2</option>
										</Select>
									</Field>
								</Item>
								<Item>
									<Field label="Months" subLabel>
										<Select width={5} size="large">
											<option>Select</option>
											<option value="1">1</option>
											<option value="2">2</option>
										</Select>
									</Field>
								</Item>
							</InputCluster>
						</Fieldset>
					</FormGroup>
				</Wrapper>
			)}
		</Fragment>
	);
};

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Container>
				<Form spacing="large">
					<EmploymentSelectFullPattern />
				</Form>
			</Container>
		</Playground>
	);
};

export default Demo;
