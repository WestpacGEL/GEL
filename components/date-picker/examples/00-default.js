/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { DatePicker } from '@westpac/date-picker';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<DatePicker />
		</GEL>
	);
}

export default Example;
