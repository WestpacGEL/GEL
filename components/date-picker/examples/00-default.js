/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { DatePicker } from '@westpac/date-picker';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Default</h2>
			<DatePicker value="2021-08-24" onChange={(e) => console.log(e.detail)} />
		</GEL>
	);
}

export default Example;
