/** @jsx jsx */

import { jsx } from '@westpac/core';
import { TextInput } from '@westpac/text-input';
import { Title } from '../../../../helpers/demos';
import { Playground } from '../../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Title>Small</Title>
			<TextInput size="small" />
			<Title>Medium</Title>
			<TextInput size="medium" />
			<Title>Large</Title>
			<TextInput size="large" />
			<Title>Xlarge</Title>
			<TextInput size="xlarge" />
		</Playground>
	);
};
