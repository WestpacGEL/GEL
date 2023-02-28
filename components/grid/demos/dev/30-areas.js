import { jsx } from '@westpac/core';
import { Container, Grid } from '@westpac/grid';
import { Cell } from '../_utils';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Container>
				<Grid
					columns={'10rem 1fr 10rem'}
					areas={['header header header', 'menu content ads', 'footer footer footer']}
				>
					<Cell area="header">Header</Cell>
					<Cell area="footer">Footer</Cell>

					<Cell area="menu">Menu</Cell>
					<Cell area="ads">Ads</Cell>

					<Cell area="content">Content</Cell>
				</Grid>
			</Container>
		</Playground>
	);
};

export default Demo;
