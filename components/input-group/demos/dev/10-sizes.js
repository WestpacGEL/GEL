import { jsx } from '@westpac/core';
import { useState } from 'react';
import { InputGroup, Before, After } from '@westpac/input-group';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<h2>Small</h2>
			<InputGroup name="example-small-text" label="Total amount" size="small">
				<Before inputType="text" data="AUS $" />
				<After inputType="button" data="Go" />
			</InputGroup>

			<h2>Medium</h2>
			<InputGroup name="example-medium-text" label="Total amount" size="medium">
				<Before inputType="text" data="AUS $" />
				<After inputType="button" data="Go" />
			</InputGroup>
			<br />

			<h2>Large</h2>
			<InputGroup name="example-large-text" label="Total amount" size="large">
				<Before inputType="text" data="AUS $" />
				<After inputType="button" data="Go" />
			</InputGroup>
			<br />

			<h2>XLarge</h2>
			<InputGroup name="example-xlarge-text" label="Total amount" size="xlarge">
				<Before inputType="text" data="AUS $" />
				<After inputType="button" data="Go" />
			</InputGroup>
			<br />
		</Playground>
	);
};

export default Demo;
