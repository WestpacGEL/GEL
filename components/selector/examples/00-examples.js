/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Selector, Option } from '@westpac/selector';
import { ChatPictogram } from '@westpac/pictogram';
import { AccessibilityIcon } from '@westpac/icon';
import { useState } from 'react';

function Example({ brand }) {
	const [controlled, setControlled] = useState();
	const [value, setValue] = useState('');
	const [index, setIndex] = useState(-1);

	return (
		<GEL brand={brand}>
			<h2>Default</h2>
			<Selector name="example-default">
				<Option value="one">Here is a label</Option>
				<Option value="two">Here is a label</Option>
				<Option value="three">Here is a label</Option>
			</Selector>

			<hr />

			<h2>No next indicator</h2>
			<Selector name="example-default" nextIndicator={false}>
				<Option value="one">Here is a label</Option>
				<Option value="two">Here is a label</Option>
				<Option value="three">Here is a label</Option>
			</Selector>

			<hr />

			<h2>Hint</h2>
			<Selector name="example-hint">
				<Option value="one" hint="This is some content to go in the product selector thing">
					Here is a label
				</Option>
				<Option value="two" hint="This is some content to go in the product selector thing">
					Here is a label
				</Option>
				<Option value="three">Here is a label</Option>
			</Selector>

			<hr />

			<h2>Composition</h2>
			<h3>Composed</h3>
			<Selector name="example-composed">
				<Option value="one">Here is a label</Option>
				<Option value="two">Here is a label</Option>
				<Option value="three">Here is a label</Option>
			</Selector>

			<h3>Data-driven</h3>
			<Selector
				name="example-data-driven"
				data={[
					{ text: 'Here is a label', value: 'one' },
					{ text: 'Here is a label', value: 'two' },
					{ text: 'Here is a label', value: 'three' },
				]}
			/>

			<hr />

			<h2>Default Value</h2>
			<h3>Index (integer)</h3>
			<Selector name="example-defaultvalue-index" defaultValue={0}>
				<Option>Here is a label</Option>
				<Option>Here is a label</Option>
				<Option>Here is a label</Option>
			</Selector>
			<h3>Key (string)</h3>
			<Selector name="example-defaultvalue-key" defaultValue={'three'}>
				<Option value="one">Here is a label</Option>
				<Option value="two">Here is a label</Option>
				<Option value="three">Here is a label</Option>
			</Selector>

			<hr />

			<h2>Custom onChange</h2>

			<h3>Controlled</h3>
			<div>
				<button type="button" onClick={() => setControlled('yes')}>
					Set to "yes"
				</button>{' '}
				<button type="button" onClick={() => setControlled('maybe')}>
					Set to "maybe"
				</button>{' '}
				<button type="button" onClick={() => setControlled('no')}>
					Set to "no"
				</button>{' '}
				<button type="button" onClick={() => setControlled('')}>
					reset
				</button>
			</div>
			<br />
			<Selector
				name="example-controlled"
				value={controlled}
				onChange={(e, v) => {
					console.log(`controlled: ${v}`);
					e.preventDefault();
					setControlled(v);
				}}
			>
				<Option value="yes">Yes</Option>
				<Option value="maybe">Maybe</Option>
				<Option value="no">No</Option>
			</Selector>

			<h3>Index (integer) value</h3>
			<Selector
				name="example-custom-index"
				value={index}
				onChange={(e, v) => {
					console.log(`custom-index: ${v}`);
					setIndex(v);
				}}
			>
				<Option>Here is a label</Option>
				<Option>Here is a label</Option>
				<Option>Here is a label</Option>
			</Selector>

			<h3>Key (string) value with default value</h3>
			<Selector
				name="example-custom-key"
				defaultValue="one"
				value={value}
				onChange={(e, v) => {
					console.log(`custom-key: ${v}`);
					setValue(v);
				}}
			>
				<Option value="one">Here is a label</Option>
				<Option value="two">Here is a label</Option>
				<Option value="three">Here is a label</Option>
			</Selector>
		</GEL>
	);
}

export default Example;
