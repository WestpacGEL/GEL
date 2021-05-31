/** @jsx jsx */

import { jsx } from '@westpac/core';
import { TextInputWithButton } from '@westpac/text-input';
import { Title, Container } from '../../../../helpers/demos';
import { Playground } from '../../../../website/src/components/playground/macro';

import { UmbrellaIcon } from '@westpac/icon';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Container width={25}>
				<Title>Small</Title>
				<TextInputWithButton btnIcon={UmbrellaIcon} name="example-small" size="small" />
				<br />
				<br />
				<Title>Medium</Title>
				<TextInputWithButton btnIcon={UmbrellaIcon} name="example-medium" size="medium" />
				<br />
				<br />
				<Title>Large</Title>
				<TextInputWithButton btnIcon={UmbrellaIcon} name="example-large" size="large" />
				<br />
				<br />
				<Title>Extra large</Title>
				<TextInputWithButton btnIcon={UmbrellaIcon} name="example-xlarge" size="xlarge" />
			</Container>
		</Playground>
	);
};

export default Demo;
