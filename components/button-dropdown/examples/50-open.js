import { GEL, jsx } from '@westpac/core';
import { ButtonDropdown } from '@westpac/button-dropdown';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Default Open</h2>
			<ButtonDropdown text="Default Dropdown" open={true}>
				<p>Example dropdown content...</p>
			</ButtonDropdown>{' '}
		</GEL>
	);
}

export default Example;
