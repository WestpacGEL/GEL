/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { FormCheck, Option } from '@westpac/form-check';

const Wrapper = ({ inline, flipped, ...rest }) => <div {...rest} />;

function Example({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/form-check'] = {
		FormCheck: {
			styles: (styles) => ({
				...styles,
				outline: '5px solid red',
			}),
			component: Wrapper,
		},
		Option: {
			styles: (styles) => ({
				...styles,
				outline: '2px dotted green',
			}),
		},
		Label: {
			styles: (styles) => ({
				...styles,
				outline: '2px dashed blue',
			}),
		},
	};

	return (
		<GEL brand={overridesWithTokens}>
			<h2>Checkbox</h2>
			<FormCheck name="default">
				<Option value="1">Option 1</Option>
				<Option value="2">Option 2</Option>
				<Option value="3">Option 3</Option>
			</FormCheck>

			<h2>Radio</h2>
			<FormCheck type="radio" name="default-radio">
				<Option value="1">Option 1</Option>
				<Option value="2">Option 2</Option>
				<Option value="3">Option 3</Option>
			</FormCheck>

			<h2>Data driven</h2>
			<FormCheck
				name="example-checkbox-data"
				defaultValue="2"
				data={[
					{ value: '1', text: 'Option 1' },
					{ value: '2', text: 'Option 2' },
					{ value: '3', text: 'Option 3' },
				]}
			/>

			<FormCheck
				type="radio"
				name="example-radio-data"
				defaultValue="2"
				data={[
					{ value: '1', text: 'Option 1' },
					{ value: '2', text: 'Option 2' },
					{ value: '3', text: 'Option 3' },
				]}
			/>

			<h2>With overrides and component overrides</h2>
			<FormCheck
				name="default"
				defaultValue="2"
				overrides={{
					Label: {
						styles: (styles) => ({
							...styles,
							outline: '3px dotted hotpink',
						}),
					},
				}}
			>
				<Option value="1">Option 1</Option>
				<Option value="2">Option 2</Option>
				<Option value="3">Option 3</Option>
			</FormCheck>

			<FormCheck
				type="radio"
				name="example-radio-data"
				defaultValue="2"
				data={[
					{ value: '1', text: 'Option 1' },
					{ value: '2', text: 'Option 2' },
					{ value: '3', text: 'Option 3' },
				]}
				overrides={{
					Label: {
						styles: (styles) => ({
							...styles,
							outline: '3px dotted hotpink',
						}),
					},
				}}
			/>
		</GEL>
	);
}

export default Example;
