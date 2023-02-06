/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Badge } from '@westpac/badge';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<p>
				<Badge data-cy="badge-default" value="Default" />
			</p>
			<p>
				<Badge data-cy="badge-primary" look="primary" value="Primary" />{' '}
				<Badge data-cy="badge-hero" look="hero" value="Hero" />{' '}
				<Badge data-cy="badge-neutral" look="neutral" value="Neutral" />{' '}
				<Badge data-cy="badge-faint" look="faint" value="Faint" />
			</p>
			<p>
				<Badge data-cy="badge-success" look="success" value="Success" />{' '}
				<Badge data-cy="badge-info" look="info" value="Info" />{' '}
				<Badge data-cy="badge-warning" look="warning" value="Warning" />{' '}
				<Badge data-cy="badge-danger" look="danger" value="Danger" />
			</p>
		</GEL>
	);
}

export default Example;
