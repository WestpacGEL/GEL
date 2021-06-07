/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Container, Grid } from '@westpac/grid';
import { Cell } from '../_utils';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Container>
				<Grid columns={3}>
					<Cell>Top Left</Cell>
					<Cell left={3}>Top Right</Cell>
					<Cell left={2} top={2}>
						Middle
					</Cell>
					<Cell top={3}>Bottom Left</Cell>
					<Cell top={3} left={3}>
						Bottom Right
					</Cell>
				</Grid>
			</Container>
		</Playground>
	);
};

export default Demo;
