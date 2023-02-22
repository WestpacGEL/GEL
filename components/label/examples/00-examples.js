import { GEL, jsx } from '@westpac/core';
import { Label } from '@westpac/label';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Default</h2>
			<p>
				<Label value="Default" />
			</p>

			<hr />

			<h2>Look</h2>
			<p>
				<Label look="primary" value="Primary" /> <Label look="hero" value="Hero" />{' '}
				<Label look="neutral" value="Neutral" /> <Label look="faint" value="Faint" />
			</p>
			<p>
				<Label look="success" value="Success" /> <Label look="info" value="Info" />{' '}
				<Label look="warning" value="Warning" /> <Label look="danger" value="Danger" />
			</p>
		</GEL>
	);
}

export default Example;
