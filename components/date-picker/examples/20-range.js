import { useState } from 'react';
import { GEL, jsx } from '@westpac/core';
import { DatePicker } from '@westpac/date-picker';

function Example({ brand }) {
	const [dateFrom, setDateFrom] = useState(null);
	const [dateTo, setDateTo] = useState(null);

	const handleChangeFrom = (e) => {
		setDateFrom(e.detail.value);
	};
	const handleChangeTo = (e) => {
		setDateTo(e.detail.value);
	};

	return (
		<GEL brand={brand}>
			<label htmlFor="example-from">From</label>
			<br />
			<DatePicker
				id="example-from"
				name="example-from"
				max={dateTo}
				onChange={(e) => handleChangeFrom(e)}
			/>
			<br />
			<br />

			<label htmlFor="example-to">To</label>
			<br />
			<DatePicker
				id="example-to"
				name="example-to"
				min={dateFrom}
				onChange={(e) => handleChangeTo(e)}
			/>

			<div css={{ marginTop: 60 }}>
				<code>
					From: {dateFrom || 'Not selected'}
					<br />
					To: {dateTo || 'Not selected'}
				</code>
			</div>
		</GEL>
	);
}

export default Example;
