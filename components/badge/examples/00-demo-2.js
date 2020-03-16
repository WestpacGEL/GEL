/** @jsx jsx */
import { jsx } from '@westpac/core';
import { Badge } from '@westpac/badge';
import { Body } from '@westpac/body';
import { Playground } from '../../../website/src/components/playground/macro';
export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Body>
				<p>
					<a href="#0">
						Default <Badge value="42" />
					</a>
				</p>
				<p>
					<a href="#0">
						Primary <Badge look="primary" value="13" />
					</a>
				</p>
				<p>
					<a href="#0">
						Hero <Badge look="hero" value="13" />
					</a>
				</p>
				<p>
					<a href="#0">
						Neutral <Badge look="neutral" value="13" />
					</a>
				</p>
				<p>
					<a href="#0">
						Faint <Badge look="faint" value="13" />
					</a>
				</p>
				<p>
					<a href="#0">
						Success <Badge look="success" value="71" />
					</a>
				</p>
				<p>
					<a href="#0">
						Info <Badge look="info" value="71" />
					</a>
				</p>
				<p>
					<a href="#0">
						Warning <Badge look="warning" value="71" />
					</a>
				</p>
				<p>
					<a href="#0">
						Danger <Badge look="danger" value="71" />
					</a>
				</p>
			</Body>
		</Playground>
	);
};
