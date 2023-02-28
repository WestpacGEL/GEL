import { jsx, useMediaQuery } from '@westpac/core';
import { Form } from '@westpac/form';
import { Container } from './_utils';
import { Playground } from '../../../../website/src/components/playground/macro';
import { NameFullPattern } from './name-full';

const Demo = ({ context, showCode, showDemo }) => {
	const mq = useMediaQuery();
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Container>
				<Form spacing="large">
					<NameFullPattern showErrors />
				</Form>
			</Container>
		</Playground>
	);
};

export default Demo;
