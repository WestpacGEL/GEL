import { GEL, jsx } from '@westpac/core';
import { Panel, Header, Body, Footer } from '@westpac/panel';

// Heading tag as a component example
const PanelHeadingTag = ({ children, ...rest }) => (
	<h2 {...rest}>
		<span>{children}</span>
	</h2>
);

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Default heading</h2>
			<Panel heading="Panel title">
				<Body>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora officiis officia omnis
					aperiam voluptate suscipit, laudantium praesentium quas consequatur placeat, perferendis
					eligendi saepe in unde sequi dolores excepturi doloremque autem! Lorem ipsum dolor sit
					amet, consectetur adipisicing elit.
				</Body>
			</Panel>

			<hr />

			<h2>Custom heading tag</h2>

			<h3>
				Tag as <code>&lt;h3&gt;</code>
			</h3>
			<Panel heading="Panel title" headingTag="h3">
				<Body>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora officiis officia omnis
					aperiam voluptate suscipit, laudantium praesentium quas consequatur placeat, perferendis
					eligendi saepe in unde sequi dolores excepturi doloremque autem! Lorem ipsum dolor sit
					amet, consectetur adipisicing elit.
				</Body>
			</Panel>

			<h3>
				Tag as <code>&lt;h2&gt;</code> with child <code>&lt;span&gt;</code>, passed as a component
			</h3>
			<Panel heading="Panel title" headingTag={PanelHeadingTag}>
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
