/** @jsx jsx */
import React, { Fragment } from 'react'; // Needed for within Keystone
import { jsx } from '@westpac/core';
import PropTypes from '../../prop-types.json';

const tableCellStyles = { border: 'solid 1px #e1ddd7', padding: 5 };
const Th = ({ children }) => (
	<th css={{ ...tableCellStyles, borderBottom: 'solid 3px #62194a' }}>{children}</th>
);
const Td = ({ children }) => <td css={{ ...tableCellStyles }}>{children}</td>;

const getType = type => {
	if (type.name === 'oneOfType') {
		return type.value.map(t => t.name).join(', ');
	}

	if (type.name === 'shape') {
		return 'Object';
	}

	return type.name;
};

const Component = ({ item }) => {
	const tableData = Object.keys(PropTypes[item.packageName]).map(key => {
		return {
			name: key,
			props: Object.keys(PropTypes[item.packageName][key]).map(k => {
				const c = PropTypes[item.packageName][key][k];
				return [
					k,
					getType(c.type),
					JSON.stringify(c.required),
					c.defaultValue ? c.defaultValue.value : '',
				];
			}),
		};
	});

	return (
		<Fragment>
			{tableData.map(data => {
				return (
					<Fragment key={`table-${data.name}`}>
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
			})}
		</Fragment>
	);
};

// Separator
export const PropsTable = {
	component: Component,
};
