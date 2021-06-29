/** @jsx jsx */

import { Fragment } from 'react';
import { GEL, jsx } from '@westpac/core';
import { DatePicker } from '@westpac/date-picker';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Size</h2>
			{['small', 'medium', 'large', 'xlarge'].map((size) => (
				<Fragment>
					<h3>{size.charAt(0).toUpperCase() + size.slice(1)}</h3>
					<DatePicker size={size} onChange={(e) => console.log(e.detail)} />
					<br />
					<br />
				</Fragment>
			))}
		</GEL>
	);
}

export default Example;
