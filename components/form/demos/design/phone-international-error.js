import { jsx } from '@westpac/core';
import { Form } from '@westpac/form';
import { Container } from './_utils';
import { Playground } from '../../../../website/src/components/playground/macro';
import { PhoneInternationalPattern } from './phone-international';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Container>
				<Form spacing="large">
					<PhoneInternationalPattern showErrors />
				</Form>
			</Container>
		</Playground>
	);
};

export default Demo;
