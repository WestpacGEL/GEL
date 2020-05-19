/** @jsx jsx */

import { jsx } from '@westpac/core';
import { InputGroup, Before } from '@westpac/input-group';
import { Playground } from '../../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<InputGroup>
				<Before inputType="label" data="AUS $" />
			</InputGroup>
		</Playground>
	);
};
