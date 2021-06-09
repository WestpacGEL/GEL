/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Form, FormGroup, Field } from '@westpac/form';
import { TextInput } from '@westpac/text-input';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Form spacing="large">
				<FormGroup>
					<Field label="Email address">
						<TextInput type="email" size="large" width={30} defaultValue="gel@westpac.com.au" />
					</Field>
				</FormGroup>
				<FormGroup>
					<Field
						label="Confirm email address"
						error="Emails did not match. PLease enter the same email in both fields"
					>
						<TextInput
							type="email"
							size="large"
							width={30}
							invalid
							defaultValue="gel@westpacc.com.au"
						/>
					</Field>
				</FormGroup>
			</Form>
		</Playground>
	);
};

export default Demo;
