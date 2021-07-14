/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Fragment, useState } from 'react';
import { Selector, Option } from '@westpac/selector';
import { AccessibilityIcon, AtmIcon, CarIcon } from '@westpac/icon';

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
				<Option value="1" icon={AccessibilityIcon} hint={hintShort}>
					Here is button text
				</Option>
				<Option value="2" icon={AtmIcon}>
					Here is button text
				</Option>
				<Option value="3" icon={CarIcon}>
					Here is button text
				</Option>
			</Selector>

			<h3>Submit</h3>
			<Selector type="submit" name="example-submit-hint">
				<Option value="1" icon={AccessibilityIcon} hint={hintShort}>
					Here is button text
				</Option>
				<Option value="2" icon={AtmIcon}>
					Here is button text
				</Option>
				<Option value="3" icon={CarIcon}>
					Here is button text
				</Option>
			</Selector>

			<h3>Radio</h3>
			<Selector type="radio" name="example-radio-hint">
				<Option value="1" icon={AccessibilityIcon} hint={hintShort}>
					Here is a label
				</Option>
				<Option value="2" icon={AtmIcon}>
					Here is a label
				</Option>
				<Option value="3" icon={CarIcon}>
					Here is a label
				</Option>
			</Selector>

			<h3>Checkbox</h3>
			<Selector type="checkbox" name="example-checkbox-hint">
				<Option value="1" icon={AccessibilityIcon} hint={hintShort}>
					Here is a label
				</Option>
				<Option value="2" icon={AtmIcon}>
					Here is a label
				</Option>
				<Option value="3" icon={CarIcon}>
					Here is a label
				</Option>
			</Selector>

			<hr />

			<h2>Long hint</h2>

			<h3>Button</h3>
			<Selector type="button" name="example-button-long">
				<Option value="1" icon={AccessibilityIcon} hint={hintLong}>
					Here is button text
				</Option>
				<Option value="2" icon={AtmIcon}>
					Here is button text
				</Option>
				<Option value="3" icon={CarIcon}>
					Here is button text
				</Option>
			</Selector>

			<h3>Submit</h3>
			<Selector type="submit" name="example-submit-long">
				<Option value="1" icon={AccessibilityIcon} hint={hintLong}>
					Here is button text
				</Option>
				<Option value="2" icon={AtmIcon}>
					Here is button text
				</Option>
				<Option value="3" icon={CarIcon}>
					Here is button text
				</Option>
			</Selector>

			<h3>Radio</h3>
			<Selector type="radio" name="example-radio-long">
				<Option value="1" icon={AccessibilityIcon} hint={hintLong}>
					Here is a label
				</Option>
				<Option value="2" icon={AtmIcon}>
					Here is a label
				</Option>
				<Option value="3" icon={CarIcon}>
					Here is a label
				</Option>
			</Selector>

			<h3>Checkbox</h3>
			<Selector type="checkbox" name="example-checkbox-long">
				<Option value="1" icon={AccessibilityIcon} hint={hintLong}>
					Here is a label
				</Option>
				<Option value="2" icon={AtmIcon}>
					Here is a label
				</Option>
				<Option value="3" icon={CarIcon}>
					Here is a label
				</Option>
			</Selector>

			<hr />

			<h2>Size</h2>

			<h3>Default</h3>

			<Selector type="checkbox" name="example-icon-default">
				<Option value="1" icon={AccessibilityIcon} hint={hintShort}>
					Here is a label
				</Option>
			</Selector>

			<h3>Xlarge</h3>

			<Selector type="checkbox" name="example-icon-xlarge" iconSize="xlarge">
				<Option value="1" icon={AccessibilityIcon} hint={hintShort}>
					Here is a label
				</Option>
			</Selector>

			<h3>Large</h3>
			<Selector type="checkbox" name="example-icon-large" iconSize="large">
				<Option value="1" icon={AccessibilityIcon} hint={hintShort}>
					Here is a label
				</Option>
			</Selector>

			<h3>Medium</h3>
			<Selector type="checkbox" name="example-icon-medium" iconSize="medium">
				<Option value="1" icon={AccessibilityIcon} hint={hintShort}>
					Here is a label
				</Option>
			</Selector>

			<h3>Small</h3>
			<Selector type="checkbox" name="example-icon-small" iconSize="small">
				<Option value="1" icon={AccessibilityIcon} hint={hintShort}>
					Here is a label
				</Option>
			</Selector>

			<h3>Xsmall</h3>
			<Selector type="checkbox" name="example-icon-xsmall" iconSize="xsmall">
				<Option value="1" icon={AccessibilityIcon} hint={hintShort}>
					Here is a label
				</Option>
			</Selector>

			<h3>Responsive</h3>
			<Selector
				type="checkbox"
				name="example-icon-responsive"
				iconSize={['xlarge', null, 'medium']}
			>
				<Option value="1" icon={AccessibilityIcon} hint={hintShort}>
					Here is a label
				</Option>
			</Selector>
		</GEL>
	);
}

export default Example;
