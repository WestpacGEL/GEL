import { GEL, jsx } from '@westpac/core';
import { PasswordInput } from '@westpac/form';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<PasswordInput width={10} defaultValue="Sw0rdf1sh" />
		</GEL>
	);
}

export default Example;
