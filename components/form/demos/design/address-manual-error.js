import { jsx } from '@westpac/core';
import { Form } from '@westpac/form';

import { Container, FormHeading } from './_utils';
import { Playground } from '../../../../website/src/components/playground/macro';
import { AddressManualPattern } from './address-manual';
import { AddressManualMailingPattern } from './address-manual-mailing';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Container>
				<Form spacing="large">
					{/* A11y: tabindex="0" so screen readers announce the heading in Forms mode */}
					<FormHeading tabIndex="0">Home address</FormHeading>
					<AddressManualPattern showErrors />
					<AddressManualMailingPattern showErrors />
				</Form>
			</Container>
		</Playground>
	);
};

export default Demo;
