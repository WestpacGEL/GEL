/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Form } from '@westpac/form';
import { Container } from './_utils';
import { Playground } from '../../../../website/src/components/playground/macro';
import { EmploymentSelectFullPattern } from './employment-select-full';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Container>
				<Form spacing="large">
					<EmploymentSelectFullPattern showErrors />
				</Form>
			</Container>
		</Playground>
	);
};

export default Demo;
