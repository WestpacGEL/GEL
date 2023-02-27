import { jsx } from '@westpac/core';
import { Container, Grid } from '@westpac/grid';
import { Cell } from '../_utils';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Container>
				<Grid>
					<Cell>1 </Cell>
					<Cell>2</Cell>
					<Cell>3</Cell>
					<Cell>4</Cell>
					<Cell>5</Cell>
					<Cell>6</Cell>
					<Cell>7</Cell>
					<Cell>8</Cell>
					<Cell>9</Cell>
					<Cell>10</Cell>
					<Cell>11</Cell>
					<Cell>12</Cell>
				</Grid>
			</Container>
		</Playground>
	);
};

export default Demo;
