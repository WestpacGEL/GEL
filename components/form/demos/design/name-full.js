/** @jsx jsx */

import { jsx, useMediaQuery } from '@westpac/core';
import { Form, FormGroup, Field, Fieldset } from '@westpac/form';
import { TextInput, Select } from '@westpac/text-input';
import { Fork, Content } from '@westpac/fork';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	const mq = useMediaQuery();
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Form spacing="large">
				<FormGroup>
					<Field label="Title name">
						<Select inline size="large">
							<option>Select</option>
							<option>Mrs</option>
							<option>Mr</option>
							<option>Miss</option>
							<option>Ms</option>
							<option>Dr</option>
						</Select>
					</Field>
				</FormGroup>
				<FormGroup>
					<Field label="Given name">
						<TextInput size="large" width={30} />
					</Field>
				</FormGroup>
				<FormGroup>
					<Field label="Middle name(s) (if any)">
						<TextInput size="large" width={30} />
					</Field>
				</FormGroup>
				<FormGroup>
					<Field label="Family name">
						<TextInput size="large" width={30} />
					</Field>
				</FormGroup>
				<Fieldset legend="Have you ever been known by a name different to the one provided above?">
					<Fork size="large" css={mq({ marginBottom: ['1.5rem', '1.875rem'] })}>
						<Content text="Yes">
							<FormGroup>
								<Field label="Other names">
									<TextInput size="large" width={30} />
								</Field>
							</FormGroup>
						</Content>
						<Content text="No" />
					</Fork>
				</Fieldset>
			</Form>
		</Playground>
	);
};

export default Demo;
