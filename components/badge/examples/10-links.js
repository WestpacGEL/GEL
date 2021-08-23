/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Badge } from '@westpac/badge';
import { Body } from '@westpac/body';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Body>
				<p>
					<a href="#0">
						Default <Badge value="42" data-testing="badge-link" />
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
		</GEL>
	);
}

export default Example;
