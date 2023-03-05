import { jsx } from '@westpac/core';
import { Badge } from '@westpac/badge';
import { Button } from '@westpac/button';
import { Body } from '@westpac/body';
import { Playground } from '../../../../website/src/components/playground/macro';

const Link = (props) => <a href="#" css={{ marginRight: '1rem' }} {...props} />;

const Title = (props) => <p css={{ fontStyle: 'italic' }} {...props} />;

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Body>
				<Title>Badges in links</Title>
				<p>
					<Link>
						Default
						<Badge value="15" />
					</Link>
				</p>
				<p>
					<Link>
						Primary
						<Badge value="15" look="primary" />
					</Link>
					<Link>
						Hero
						<Badge value="15" look="hero" />
					</Link>
					<Link>
						Neutral
						<Badge value="15" look="neutral" />
					</Link>
					<Link>
						Faint
						<Badge value="15" look="faint" />
					</Link>
				</p>
				<p>
					<Link>
						Success
						<Badge value="15" look="success" />
					</Link>
					<Link>
						Info
						<Badge value="15" look="info" />
					</Link>
					<Link>
						Warning
						<Badge value="15" look="warning" />
					</Link>
					<Link>
						Danger
						<Badge value="15" look="danger" />
					</Link>
				</p>
				<br />
				<Title>Badges in buttons</Title>
				<p>
					<Button size="large">
						Primary <Badge value="15" look="faint" />
					</Button>{' '}
					<Button look="hero" size="large">
						Hero <Badge value="15" look="faint" />
					</Button>{' '}
					<Button look="faint" size="large">
						Faint <Badge value="15" look="neutral" />
					</Button>
				</p>
				<p>
					<Button soft size="large">
						Primary Soft <Badge value="15" look="neutral" />
					</Button>{' '}
					<Button look="hero" size="large" soft>
						Hero Soft <Badge value="15" look="neutral" />
					</Button>{' '}
					<Button look="faint" size="large" soft>
						Faint Soft <Badge value="15" look="neutral" />
					</Button>
				</p>
			</Body>
		</Playground>
	);
};

export default Demo;
