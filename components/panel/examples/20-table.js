import React from 'react';

import { Panel, PanelHeader, PanelBody, PanelFooter } from '../src';
import { Table } from '../../table/src';

export default () => (
	<>
		<h3>Panel with body and table</h3>
		<Panel>
			<PanelHeader>Panel title</PanelHeader>
			<PanelBody>
				Some default panel content here. Nulla vitae elit libero, a pharetra augue. Aenean lacinia
				bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
				venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit.
			</PanelBody>
			<Table striped responsive>
				<caption>
					Table caption this table width is: <em>(100%)</em>
				</caption>
				<thead>
					<tr>
						<th>#</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Username</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Justin</td>
						<td>Spencer</td>
						<td>
							<i>Justin has no twitter</i>
						</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Dominik</td>
						<td>Wilkowski</td>
						<td>@wilkowskidom</td>
					</tr>
					<tr>
						<td>3</td>
						<td>Peter</td>
						<td>Clancy</td>
						<td>
							<i>Pete has no twitter either... :(</i>
						</td>
					</tr>
				</tbody>
			</Table>
		</Panel>

		<hr />

		<h3>Responsive panel with table only</h3>
		<Panel responsive>
			<PanelHeader>Panel title</PanelHeader>
			<Table striped responsive>
				<tbody>
					<tr>
						<td>1</td>
						<td>Justin</td>
						<td>Spencer</td>
						<td>
							<i>Justin has no twitter</i>
						</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Dominik</td>
						<td>Wilkowski</td>
						<td>@wilkowskidom</td>
					</tr>
					<tr>
						<td>3</td>
						<td>Peter</td>
						<td>Clancy</td>
						<td>
							<i>Pete has no twitter either... :(</i>
						</td>
					</tr>
					<tr>
						<td>4</td>
						<td>Someone else</td>
						<td>[not disclosed]</td>
						<td>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta repudiandae, dolores,
							quam sapiente esse maxime dolor provident impedit similique facilis reprehenderit.
							Provident voluptatem eum, ipsum illum quisquam quam beatae iste.
						</td>
					</tr>
				</tbody>
			</Table>
		</Panel>
	</>
);
