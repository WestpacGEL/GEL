/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Fragment, useState } from 'react';
import { Selector, Option } from '@westpac/selector';
import { ChatPictogram, TruckPictogram, ClockPictogram } from '@westpac/pictogram';

const hintShort = 'This is some content to go in the product selector thing';
const hintLong =
	"This is some content to go in the product selector thing which is longer. It's a little longer, actually when I come to think of it, it's quite a bit longer. But not crazy long, just enough length to test this with.";
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

			<h3>Button</h3>
			<Selector type="button" name="example-button-hint">
				<Option value="1" pictogram={ChatPictogram} hint={hintShort}>
					Here is button text
				</Option>
				<Option value="2" pictogram={TruckPictogram}>
					Here is button text
				</Option>
				<Option value="3" pictogram={ClockPictogram}>
					Here is button text
				</Option>
			</Selector>

			<h3>Link</h3>
			<Selector type="link">
				<Option href="#0" pictogram={ChatPictogram} hint={hintShort}>
					Here is link text
				</Option>
				<Option href="#0" pictogram={TruckPictogram}>
					Here is link text
				</Option>
				<Option href="#0" pictogram={ClockPictogram}>
					Here is link text
				</Option>
			</Selector>

			<h3>Radio</h3>
			<Selector type="radio" name="example-radio-hint">
				<Option value="1" pictogram={ChatPictogram} hint={hintShort}>
					Here is a label
				</Option>
				<Option value="2" pictogram={TruckPictogram}>
					Here is a label
				</Option>
				<Option value="3" pictogram={ClockPictogram}>
					Here is a label
				</Option>
			</Selector>

			<h3>Checkbox</h3>
			<Selector type="checkbox" name="example-checkbox-hint">
				<Option value="1" pictogram={ChatPictogram} hint={hintShort}>
					Here is a label
				</Option>
				<Option value="2" pictogram={TruckPictogram}>
					Here is a label
				</Option>
				<Option value="3" pictogram={ClockPictogram}>
					Here is a label
				</Option>
			</Selector>

			<hr />

			<h2>Long hint</h2>

			<h3>Button</h3>
			<Selector type="button" name="example-button-long">
				<Option value="1" pictogram={ChatPictogram} hint={hintLong}>
					Here is button text
				</Option>
				<Option value="2" pictogram={TruckPictogram}>
					Here is button text
				</Option>
				<Option value="3" pictogram={ClockPictogram}>
					Here is button text
				</Option>
			</Selector>

			<h3>Link</h3>
			<Selector type="link">
				<Option href="#0" pictogram={ChatPictogram} hint={hintLong}>
					Here is link text
				</Option>
				<Option href="#0" pictogram={TruckPictogram}>
					Here is link text
				</Option>
				<Option href="#0" pictogram={ClockPictogram}>
					Here is link text
				</Option>
			</Selector>

			<h3>Radio</h3>
			<Selector type="radio" name="example-radio-long">
				<Option value="1" pictogram={ChatPictogram} hint={hintLong}>
					Here is a label
				</Option>
				<Option value="2" pictogram={TruckPictogram}>
					Here is a label
				</Option>
				<Option value="3" pictogram={ClockPictogram}>
					Here is a label
				</Option>
			</Selector>

			<h3>Checkbox</h3>
			<Selector type="checkbox" name="example-checkbox-long">
				<Option value="1" pictogram={ChatPictogram} hint={hintLong}>
					Here is a label
				</Option>
				<Option value="2" pictogram={TruckPictogram}>
					Here is a label
				</Option>
				<Option value="3" pictogram={ClockPictogram}>
					Here is a label
				</Option>
			</Selector>

			<hr />

			<h2>Width</h2>

			<h3>Default</h3>
			<Selector type="checkbox" name="example-width-default">
				<Option value="1" pictogram={ChatPictogram} hint={hintShort}>
					Here is a label
				</Option>
			</Selector>

			<h3>150px</h3>
			<Selector type="checkbox" name="example-width-150" pictogramWidth={150}>
				<Option value="1" pictogram={ChatPictogram} hint={hintShort}>
					Here is a label
				</Option>
			</Selector>

			<h3>Responsive</h3>
			<Selector type="checkbox" name="example-width-responsive" pictogramWidth={[100, null, 66]}>
				<Option value="1" pictogram={ChatPictogram} hint={hintShort}>
					Here is a label
				</Option>
			</Selector>

			<hr />

			<h2>Height</h2>

			<h3>Default</h3>
			<Selector type="checkbox" name="example-height-default">
				<Option value="1" pictogram={ChatPictogram} hint={hintShort}>
					Here is a label
				</Option>
			</Selector>

			<h3>36px</h3>
			<Selector type="checkbox" name="example-height-36" pictogramHeight={36}>
				<Option value="1" pictogram={ChatPictogram} hint={hintShort}>
					Here is a label
				</Option>
			</Selector>

			<h3>Responsive</h3>
			<Selector type="checkbox" name="example-height-responsive" pictogramHeight={[100, null, 66]}>
				<Option value="1" pictogram={ChatPictogram} hint={hintShort}>
					Here is a label
				</Option>
			</Selector>
		</GEL>
	);
}

export default Example;
