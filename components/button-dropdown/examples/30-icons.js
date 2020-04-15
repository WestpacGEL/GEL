/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { ButtonDropdown } from '@westpac/button-dropdown';
import { AndroidIcon, AppleIcon } from '@westpac/icon';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Intopia />
			<h2>Icons </h2>
			<ButtonDropdown iconBefore={AndroidIcon} look="primary" text="Primary Dropdown">
				<p>Example dropdown content...</p>
			</ButtonDropdown>{' '}
			<ButtonDropdown iconAfter={AppleIcon} look="hero" text="Primary Dropdown">
				<p>Example dropdown content...</p>
			</ButtonDropdown>{' '}
			<ButtonDropdown
				iconBefore={AndroidIcon}
				iconAfter={AppleIcon}
				look="faint"
				text="Primary Dropdown"
			>
				<p>Example dropdown content...</p>
			</ButtonDropdown>
		</GEL>
	);
}

export default Example;
