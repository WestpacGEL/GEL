import React from 'react';
import { Box } from './_utils';

import { Form, FormGroup, FormInputs, FormInputsItem, FormLabel } from '../src';
import { FormInput } from '../../form-input/src';

export default () => (
	<>
		<h2>Default instance (no styling props)</h2>
		<Form>
			<FormGroup>
				<FormInputs>
					<FormInputsItem>
						<FormLabel htmlFor="example-1" sublabel>This is a sub-label</FormLabel>
						<FormInput />
					</FormInputsItem>
					<FormInputsItem>
						<FormLabel htmlFor="example-2" sublabel>This is a sub-label</FormLabel>
						<FormInput />
					</FormInputsItem>
				</FormInputs>
			</FormGroup>
		</Form>

		<hr />

		<h2>Horizontal mode</h2>
		<Form>
			<FormGroup>
				<FormInputs horizontal>
					<FormInputsItem>
						<FormLabel htmlFor="example-3" sublabel>This is a sub-label</FormLabel>
						<FormInput />
					</FormInputsItem>
					<FormInputsItem>
						<FormLabel htmlFor="example-4" sublabel>This is a sub-label</FormLabel>
						<FormInput />
					</FormInputsItem>
				</FormInputs>
			</FormGroup>
		</Form>
	</>
);
