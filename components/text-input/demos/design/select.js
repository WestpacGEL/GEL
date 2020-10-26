/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Select } from '@westpac/text-input';
import { Title } from '../../../../helpers/demos';
import { Playground } from '../../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Title>Small</Title>
			<Select name="thing" size="small">
				<option>Select</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</Select>
			<Title>Medium</Title>
			<Select name="thing" size="medium">
				<option>Select</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</Select>
			<Title>Large</Title>
			<Select name="thing" size="large">
				<option>Select</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</Select>
			<Title>Xlarge</Title>
			<Select name="thing" size="xlarge">
				<option>Select</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</Select>
		</Playground>
	);
};
