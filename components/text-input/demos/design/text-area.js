/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Textarea } from '@westpac/text-input';
import { Title } from '../../../../helpers/demos';
import { Playground } from '../../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Title>Small</Title>
			<Textarea size="small" />
			<Title>Medium</Title>
			<Textarea size="medium" />
			<Title>Large</Title>
			<Textarea size="large" />
			<Title>Xlarge</Title>
			<Textarea size="xlarge" />
		</Playground>
	);
};
