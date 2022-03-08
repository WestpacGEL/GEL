/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { DatePicker } from '@westpac/date-picker';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Default</h2>
			<DatePicker onChange={(e) => console.log(e.detail)} />
			<br />
			<br />

			<hr />

			<h2>Placeholder</h2>
			<DatePicker
				id="example-placeholder"
				name="example-placeholder"
				placeholder="DD-MM-YYYY"
				onChange={(e) => console.log(e.detail)}
			/>

			<hr />

			<h2>Value</h2>
			<DatePicker id="example-value" value="2021-06-28" onChange={(e) => console.log(e.detail)} />

			<hr />

			<h2>Min</h2>
			<DatePicker id="example-min" min="2021-06-28" onChange={(e) => console.log(e.detail)} />

			<hr />

			<h2>Max</h2>
			<DatePicker id="example-min" max="2021-06-30" onChange={(e) => console.log(e.detail)} />

			<hr />

			<h2>Min and Max</h2>
			<DatePicker
				id="example-min-max"
				min="2021-06-28"
				max="2021-06-30"
				onChange={(e) => console.log(e.detail)}
			/>
		</GEL>
	);
}

export default Example;
