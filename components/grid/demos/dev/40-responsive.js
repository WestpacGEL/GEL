import { jsx } from '@westpac/core';
import { Container, Grid } from '@westpac/grid';
import { Cell } from '../_utils';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Container>
				<Grid>
					<Cell width={[12, 6, 4, 3, 2]}>[12, 6, 4, 3, 2]</Cell>
				</Grid>

				<br />

				<Grid>
					<Cell width={[12, 10, 6, 10, 12]}>[12, 10, 6, 10, 12]</Cell>
				</Grid>

				<br />

				<Grid>
					<Cell width={[12, 8, 3, 6, 4]}>[12, 8, 3, 6, 4]</Cell>
				</Grid>
			</Container>
		</Playground>
	);
};

export default Demo;
