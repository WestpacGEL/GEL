import { GEL, jsx } from '@westpac/core';
import { Badge } from '@westpac/badge';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h3>Pill type</h3>
			<p>
				<Badge type="pill" value="Default" />
			</p>
			<p>
				<Badge data-cy="primary-pill-type" look="primary" type="pill" value="Primary" />{' '}
				<Badge look="hero" type="pill" value="Hero" />{' '}
				<Badge look="neutral" type="pill" value="Neutral" />{' '}
				<Badge look="faint" type="pill" value="Faint" />
			</p>
			<p>
				<Badge look="success" type="pill" value="Success" />{' '}
				<Badge look="info" type="pill" value="Info" />{' '}
				<Badge look="warning" type="pill" value="Warning" />{' '}
				<Badge look="danger" type="pill" value="Danger" />
			</p>
		</GEL>
	);
}

export default Example;
