import { GEL, jsx } from '@westpac/core';
import { Panel, Body, Footer } from '@westpac/panel';

const PanelOverride = ({ state: _, ...rest }) => <aside {...rest} />;

function Example({ brand }) {
	const overridesWithTokens = { ...brand };

	overridesWithTokens['@westpac/panel'] = {
		Panel: {
			styles: (styles) => ({
				...styles,
				borderColor: 'palevioletred',
				outline: '1px solid red',
			}),
			component: PanelOverride,
		},
		Header: {
			styles: (styles) => ({
				...styles,
				backgroundColor: 'palevioletred',
				borderColor: 'palevioletred',
			}),
		},
		Heading: {
			styles: (styles) => ({
				...styles,
				color: 'darkmagenta',
			}),
		},
		Body: {
			styles: (styles) => ({
				...styles,
				color: 'darkmagenta',
			}),
		},
		Footer: {
			styles: (styles) => ({
				...styles,
				backgroundColor: 'lightpink',
				border: 'pink',
				color: 'darkmagenta',
			}),
		},
	};

	return (
		<GEL brand={overridesWithTokens}>
			<h2>With overrides applied</h2>

			<Panel heading="Panel title">
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

			<Panel
				heading="Panel title"
				overrides={{
					Header: {
						styles: (styles) => ({
							...styles,
							outline: '3px dotted green',
						}),
					},
				}}
			>
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
