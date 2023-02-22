import { GEL, jsx } from '@westpac/core';
import { Switch } from '@westpac/switch';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Small</h2>
			<Switch name="example-small" size="small" label="eStatements" />
			<hr />

			<h2>Medium</h2>
			<Switch name="example-medium" size="medium" label="eStatements" />
			<hr />

			<h2>Large</h2>
			<Switch name="example-large" size="large" label="eStatements" />
			<hr />

			<h2>Extra large</h2>
			<Switch name="example-xlarge" size="xlarge" label="eStatements" />
		</GEL>
	);
}

export default Example;
