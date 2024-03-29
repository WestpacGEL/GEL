import { GEL, jsx } from '@westpac/core';
import { Switch } from '@westpac/switch';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Switch name="example-disabled" label="eStatements" disabled />
		</GEL>
	);
}

export default Example;
