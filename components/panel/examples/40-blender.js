/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Panel, Body, Footer } from '../src/blender';

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
				<Footer>I am a footer</Footer>
			</Panel>
		</GEL>
	);
}

export default Example;
