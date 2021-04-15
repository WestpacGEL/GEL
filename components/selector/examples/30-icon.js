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

			<h3>Radio with next indicator</h3>
			<Selector type="radio" name="example-radio-hint-with-next" nextIndicator>
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

			<h3>Radio with next indicator</h3>
			<Selector type="radio" name="example-radio-long-with-next" nextIndicator>
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
		</GEL>
	);
}

export default Example;
