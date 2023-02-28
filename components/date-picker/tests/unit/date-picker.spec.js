import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import { DatePicker } from '@westpac/date-picker';
import wbc from '@westpac/wbc';

// Component specific tests
describe('DatePicker component', () => {
	const SimpleDatePicker = () => (
		<GEL brand={wbc}>
			<DatePicker onChange={(e) => console.log(e.detail)} />
		</GEL>
	);

	test('It should render Compacta', () => {
		render(<SimpleDatePicker />);
	});
});
