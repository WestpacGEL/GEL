import React from 'react';
import { Panel, PanelHeader, PanelBody, PanelFooter } from '../src';

export default () => (
	<>
		<h2>Default instance (no styling props)</h2>
		<Panel>
			<PanelHeader>Panel title</PanelHeader>
			<PanelBody>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora officiis officia omnis
				aperiam voluptate suscipit, laudantium praesentium quas consequatur placeat, perferendis
				eligendi saepe in unde sequi dolores excepturi doloremque autem! Lorem ipsum dolor sit amet,
				consectetur adipisicing elit.
			</PanelBody>
			<PanelFooter>Panel footer</PanelFooter>
		</Panel>

		<hr />

		<h2>Hero</h2>
		<Panel appearance="hero">
			<PanelHeader>Panel title</PanelHeader>
			<PanelBody>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora officiis officia omnis
				aperiam voluptate suscipit, laudantium praesentium quas consequatur placeat, perferendis
				eligendi saepe in unde sequi dolores excepturi doloremque autem! Lorem ipsum dolor sit amet,
				consectetur adipisicing elit. Fuga quis perferendis, optio inventore natus nihil, qui
				laboriosam nostrum esse hic facilis cum corporis libero? Porro veritatis inventore
				dignissimos laborum minima. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Similique quidem nesciunt rerum sequi soluta consectetur porro rem eos ipsum debitis!
				Laboriosam aliquid, adipisci vel facere eveniet doloremque iusto ea iste. Lorem ipsum dolor
				sit amet, consectetur adipisicing elit. Hic debitis quae eum eveniet ducimus vero odit,
				officia consequatur vel repellat recusandae labore sed tempora reprehenderit minus incidunt
				deserunt voluptate ad.
			</PanelBody>
			<PanelFooter>Panel footer</PanelFooter>
		</Panel>

		<hr />

		<h2>Faint</h2>
		<Panel appearance="faint">
			<PanelHeader>Panel title</PanelHeader>
			<PanelBody>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora officiis officia omnis
				aperiam voluptate suscipit, laudantium praesentium quas consequatur placeat, perferendis
				eligendi saepe in unde sequi dolores excepturi doloremque autem! Lorem ipsum dolor sit amet,
				consectetur adipisicing elit. Fuga quis perferendis, optio inventore natus nihil, qui
				laboriosam nostrum esse hic facilis cum corporis libero? Porro veritatis inventore
				dignissimos laborum minima. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Similique quidem nesciunt rerum sequi soluta consectetur porro rem eos ipsum debitis!
				Laboriosam aliquid, adipisci vel facere eveniet doloremque iusto ea iste. Lorem ipsum dolor
				sit amet, consectetur adipisicing elit. Hic debitis quae eum eveniet ducimus vero odit,
				officia consequatur vel repellat recusandae labore sed tempora reprehenderit minus incidunt
				deserunt voluptate ad.
			</PanelBody>
			<PanelFooter>Panel footer</PanelFooter>
		</Panel>
	</>
);
