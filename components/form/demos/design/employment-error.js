/** @jsx jsx */

import { jsx } from '@westpac/core';
import { useState, Fragment } from 'react';
import { Form, FormGroup, Field } from '@westpac/form';
import { TextInput, Select } from '@westpac/text-input';
import { Alert } from '@westpac/alert';
import { Container } from './_utils';
import { Playground } from '../../../../website/src/components/playground/macro';
import { EmploymentPattern } from './employment';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Container>
				<Form spacing="large">
					<EmploymentPattern showErrors />
				</Form>
			</Container>
		</Playground>
	);
};

export default Demo;
