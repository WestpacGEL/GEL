/** @jsx jsx */
import React, { Fragment } from 'react'; // Needed for within Keystone
import { jsx, useBrand } from '@westpac/core';
import { Table, Thead, Tr, Th, Tbody, Td, Caption } from '@westpac/table';
import { Heading } from '@westpac/heading';
import PropTypes from '../../GEL.json';

/**
 * A small helper component for inline code blocks
 */
const Code = ({ children, ...rest }) => {
	const { COLORS, SPACING } = useBrand();
	return (
		<pre
			css={{
				display: 'inline-block',
				overflow: 'auto',
				background: COLORS.background,
				padding: `${SPACING(0.5, true)} ${SPACING(0.5)}`,
				margin: `0 ${SPACING(1, true)}`,
				border: `1px solid ${COLORS.border}`,
				color: COLORS.muted,
				fontSize: '0.9em',
				borderRadius: '2px',
				verticalAlign: 'middle',
			}}
			{...rest}
		>
			<code>{children}</code>
		</pre>
	);
};

/**
 * A small helper function to display values
 *
 * @param  {any} value - A value to be displayed
 * @return {any}       - The value ready for string digestion
 */
function formatValue(value) {
	if (typeof value === 'string') {
		return `"${value}"`;
	} else if (typeof value === 'boolean') {
		return value ? 'true' : 'false';
	} else {
		return value;
	}
}

/**
 * A small helper function to show indentation
 *
 * @param {number} options.level - The level of indentation
 */
function Indent({ level }) {
	const { COLORS, SPACING } = useBrand();

	return (
		<span
			css={{ color: COLORS.muted, margin: `0 0.5em 0 ${SPACING(7, false, '') * (level - 1)}em` }}
		>
			└─
		</span>
	);
}

/**
 * A row component to render each row of the table
 *
 * @param {string} options.name  - The name of the prop
 * @param {object} options.data  - The data of the prop
 * @param {number} options.level - The level, will be incremented with each recursive call
 */
function PTableRow({ name, data, level = 0 }) {
	const type = data.type.name;
	const required = <Code>{formatValue(data.required)}</Code>;
	const defaultValue = data.defaultValue ? (
		<Code>{formatValue(data.defaultValue.value)}</Code>
	) : null;
	const indent = level > 0 ? <Indent level={level} /> : '';
	const subValues = [];
	let value = null;
	level++;
	if (type === 'oneOfType' || type === 'shape' || type === 'exact') {
		subValues.push(
			Object.entries(data.type.value).map(([name, data], i) => (
				<PTableRow key={i} name={name} data={data} level={level} />
			))
		);
	} else {
		value = data.type.value
			? data.type.value.map((val, i) => <Code key={i}>{formatValue(val)}</Code>)
			: null;
	}
	return (
		<Fragment>
			<Tr>
				<Td>
					{indent}
					{name}
				</Td>
				<Td>
					<Code>{type}</Code>
				</Td>
				<Td>{value}</Td>
				<Td>{defaultValue}</Td>
				<Td>{required}</Td>
			</Tr>
			{subValues}
		</Fragment>
	);
}

/**
 * The props table component
 *
 * @param {object} options.data    - The data object coming from the prop-types.json
 * @param {string} options.caption - A caption for the table
 */
function PTable({ data, caption }) {
	const { SPACING } = useBrand();
	return (
		<Table css={{ marginBottom: SPACING(4, true) }} bordered striped>
			{caption && (
				<Caption
					css={{ fontWeight: 'bold', margin: `${SPACING(4, true)}  0 ${SPACING(3, true)} 0` }}
				>
					{caption}
				</Caption>
			)}
			<Thead>
				<Tr>
					<Th scope="col">Property</Th>
					<Th scope="col">Type</Th>
					<Th scope="col">Value</Th>
					<Th scope="col">Default</Th>
					<Th scope="col">Required</Th>
				</Tr>
			</Thead>
			<Tbody>
				{Object.entries(data).map(([name, data], i) => (
					<PTableRow key={i} name={name} data={data} />
				))}
			</Tbody>
		</Table>
	);
}

const Component = ({ item }) => {
	const tableData = Object.keys(PropTypes.components[item.packageName]).map(key => {
		const { overrides, ...normalProps } = PropTypes.components[item.packageName][key].propTypes;
		return {
			name: key,
			overrideProps: { overrides },
			normalProps,
		};
	});

	return (
		<Fragment>
			{tableData.map(({ overrideProps, normalProps, name }) => {
				return (
					<Fragment key={`table-${name}`}>
						<PTable caption={`${name} Props`} data={normalProps} />
						<PTable caption={`${name} Overrides`} data={overrideProps} />
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
