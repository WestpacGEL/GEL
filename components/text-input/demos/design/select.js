/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Select } from '@westpac/text-input';
import { Title } from '../../../../helpers/demos';
import { Playground } from '../../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Title>Small</Title>
			<Select name="example-small" size="small">
				<option>Select</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</Select>
			<br />
			<Title>Medium</Title>
			<Select name="example-medium" size="medium">
				<option>Select</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</Select>
			<br />
			<Title>Large</Title>
			<Select name="example-large" size="large">
				<option>Select</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</Select>
			<br />
			<Title>Xlarge</Title>
			<Select name="example-xlarge" size="xlarge">
				<option>Select</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</Select>
		</Playground>
	);
};
