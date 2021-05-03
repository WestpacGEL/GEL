/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Fragment } from 'react';
import { Selector, Option } from '@westpac/selector';

const hintHTML = (
	<Fragment>
		<p>
			This is some content to go in the product selector thing which is longer. It's a little
			longer, actually when I come to think of it, it's quite a bit longer.{' '}
		</p>
		<p>But not crazy long, just enough length to test this with.</p>
	</Fragment>
);

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Short hint</h2>

			<h3>Radio</h3>
			<Selector type="radio" name="example-radio-hint">
				<Option value="1" hint="This is some content to go in the product selector thing">
					Here is a label
				</Option>
				<Option value="2" hint="This is some content to go in the product selector thing">
					Here is a label
				</Option>
				<Option value="3">Here is a label</Option>
			</Selector>

			<h3>Radio with next indicator</h3>
			<Selector type="radio" name="example-radio-hint-with-next" nextIndicator>
				<Option value="1" hint="This is some content to go in the product selector thing">
					Here is a label
				</Option>
				<Option value="2" hint="This is some content to go in the product selector thing">
					Here is a label
				</Option>
				<Option value="3">Here is a label</Option>
			</Selector>

			<h3>Checkbox</h3>
			<Selector type="checkbox" name="example-checkbox-hint">
				<Option value="1" hint="This is some content to go in the product selector thing">
					Here is a label
				</Option>
				<Option value="2" hint="This is some content to go in the product selector thing">
					Here is a label
				</Option>
				<Option value="3">Here is a label</Option>
			</Selector>

			<hr />

			<h2>Long hint</h2>

			<h3>Radio</h3>
			<Selector type="radio" name="example-radio-hint-long">
				<Option
					value="1"
					hint="This is some content to go in the product selector thing which is longer. It's a little longer, actually when I come to think of it, it's quite a bit longer. But not crazy long, just enough length to test this with."
				>
					Here is a label
				</Option>
				<Option
					value="2"
					hint="This is some content to go in the product selector thing which is longer. It's a little longer, actually when I come to think of it, it's quite a bit longer. But not crazy long, just enough length to test this with."
				>
					Here is a label
				</Option>
				<Option value="3">Here is a label</Option>
			</Selector>

			<h3>Radio with next indicator</h3>
			<Selector type="radio" name="example-radio-hint-long-with-next" nextIndicator>
				<Option
					value="1"
					hint="This is some content to go in the product selector thing which is longer. It's a little longer, actually when I come to think of it, it's quite a bit longer. But not crazy long, just enough length to test this with."
				>
					Here is a label
				</Option>
				<Option
					value="2"
					hint="This is some content to go in the product selector thing which is longer. It's a little longer, actually when I come to think of it, it's quite a bit longer. But not crazy long, just enough length to test this with."
				>
					Here is a label
				</Option>
				<Option value="3">Here is a label</Option>
			</Selector>

			<h3>Checkbox</h3>
			<Selector type="checkbox" name="example-checkbox-hint-long">
				<Option
					value="1"
					hint="This is some content to go in the product selector thing which is longer. It's a little longer, actually when I come to think of it, it's quite a bit longer. But not crazy long, just enough length to test this with."
				>
					Here is a label
				</Option>
				<Option
					value="2"
					hint="This is some content to go in the product selector thing which is longer. It's a little longer, actually when I come to think of it, it's quite a bit longer. But not crazy long, just enough length to test this with."
				>
					Here is a label
				</Option>
				<Option value="3">Here is a label</Option>
			</Selector>

			<hr />

			<h2>Long hint with paragraphs</h2>

			<h3>Radio</h3>
			<Selector type="radio" name="example-radio-hint-long">
				<Option value="1" hint={hintHTML}>
					Here is a label
				</Option>
				<Option value="2" hint={hintHTML}>
					Here is a label
				</Option>
				<Option value="3">Here is a label</Option>
			</Selector>

			<h3>Radio with next indicator</h3>
			<Selector type="radio" name="example-radio-hint-long-with-next" nextIndicator>
				<Option value="1" hint={hintHTML}>
					Here is a label
				</Option>
				<Option value="2" hint={hintHTML}>
					Here is a label
				</Option>
				<Option value="3">Here is a label</Option>
			</Selector>

			<h3>Checkbox</h3>
			<Selector type="checkbox" name="example-checkbox-hint-long">
				<Option value="1" hint={hintHTML}>
					Here is a label
				</Option>
				<Option value="2" hint={hintHTML}>
					Here is a label
				</Option>
				<Option value="3">Here is a label</Option>
			</Selector>
		</GEL>
	);
}

export default Example;
