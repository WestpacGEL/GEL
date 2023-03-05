import { jsx } from '@westpac/core';
import { Badge } from '@westpac/badge';
import { Body } from '@westpac/body';
import { Button } from '@westpac/button';
import { Cell, Grid } from '@westpac/grid';
import { Title } from '../../../../helpers/demos';
import { Playground } from '../../../../website/src/components/playground/macro';

const Link = (props) => <a href="#" css={{ marginRight: '1rem' }} {...props} />;

const Spacer = (props) => <div css={{ width: '1rem', display: 'inline-block' }} {...props} />;

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Grid>
				<Cell width={12}>
					<Title>Examples showing pill style badge</Title>
					<Body>
						<Button look="primary" soft>
							<Badge value="6" type="pill" /> Label
						</Button>
						<Spacer />
						<Button look="primary">
							<Badge value="88" look="info" type="pill" /> Label
						</Button>
						<Spacer />
						<Link>
							Link
							<Badge value="3" type="pill" look="success" />
						</Link>
					</Body>
				</Cell>
				<Cell width={12} top={3}>
					<Title>Examples showing basic style badge</Title>
					<Body>
						<Button look="primary" soft>
							Label <Badge value="NEW" />
						</Button>
						<Spacer />
						<Button look="primary">
							Label <Badge value="NEW" look="info" />
						</Button>
						<Spacer />
						<Link>
							Link
							<Badge value="Label" look="success" />
						</Link>
					</Body>
				</Cell>
			</Grid>
		</Playground>
	);
};

export default Demo;
