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
			<ContentPanel look="success" title="Dos" content={yesList} />
			<ContentPanel look="warning" title="Don'ts" content={yesList} />
		</Grid>
	);
};

const ContentPanel = ({ title, look, content }) => {
	const { COLORS } = useBrand();
	return (
		<Cell>
			<Panel
				overrides={{
					Header: {
						styles: styles => ({
							...styles,
							background: COLORS[look],
							color: COLORS.light,
						}),
					},
				}}
			>
				<Header>{title}</Header>
				<Body>
					<ul>{content}</ul>
				</Body>
			</Panel>
		</Cell>
	);
};
