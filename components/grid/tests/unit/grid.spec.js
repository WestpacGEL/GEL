import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import { Cell, Grid } from '@westpac/grid';
import wbc from '@westpac/wbc';

// Component specific tests
describe('Grid component', () => {
	const SimpleGrid = (props) => (
		<GEL brand={wbc}>
			<Grid flow="row" columns="1" height="1" minRowHeight="1">
				<Cell height="1">
					<h4>1</h4>
				</Cell>
			</Grid>
		</GEL>
	);

	test('It should render Grid', () => {
		const { container } = render(<SimpleGrid />);
		expect(container).toBeInTheDocument();
	});
});
