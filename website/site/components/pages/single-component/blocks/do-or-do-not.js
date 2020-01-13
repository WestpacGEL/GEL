/** @jsx jsx */
import { jsx, useBrand } from '@westpac/core';

import { Grid, Cell } from '@westpac/grid';
import { Panel, Header, Body } from '@westpac/panel';

export const YesNo = ({ yes, no }) => {
	const { COLORS } = useBrand();
	const yesList = yes.nodes.map(item => <li>{item.nodes[0].text}</li>);
	const noList = no.nodes.map(item => <li>{item.nodes[0].text}</li>);
	return (
		<Grid columns={2}>
			<Cell>
				<Panel
					overrides={{
						Header: {
							styles: styles => ({
								...styles,
								background: COLORS.warning,
								color: COLORS.light,
							}),
						},
					}}
				>
					<Header>Dos</Header>
					<Body>
						<ul>{yesList}</ul>
					</Body>
				</Panel>
			</Cell>
			<Cell>
				<Panel
					overrides={{
						Header: {
							styles: styles => ({
								...styles,
								backgroundColor: COLORS.success,
								color: COLORS.light,
							}),
						},
					}}
				>
					<Header>Don'ts</Header>
					<Body>
						<ul>{noList}</ul>
					</Body>
				</Panel>
			</Cell>
		</Grid>
	);
};
