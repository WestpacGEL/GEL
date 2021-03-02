/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Switch } from '@westpac/switch';
import { Title } from '../../../../helpers/demos';
import { Playground } from '../../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Title>Small</Title>
			<Switch name="example-small" label="Small: 30px" size="small" />
			<br />
			<br />
			<Title>Medium</Title>
			<Switch name="example-medium" label="Medium: 36px" size="medium" />
			<br />
			<br />
			<Title>Large</Title>
			<Switch name="example-large" label="Large: 42px" size="large" />
			<br />
			<br />
			<Title>Extra large</Title>
			<Switch name="example-xlarge" label="Extra large: 48px" size="xlarge" />
		</Playground>
	);
};
