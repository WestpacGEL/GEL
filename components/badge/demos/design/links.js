import { jsx } from '@westpac/core';
import { Badge } from '@westpac/badge';
import { Body } from '@westpac/body';
import { Playground } from '../../../../website/src/components/playground/macro';

const Link = (props) => <a href="#" css={{ marginRight: '1rem' }} {...props} />;

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Body>
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
			</Body>
		</Playground>
	);
};

export default Demo;
