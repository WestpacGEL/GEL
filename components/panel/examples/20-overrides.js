/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Panel, Header, Body, Footer } from '@westpac/panel';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

const Wrapper = props => <div {...props} />;

function Example({ brand }) {
	const overridesWithTokens = { ...brand };

	overridesWithTokens['@westpac/panel'] = {
		styles: styles => ({
			...styles,
			borderColor: 'palevioletred',
			outline: '1px solid red',
		}),
		component: Wrapper,
		subComponent: {
			Header: {
				styles: styles => ({
					...styles,
					backgroundColor: 'palevioletred',
					borderColor: 'palevioletred',
				}),
			},
			Body: {
				styles: styles => ({
					...styles,
					color: 'darkmagenta',
				}),
			},
			Footer: {
				styles: styles => ({
					...styles,
					backgroundColor: 'lightpink',
					border: 'pink',
					color: 'mediumvioletred',
				}),
			},
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

			<hr />

			<h2>With overrides and component overrides applied</h2>

			<Panel>
				<Header
					overrides={{
						subComponent: {
							Header: {
								styles: styles => ({
									...styles,
									outline: '3px dotted green',
								}),
							},
						},
					}}
				>
					Panel title
				</Header>
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
