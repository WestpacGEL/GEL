import { GEL, jsx } from '@westpac/core';
import { Badge } from '@westpac/badge';
import { Body } from '@westpac/body';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Body>
				<p>
					<a href="#0">
						Default <Badge type="pill" value="42" />
					</a>
				</p>

				<p>
					<a href="#0">
						Primary <Badge type="pill" look="primary" value="13" />
					</a>
				</p>
				<p>
					<a href="#0">
						Hero <Badge type="pill" look="hero" value="13" />
					</a>
				</p>
				<p>
					<a href="#0">
						Neutral <Badge type="pill" look="neutral" value="13" />
					</a>
				</p>
				<p>
					<a href="#0">
						Faint <Badge type="pill" look="faint" value="13" />
					</a>
				</p>

				<p>
					<a href="#0">
						Success <Badge type="pill" look="success" value="71" />
					</a>
				</p>
				<p>
					<a href="#0">
						Info <Badge type="pill" look="info" value="71" />
					</a>
				</p>
				<p>
					<a href="#0">
						Warning <Badge type="pill" look="warning" value="71" />
					</a>
				</p>
				<p>
					<a href="#0">
						Danger <Badge type="pill" look="danger" value="71" />
					</a>
				</p>
			</Body>
		</GEL>
	);
}

export default Example;
