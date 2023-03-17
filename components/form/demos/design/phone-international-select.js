import { jsx } from '@westpac/core';
import { Form, FormGroup, Fieldset } from '@westpac/form';
import { InputGroup } from '@westpac/input-group';
import { Select } from '@westpac/text-input';
import { Container } from './_utils';
import { Playground } from '../../../../website/src/components/playground/macro';

const PhoneInternationalSelectPattern = () => {
	return (
		<FormGroup>
			<Fieldset legend="Phone number">
				<InputGroup
					label="Number"
					size="large"
					before={
						<Select
							label="Code"
							data={[
								{ text: 'Select code', value: '' },
								{ text: 'AU +61', value: 'AU +61' },
							]}
							value="AU +61"
						/>
					}
				/>
			</Fieldset>
		</FormGroup>
	);
};

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Container>
				<Form spacing="large">
					<PhoneInternationalSelectPattern />
				</Form>
			</Container>
		</Playground>
	);
};

export default Demo;
