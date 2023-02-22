import { GEL, jsx } from '@westpac/core';
import { Panel, Body } from '@westpac/panel';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Default</h2>
			<Panel heading="Panel title">
				<Body>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora officiis officia omnis
					aperiam voluptate suscipit, laudantium praesentium quas consequatur placeat, perferendis
					eligendi saepe in unde sequi dolores excepturi doloremque autem! Lorem ipsum dolor sit
					amet, consectetur adipisicing elit.
				</Body>
			</Panel>

			<hr />

			<h2>Hero</h2>
			<Panel look="hero" heading="Panel title">
				<Body>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora officiis officia omnis
					aperiam voluptate suscipit, laudantium praesentium quas consequatur placeat, perferendis
					eligendi saepe in unde sequi dolores excepturi doloremque autem! Lorem ipsum dolor sit
					amet, consectetur adipisicing elit.
				</Body>
			</Panel>

			<hr />

			<h2>Faint</h2>
			<Panel look="faint" heading="Panel title">
				<Body>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora officiis officia omnis
					aperiam voluptate suscipit, laudantium praesentium quas consequatur placeat, perferendis
					eligendi saepe in unde sequi dolores excepturi doloremque autem! Lorem ipsum dolor sit
					amet, consectetur adipisicing elit.
				</Body>
			</Panel>
		</GEL>
	);
}

export default Example;
