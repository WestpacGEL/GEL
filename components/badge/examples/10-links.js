/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Badge } from '@westpac/badge';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<p>
				<a href="#0">
					Default <Badge>42</Badge>
				</a>
			</p>

			<p>
				<a href="#0">
					Primary <Badge appearance="primary">13</Badge>
				</a>
			</p>
			<p>
				<a href="#0">
					Hero <Badge appearance="hero">13</Badge>
				</a>
			</p>
			<p>
				<a href="#0">
					Neutral <Badge appearance="neutral">13</Badge>
				</a>
			</p>
			<p>
				<a href="#0">
					Faint <Badge appearance="faint">13</Badge>
				</a>
			</p>

			<p>
				<a href="#0">
					Success <Badge appearance="success">71</Badge>
				</a>
			</p>
			<p>
				<a href="#0">
					Info <Badge appearance="info">71</Badge>
				</a>
			</p>
			<p>
				<a href="#0">
					Warning <Badge appearance="warning">71</Badge>
				</a>
			</p>
			<p>
				<a href="#0">
					Danger <Badge appearance="danger">71</Badge>
				</a>
			</p>
		</GEL>
	);
}

export default Example;
