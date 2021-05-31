/** @jsx jsx */

import { jsx } from '@westpac/core';
import { InputGroup, Before, After } from '@westpac/input-group';
import { Playground } from '../../../../website/src/components/playground/macro';
import { Container } from '../../../../helpers/demos';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Container width={50}>
				<InputGroup name="example-text" label="Total amount" size="small">
					<Before inputType="text" data="AUS $" />
					<After inputType="text" data=".00" />
				</InputGroup>
				<br />
				<InputGroup name="example-text" label="Total amount" size="medium">
					<Before inputType="text" data="AUS $" />
					<After inputType="text" data=".00" />
				</InputGroup>
				<br />
				<InputGroup name="example-text" label="Total amount" size="large">
					<Before inputType="text" data="AUS $" />
					<After inputType="text" data=".00" />
				</InputGroup>
				<br />
				<InputGroup name="example-text" label="Total amount" size="xlarge">
					<Before inputType="text" data="AUS $" />
					<After inputType="text" data=".00" />
				</InputGroup>
			</Container>
		</Playground>
	);
};

export default Demo;
