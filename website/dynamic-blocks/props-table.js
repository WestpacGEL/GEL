/** @jsx jsx */
import React, { Fragment } from 'react'; // Needed for within Keystone
import { jsx } from '@westpac/core';
import PropTypes from '../../prop-types.json';

const tableCellStyles = { border: 'solid 1px #e1ddd7', padding: 5 };
const Th = ({ children }) => (
	<th css={{ ...tableCellStyles, borderBottom: 'solid 3px #62194a' }}>{children}</th>
);
const Td = ({ children }) => <td css={{ ...tableCellStyles }}>{children}</td>;
const Table = ({ data }) => {
	console.log(data);
	return (
		<Fragment>
			<h2>{data.name}</h2>
			<table css={{ borderCollapse: 'collapse', width: '100%' }}>
				<tbody>
					<tr>
						<Th>Property</Th>
						<Th>Type</Th>
						<Th>Required</Th>
						<Th>Default</Th>
					</tr>
					{data.props.map((d, i) => (
						<tr key={`row-${data.name}-${i}`}>
							{d.map(d => (
								<Td key={`td-${d}`}>{d}</Td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</Fragment>
	);
};
const sentenceCase = txt =>
	typeof txt === 'string' ? txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase() : txt;

const getType = type => {
	if (type.name === 'oneOf') {
		return type.value.map(t => JSON.stringify(t)).join(', ');
	}

	if (type.name === 'shape') {
		return 'Object';
	}

	return sentenceCase(type.name);
};

const Component = ({ item }) => {
	const tableData = Object.keys(PropTypes[item.packageName]).map(key => {
		const overrides = PropTypes[item.packageName][key]['overrides'];
		return {
			name: key,
			overrides: overrides
				? Object.keys(overrides.type.value).map(k => {
						const c = overrides.type.value[k];
						return [
							k,
							getType(c.type),
							sentenceCase(JSON.stringify(c.required)),
							c.defaultValue ? sentenceCase(JSON.stringify(c.defaultValue.value)) : '',
						];
				  })
				: [],
			props: Object.keys(PropTypes[item.packageName][key])
				.filter(key => key !== 'overrides')
				.map(k => {
					const c = PropTypes[item.packageName][key][k];
					return [
						k,
						getType(c.type),
						sentenceCase(JSON.stringify(c.required)),
						c.defaultValue ? sentenceCase(JSON.stringify(c.defaultValue.value)) : '',
					];
				}),
		};
	});
	return (
		<Fragment>
			{tableData.map(({ overrides, ...props }) => {
				return (
					<Fragment key={`table-${props.name}`}>
						<Table data={props} />
						{overrides ? <Table data={{ name: 'Overrides', props: overrides }} /> : null}
					</Fragment>
				);
			})}
		</Fragment>
	);
};

// Separator
export const PropsTable = {
	component: Component,
};
