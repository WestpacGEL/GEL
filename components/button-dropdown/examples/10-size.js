import { GEL, jsx } from '@westpac/core';
import { ButtonDropdown } from '@westpac/button-dropdown';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
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
		</GEL>
	);
}

export default Example;
