/** @jsx jsx */

import { jsx } from '@westpac/core';
import {
	Form,
	FormGroup,
	FormLabel,
	Field,
	Hint,
	InputCluster,
	Item,
	ErrorMessage,
} from '@westpac/form';
import { TextInput } from '@westpac/text-input';
import { Container } from './_utils';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Container>
				<Form spacing="large">
					<FormGroup>
						<FormLabel htmlFor="phone-number">Phone number</FormLabel>
						<Hint>Enter your country code (e.g. +61) and your number</Hint>
						<ErrorMessage message="Enter your number in either format of 2135096995, 213-509-6995, or (213) 509-6995" />
						<div id="phone-number">
							<InputCluster horizontal>
								<Item>
									<Field label="Code" subLabel>
										<TextInput
											type="tel"
											size="large"
											width={4}
											defaultValue="+891"
											autoComplete="tel-country-code"
										/>
									</Field>
								</Item>
								<Item>
									<Field label="Phone number" subLabel>
										<TextInput
											type="tel"
											size="large"
											width={10}
											invalid
											defaultValue="213-5096995"
											autoComplete="tel-national"
										/>
									</Field>
								</Item>
							</InputCluster>
						</div>
					</FormGroup>
				</Form>
			</Container>
		</Playground>
	);
};

export default Demo;
