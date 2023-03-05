import { GEL, jsx } from '@westpac/core';
import { ButtonDropdown } from '@westpac/button-dropdown';

function Example({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/button-dropdown'] = {
		Panel: {
			styles: (styles) => ({
				...styles,
				backgroundColor: 'palevioletred',
				color: 'white',
			}),
		},
	};

	return (
		<GEL brand={overridesWithTokens}>
			<h2>With overrides applied</h2>
			<ButtonDropdown look="primary" text="Primary Dropdown">
				<p>Example dropdown content...</p>
			</ButtonDropdown>
			<h2>With overrides and component overrides</h2>
			<ButtonDropdown
				look="primary"
				text="Primary Dropdown"
				overrides={{
					Panel: {
						styles: (styles) => ({
							...styles,
							backgroundColor: 'darkred',
						}),
					},
				}}
			>
				<p>Example dropdown content...</p>
			</ButtonDropdown>
		</GEL>
	);
}

export default Example;
