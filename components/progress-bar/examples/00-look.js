import { GEL, jsx } from '@westpac/core';
import { ProgressBar } from '@westpac/progress-bar';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Default</h2>

			<h3>Label</h3>
			<ProgressBar value={0} />
			<ProgressBar value={20} />

			<h3>noLabel</h3>
			<ProgressBar value={0} noLabel />
			<ProgressBar value={20} noLabel />

			<hr />

			<h2>Skinny</h2>
			<ProgressBar value={0} look="skinny" />
			<ProgressBar value={20} look="skinny" />
		</GEL>
	);
}

export default Example;
