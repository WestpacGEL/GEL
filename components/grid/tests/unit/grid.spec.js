import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import { Cell, Grid } from '@westpac/grid';
import wbc from '@westpac/wbc';

// Component specific tests
describe('Grid component', () => {
	const SimpleGrid = () => (
		<GEL brand={wbc}>
			<Grid>
				<Cell>
					<h4>1</h4>
				</Cell>
				<Cell>
					<h4>2</h4>
				</Cell>
				<Cell>
					<h4>3</h4>
				</Cell>
				<Cell>
					<h4>4</h4>
				</Cell>
				<Cell>
					<h4>5</h4>
				</Cell>
				<Cell>
					<h4>6</h4>
				</Cell>
				<Cell>
					<h4>7</h4>
				</Cell>
				<Cell>
					<h4>8</h4>
				</Cell>
				<Cell>
					<h4>9</h4>
				</Cell>
				<Cell>
					<h4>10</h4>
				</Cell>
				<Cell>
					<h4>11</h4>
				</Cell>
				<Cell>
					<h4>12</h4>
				</Cell>
			</Grid>
		</GEL>
	);

	test('It should render Grid', () => {
		const { container } = render(<SimpleGrid />);
		expect(container).toBeInTheDocument();
	});
});
