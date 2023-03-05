import { GEL, jsx } from '@westpac/core';
import { Selector, Option } from '@westpac/selector';
import { useState } from 'react';

function Example({ brand }) {
	const [selectorValue, setSelectorValue] = useState(['1', '3']);

	const [loneRanger1, setLoneRanger1] = useState(false);
	const [loneRanger2, setLoneRanger2] = useState(true);

	return (
		<GEL brand={brand}>
			<h2>Default</h2>
			<Selector name="example-default">
				<Option value="1">Here is a label</Option>
				<Option value="2">Here is a label</Option>
				<Option value="3">Here is a label</Option>
			</Selector>

			<hr />

			<h2>Types</h2>

			<h3>Button</h3>
			<Selector type="button" name="example-button">
				<Option value="1">Here is button text</Option>
				<Option value="2">Here is button text</Option>
				<Option value="3">Here is button text</Option>
			</Selector>

			<h3>Link</h3>
			<Selector type="link">
				<Option href="#0">Here is link text</Option>
				<Option href="#0">Here is link text</Option>
				<Option href="#0">Here is link text</Option>
			</Selector>

			<h3>Radio</h3>
			<Selector type="radio" name="example-radio">
				<Option value="1">Here is a label</Option>
				<Option value="2">Here is a label</Option>
				<Option value="3">Here is a label</Option>
			</Selector>

			<h3>Checkbox</h3>
			<Selector type="checkbox" name="example-checkbox">
				<Option value="1">Here is a label</Option>
				<Option value="2">Here is a label</Option>
				<Option value="3">Here is a label</Option>
			</Selector>

			<hr />

			<h2>Default value</h2>

			<h3>Button</h3>
			<Selector type="button" name="example-button-defaultvalue" defaultValue="2">
				<Option value="1">Here is button text</Option>
				<Option value="2">Here is button text</Option>
				<Option value="3">Here is button text</Option>
			</Selector>

			<h3>Radio</h3>
			<Selector type="radio" name="example-radio-defaultvalue" defaultValue="2">
				<Option value="1">Here is a label</Option>
				<Option value="2">Here is a label</Option>
				<Option value="3">Here is a label</Option>
			</Selector>

			<h3>Checkbox</h3>
			<Selector type="checkbox" name="example-checkbox-defaultvalue" defaultValue={['2', '3']}>
				<Option value="1">Here is a label</Option>
				<Option value="2">Here is a label</Option>
				<Option value="3">Here is a label</Option>
			</Selector>

			<hr />

			<h2>Managed state</h2>

			<h3>Checkbox</h3>
			<p>{selectorValue.toString()}</p>
			<Selector
				type="checkbox"
				name="example-checkbox-defaultvalue"
				value={selectorValue}
				onChange={(value, event) => setSelectorValue(value)}
			>
				<Option value="1">Here is a label</Option>
				<Option value="2">Here is a label</Option>
				<Option value="3">Here is a label</Option>
			</Selector>

			<hr />

			<h2>Option alone</h2>

			<h3>Link</h3>
			<Option href="#0">Here is link text</Option>
			<Option href="#0">Here is link text</Option>
			<Option href="#0">Here is link text</Option>

			<h3>Radio</h3>
			<Option type="radio" name="example-alone-radio" value="1">
				Here is a label
			</Option>
			<Option type="radio" name="example-alone-radio" value="2">
				Here is a label
			</Option>
			<Option type="radio" name="example-alone-radio" value="3">
				Here is a label
			</Option>

			<hr />

			<h2>Option alone with defaultChecked</h2>

			<h3>Radio</h3>
			<Option type="radio" name="example-alone-defaultChecked-radio" value="1">
				Here is a label
			</Option>
			<Option type="radio" name="example-alone-defaultChecked-radio" value="2" defaultChecked>
				Here is a label
			</Option>
			<Option type="radio" name="example-alone-defaultChecked-radio" value="3">
				Here is a label
			</Option>

			<h3>Checkbox</h3>
			<Option type="checkbox" name="example-alone-defaultChecked-checkbox" value="1">
				Here is a label
			</Option>
			<Option type="checkbox" name="example-alone-defaultChecked-checkbox" value="2" defaultChecked>
				Here is a label
			</Option>
			<Option type="checkbox" name="example-alone-defaultChecked-checkbox" value="3" defaultChecked>
				Here is a label
			</Option>

			<hr />

			<h2>Option alone state managed</h2>
			<Option
				name="example-alone-managed1"
				value="1"
				checked={loneRanger1}
				onChange={(event) => setLoneRanger1(event.target.checked)}
			>
				Here is a label
			</Option>
			<Option
				name="example-alone-managed2"
				value="2"
				checked={loneRanger2}
				onChange={(event) => setLoneRanger2(event.target.checked)}
			>
				Here is a label
			</Option>

			<hr />

			<h2>preventDefault</h2>
			<p css={{ fontStyle: 'italic' }}>Checking not implemented</p>

			<h3>Radio</h3>
			<Selector
				type="radio"
				name="example-radio-preventdefault"
				onChange={(event) => {
					event.preventDefault();
					console.log('I have to do all the logic myself now');
				}}
			>
				<Option value="1">Here is a label</Option>
				<Option value="2">Here is a label</Option>
				<Option value="3">Here is a label</Option>
			</Selector>

			<h3>Checkbox</h3>
			<Selector
				type="checkbox"
				name="example-checkbox-preventdefault"
				onChange={(event) => {
					event.preventDefault();
					console.log('I have to do all the logic myself now');
				}}
			>
				<Option value="1">Here is a label</Option>
				<Option value="2">Here is a label</Option>
				<Option value="3">Here is a label</Option>
			</Selector>

			<hr />

			<h2>Long lines</h2>

			<h3>Radio</h3>
			<Selector type="radio" name="example-radio-longlines">
				<Option value="1">Here is a label</Option>
				<Option value="2">Here is a label</Option>
				<Option value="3">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
					magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
					provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
					aspernatur eveniet libero.
				</Option>
			</Selector>

			<h3>Checkbox</h3>
			<Selector type="checkbox" name="example-checkbox-longlines">
				<Option value="1">Here is a label</Option>
				<Option value="2">Here is a label</Option>
				<Option value="3">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
					magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
					provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
					aspernatur eveniet libero.
				</Option>
			</Selector>
		</GEL>
	);
}

export default Example;
