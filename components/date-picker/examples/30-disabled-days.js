/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { DatePicker } from '@westpac/date-picker';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Disable weekends</h2>
			<DatePicker id="example-disable-weekends" name="example-disable-weekends" disableWeekends />

			<hr />

			<h2>Disable days</h2>
			<p>Disables Mondays, Wednesdays and Fridays</p>
			<DatePicker id="example-disable-days" name="example-disable-days" disableDays={[1, 3, 5]} />
		</GEL>
	);
}

export default Example;
