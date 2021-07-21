/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { DatePicker } from '@westpac/date-picker';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Disable weekends</h2>
			<DatePicker id="example-disable-weekends" name="example-disable-weekends" disableWeekends />

			<hr />

			<h2>Disable days of week</h2>
			<p>Disables Mondays (1), Wednesdays (3) and Fridays (5)</p>
			<DatePicker
				id="example-disable-days-of-week"
				name="example-disable-days-of-week"
				disableDaysOfWeek={[1, 3, 5]}
			/>

			<hr />

			<h2>Disable specific dates</h2>
			<p>Disables 2021-06-01, 2021-06-28 and 2021-06-29 </p>
			<DatePicker
				id="example-disable-dates"
				name="example-disable-dates"
				disableDates={['2021-06-01', '2021-06-28', '2021-06-29']}
			/>

			<hr />

			<h2>Disable weekends, Mondays and the date 2021-07-01</h2>
			<DatePicker
				id="example-disable-dates"
				name="example-disable-dates"
				disableWeekends
				disableDaysOfWeek={1}
				disableDates="2021-07-01"
			/>
		</GEL>
	);
}

export default Example;
