import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import { ProgressBar } from '@westpac/progress-bar';
import wbc from '@westpac/wbc';
// Popover specific tests
describe('Progress Bar component', () => {
	const SimpleProgressBar = () => (
		<GEL brand={wbc}>
			<ProgressBar look="default" value={0} noLabel={false} />
		</GEL>
	);

	test('It should render Progress Bar', () => {
		const { container } = render(<SimpleProgressBar />);
		expect(container).toBeInTheDocument();
	});
});
