/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Selector, Option } from '@westpac/selector';
import { ChatPictogram, TruckPictogram, ClockPictogram } from '@westpac/pictogram';
import { AccessibilityIcon, AtmIcon, CarIcon } from '@westpac/Icon';
import { useState } from 'react';

function Example({ brand }) {
	const [controlled, setControlled] = useState();
	const [value, setValue] = useState('');
	const [index, setIndex] = useState(-1);

	return (
		<GEL brand={brand}>
			<h2>Pictogram</h2>
			<Selector name="example-pictogram">
				<Option
					value="one"
					pictogram={ChatPictogram}
					hint="This is some content to go in the product selector thing"
				>
					Here is a label
				</Option>
				<Option value="two" pictogram={TruckPictogram}>
					Here is a label
				</Option>
				<Option value="three" pictogram={ClockPictogram}>
					Here is a label
				</Option>
			</Selector>

			<hr />

			<h2>Icon</h2>
			<Selector name="example-icon">
				<Option
					value="one"
					icon={AccessibilityIcon}
					hint="This is some content to go in the product selector thing"
				>
					Here is a label
				</Option>
				<Option value="two" icon={CarIcon}>
					Here is a label
				</Option>
				<Option value="three" icon={AtmIcon}>
					Here is a label
				</Option>
			</Selector>

			<hr />

			<h2>Mixed</h2>
			<Selector name="example-pictogram-and-icon">
				<Option
					value="one"
					pictogram={ChatPictogram}
					hint="This is some content to go in the product selector thing"
				>
					Here is a label
				</Option>
				<Option
					value="two"
					icon={AccessibilityIcon}
					hint="This is some content to go in the product selector thing"
				>
					Here is a label
				</Option>
				<Option value="three">Here is a label</Option>
			</Selector>
		</GEL>
	);
}

export default Example;
