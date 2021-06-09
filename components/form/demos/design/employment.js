/** @jsx jsx */

import { jsx } from '@westpac/core';
import { useState, Fragment } from 'react';
import { Form, FormGroup, Field } from '@westpac/form';
import { TextInput, Select } from '@westpac/text-input';
import { Alert } from '@westpac/alert';
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

const Wrapper = (props) => (
	<div css={{ borderTop: '1px solid #e8e8ed', padding: '2.25rem 0 0' }} {...props} />
);

const Demo = ({ context, showCode, showDemo }) => {
	const [employment, setEmployment] = useState();
	const [prevEmployment, setPrevEmployment] = useState();
	const [years, setYears] = useState();

	const employed = ['full', 'part', 'casual-seasonal', 'self'];

	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Form spacing="large">
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
							<Field label="Occupation">
								<Select size="large">
									<option>Select</option>
								</Select>
							</Field>
						</FormGroup>
						<FormGroup>
							<Field
								label={`${employment === 'self' ? 'Company' : 'Employer'}'s legal business name`}
							>
								<TextInput size="large" />
							</Field>
						</FormGroup>
						<FormGroup>
							<Field
								label={`Length of time with this ${employment === 'self' ? 'company' : 'employer'}`}
							>
								<Select
									value={years}
									onChange={(e) => {
										setYears(e.target.value);
									}}
									width={5}
									size="large"
								>
									<option>Select</option>
									<option value="1">1 year</option>
									<option value="2">2 years</option>
								</Select>
							</Field>
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
								label={`${
									prevEmployment === 'self' ? 'Company' : 'Employer'
								}'s legal business name`}
							>
								<TextInput size="large" />
							</Field>
						</FormGroup>
						<FormGroup>
							<Field
								label={`Length of time with this ${
									prevEmployment === 'self' ? 'company' : 'employer'
								}`}
							>
								<Select width={5} size="large">
									<option>Select</option>
									<option value="1">1 year</option>
									<option value="2">2 years</option>
								</Select>
							</Field>
						</FormGroup>
					</Wrapper>
				)}
			</Form>
		</Playground>
	);
};

export default Demo;
