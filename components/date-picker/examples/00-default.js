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

			<h2>Value</h2>
			<DatePicker id="bla" value="2021-06-28" onChange={(e) => console.log(e.detail)} />
		</GEL>
	);
}

export default Example;
