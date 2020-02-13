/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Button, ButtonDropdown } from '@westpac/button';
import { AndroidIcon, AppleIcon } from '@westpac/icon';

import { Intopia } from '../../../helpers/example/components/Intopia.js';
import { Playground } from '../../../website/site/components/playground/macro';

function Example({ context }) {
	return (
		<Playground context={context} brand={brand}>
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
			</ButtonDropdown>
			<h2>Responsive size</h2>
			<ButtonDropdown
				look="primary"
				text="Responsive size"
				size={['small', 'medium', 'large', 'xlarge']}
			>
				<p>Example dropdown content...</p>
			</ButtonDropdown>
			<br />
			<br />
			<ButtonDropdown
				look="primary"
				text="Responsive size"
				size={['xlarge', 'small', 'large', 'medium']}
			>
				<p>Example dropdown content...</p>
			</ButtonDropdown>
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
			<br />
			<br />
			<ButtonDropdown
				look="primary"
				text="Responsive"
				dropdownSize={['large', 'small', 'large', 'small']}
			>
				<p>Example dropdown content...</p>
			</ButtonDropdown>{' '}
			<h2>Dropdown long content</h2>
			<ButtonDropdown text="Long content">
				<p>Example dropdown content...</p>
				<p>Example dropdown content...</p>
				<p>Example dropdown content...</p>
				<p>Example dropdown content...</p>
				<p>Example dropdown content...</p>
				<p>Example dropdown content...</p>
				<p>Example dropdown content...</p>
				<p>Example dropdown content...</p>
				<p>Example dropdown content...</p>
				<p>Example dropdown content...</p>
				<p>Example dropdown content...</p>
			</ButtonDropdown>
		</Playground>
	);
}

export default Example;
