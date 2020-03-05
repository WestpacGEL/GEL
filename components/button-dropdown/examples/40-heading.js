/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { ButtonDropdown, Heading } from '@westpac/button-dropdown';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Intopia />
			<h2>Default heading</h2>
			<ButtonDropdown text="Default Dropdown">
				<Heading>Dropdown heading</Heading>
				<p>Example dropdown content...</p>
			</ButtonDropdown>

			<h2>Multiple headings</h2>
			<ButtonDropdown text="Default Dropdown">
				<Heading>Dropdown heading #1</Heading>
				<p>Example dropdown content...</p>
				<Heading>Dropdown heading #2</Heading>
				<p>Example dropdown content...</p>
			</ButtonDropdown>

			<h2>Heading as h4</h2>
			<ButtonDropdown text="Default Dropdown">
				<Heading tag="h4">Dropdown heading</Heading>
				<p>Example dropdown content...</p>
			</ButtonDropdown>
		</GEL>
	);
}

export default Example;
