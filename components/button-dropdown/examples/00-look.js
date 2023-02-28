import { GEL, jsx } from '@westpac/core';
import { ButtonDropdown } from '@westpac/button-dropdown';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Default</h2>
			<ButtonDropdown text="Default Dropdown">
				<p>
					Example dropdown <a href="#">content</a>...
				</p>
			</ButtonDropdown>{' '}
			<h2>Standard</h2>
			<ButtonDropdown look="primary" text="Primary Dropdown">
				<p>
					Example dropdown <a href="#">content</a>...
				</p>
			</ButtonDropdown>{' '}
			<ButtonDropdown look="hero" text="Hero Dropdown">
				<p>
					Example dropdown <a href="#">content</a>...
				</p>
			</ButtonDropdown>{' '}
			<ButtonDropdown look="faint" text="Faint Dropdown">
				<p>
					Example dropdown <a href="#">content</a>...
				</p>
			</ButtonDropdown>
			<h2>Soft</h2>
			<ButtonDropdown look="primary" soft text="Primary Soft Dropdown">
				<p>
					Example dropdown <a href="#">content</a>...
				</p>
			</ButtonDropdown>{' '}
			<ButtonDropdown look="hero" soft text="Hero Soft Dropdown">
				<p>
					Example dropdown <a href="#">content</a>...
				</p>
			</ButtonDropdown>{' '}
			<ButtonDropdown look="faint" soft text="Faint Soft Dropdown">
				<p>
					Example dropdown <a href="#">content</a>...
				</p>
			</ButtonDropdown>
		</GEL>
	);
}

export default Example;
