/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Button, ButtonDropdown } from '@westpac/button';
import { HouseIcon } from '@westpac/icon';
import { Fragment } from 'react';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

const TextWrapper = ({ children, ...rest }) => (
	<Fragment>
		{children}
		<HouseIcon size="small" color="currentColor" css={{ marginLeft: '0.5em' }} />
	</Fragment>
);

function Example({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/button'] = {
		Button: {
			styles: styles => ({
				...styles,
				outline: '1px dotted blue',
			}),
		},
		TextWrapper: {
			component: TextWrapper,
		},
		Panel: {
			styles: styles => ({
				...styles,
				backgroundColor: 'palevioletred',
				color: 'white',
			}),
		},
	};

	return (
		<GEL brand={overridesWithTokens}>
			<Intopia ignore />
			<h2>With overrides applied</h2>
			<Button>Default standard</Button> <Button look="primary">Primary standard</Button>{' '}
			<Button look="hero">Hero standard</Button> <Button look="faint">Faint standard</Button>{' '}
			<Button look="link">Link</Button>
			<hr />
			<ButtonDropdown look="primary" text="Primary Dropdown">
				<p>Example dropdown content...</p>
			</ButtonDropdown>
			<h2>With overrides and component overrides</h2>
			<ButtonDropdown
				look="primary"
				text="Primary Dropdown"
				overrides={{
					Panel: {
						styles: styles => ({
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
