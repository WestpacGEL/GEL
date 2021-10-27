/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Form } from '@westpac/form';
import { Container } from './_utils';
import { Playground } from '../../../../website/src/components/playground/macro';
import { NameSimplePattern } from './name-simple';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Container>
				<Form spacing="large">
					<NameSimplePattern showErrors />
				</Form>
			</Container>
		</Playground>
	);
};

export default Demo;
