/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Panel, Header, Body, Footer } from '@westpac/panel';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	const overridesWithTokens = { ...brand };

	overridesWithTokens['@westpac/panel'] = {
		panelCSS: {
			borderColor: 'palevioletred',
		},
		headerCSS: {
			backgroundColor: 'palevioletred',
			borderColor: 'palevioletred',
		},
		bodyCSS: {
			color: 'darkmagenta',
		},
		footerCSS: {
			backgroundColor: 'lightpink',
			border: 'pink',
			color: 'mediumvioletred',
		},
	};

	return (
		<GEL brand={overridesWithTokens}>
			<Intopia ignore />

			<h2>With overrides applied</h2>
			<Panel>
				<Header>Panel title</Header>
				<Body>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora officiis officia omnis
					aperiam voluptate suscipit, laudantium praesentium quas consequatur placeat, perferendis
					eligendi saepe in unde sequi dolores excepturi doloremque autem! Lorem ipsum dolor sit
					amet, consectetur adipisicing elit.
				</Body>
				<Footer>Panel footer</Footer>
			</Panel>
		</GEL>
	);
}

export default Example;
