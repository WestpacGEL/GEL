/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Button, ButtonDropdown } from '@westpac/button';
import { AndroidIcon, AppleIcon } from '@westpac/icon';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Intopia />
			<h2>Default instance</h2>
			<ButtonDropdown look="primary" text="Primary Dropdown">
				<p>Example dropdown content...</p>
			</ButtonDropdown>{' '}
			<ButtonDropdown look="hero" text="Hero Dropdown">
				<p>Example dropdown content...</p>
			</ButtonDropdown>{' '}
			<ButtonDropdown look="faint" text="Faint Dropdown">
				<p>Example dropdown content...</p>
			</ButtonDropdown>
			<br />
			<br />
			<ButtonDropdown look="primary" soft text="Primary Soft Dropdown">
				<p>Example dropdown content...</p>
			</ButtonDropdown>{' '}
			<ButtonDropdown look="hero" soft text="Hero Soft Dropdown">
				<p>Example dropdown content...</p>
			</ButtonDropdown>{' '}
			<ButtonDropdown look="faint" soft text="Faint Soft Dropdown">
				<p>Example dropdown content...</p>
			</ButtonDropdown>
			<h2>Size</h2>
			<ButtonDropdown look="primary" text="Small" size="small">
				<p>Example dropdown content...</p>
			</ButtonDropdown>
			<br />
			<br />
			<ButtonDropdown look="primary" text="Medium" size="medium">
				<p>Example dropdown content...</p>
			</ButtonDropdown>
			<br />
			<br />
			<ButtonDropdown look="primary" text="Large" size="large">
				<p>Example dropdown content...</p>
			</ButtonDropdown>
			<br />
			<br />
			<ButtonDropdown look="primary" text="Extra Large" size="xlarge">
				<p>Example dropdown content...</p>
			</ButtonDropdown>{' '}
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
			<h2>Block</h2>
			<ButtonDropdown look="primary" block text="Primary Dropdown">
				<p>Example dropdown content...</p>
			</ButtonDropdown>
			<br />
			<ButtonDropdown iconBefore={AndroidIcon} look="primary" block text="Primary Dropdown">
				<p>Example dropdown content...</p>
			</ButtonDropdown>
			<br />
			<ButtonDropdown iconAfter={AppleIcon} look="primary" block text="Primary Dropdown">
				<p>Example dropdown content...</p>
			</ButtonDropdown>
			<h2>Dropdown Size</h2>
			<ButtonDropdown look="primary" text="Small" dropdownSize="small">
				<p>Example dropdown content...</p>
			</ButtonDropdown>{' '}
			<ButtonDropdown look="primary" text="Medium" dropdownSize="medium">
				<p>Example dropdown content...</p>
			</ButtonDropdown>{' '}
			<ButtonDropdown look="primary" text="Large" dropdownSize="large">
				<p>Example dropdown content...</p>
			</ButtonDropdown>{' '}
		</GEL>
	);
}

export default Example;
