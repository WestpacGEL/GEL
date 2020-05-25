/** @jsx jsx */
import React, { Fragment } from 'react'; // Needed for within Keystone
import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Table, Thead, Tr, Th, Tbody, Td, Caption } from '@westpac/table';
import { Heading } from '@westpac/heading';
import PropTypes from '../../GEL.json';
import { Container, Grid, Cell } from '@westpac/grid';
import { blocksContainerStyle, blocksGridStyle } from '../src/components/_utils';
import { FieldContainer } from '@arch-ui/fields';
import { CheckboxPrimitive } from '@arch-ui/controls';

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
				padding: `0 ${SPACING(0.5)}`,
				margin: `${SPACING(1, true)}`,
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
	const type = data.type ? data.type.name : undefined;
	const required = <Code>{formatValue(data.required)}</Code>;
	const defaultValue = data.defaultValue ? (
		<Code>{formatValue(data.defaultValue.value)}</Code>
	) : null;
	const indent = level > 0 ? <Indent level={level} /> : '';
	const subValues = [];
	let value = null;
	level++;

	if (type === 'shape' || type === 'exact') {
		subValues.push(
			Object.entries(data.type.value).map(([name, data], i) => (
				<PTableRow key={i} name={name} data={data} level={level} />
			))
		);
	} else if (type === 'oneOfType') {
		subValues.push(
			data.type.value.map((item, i) => (
				<PTableRow
					key={i}
					name=""
					data={{
						type: { name: item.name, value: item.value },
						required: false,
						defaultValue: item.defaultValue,
					}}
					level={level}
				/>
			))
		);
	} else if (type === 'arrayOf') {
		subValues.push(
			<PTableRow
				key={`arrayOf-${name}-${level}`}
				name=""
				data={{
					type: {
						name: data.type && data.type.value && data.type.value.name,
						value: data.type && data.type.value && data.type.value.value,
					},
					required: false,
					defaultValue: data.type.defaultValue,
				}}
				level={level}
			/>
		);
	} else {
		value = Array.isArray(data.type.value)
			? data.type.value.map((val, i) => <Code key={i}>"{val}"</Code>)
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
 * @param {object} options.data    - The data object coming from the GEL.json
 * @param {string} options.caption - A caption for the table
 */
function PTable({ data, caption }) {
	if (Object.keys(data).length === 0) {
		return null;
	}

	const { SPACING } = useBrand();
	return (
		<Table css={{ marginBottom: SPACING(4, true), borderColor: 'white' }} bordered striped>
			{caption && <Caption>{caption}</Caption>}
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

const Component = ({ item, addTableContent }) => {
	const mq = useMediaQuery();
	const packageName = item.packageName.replace(/_/g, '-'); // removing underscores from graphql queries

	const tableData = Object.keys(PropTypes.components[packageName])
		.filter(
			(key) => typeof PropTypes.components[packageName][key] === 'object' && key !== 'blender'
		)
		.map((key) => {
			const { overrides, ...normalProps } = PropTypes.components[packageName][key].propTypes;
			return {
				name: key,
				overrideProps: overrides ? { overrides: overrides } : {},
				normalProps,
			};
		});

	return (
		<div
			css={mq({
				padding: ['36px 0 98px', null, null, null, '60px 0 122px'],
				backgroundColor: '#fff',
			})}
		>
			<Container>
				<Grid rowGap={['36px', '36px', '36px', '36px', '42px']}>
					<Cell width={12}>
						<Heading
							tag="h2"
							size={5}
							id="props"
							tabIndex="-1"
							{...(addTableContent && { 'data-toc': true })}
						>
							Props
						</Heading>
					</Cell>
					<Cell width={12}>
						{tableData.map(({ overrideProps, normalProps, name }) => {
							return (
								<Fragment key={`table-${name}`}>
									<PTable caption={`${name} Props`} data={normalProps} />
									<PTable caption={`${name} Overrides`} data={overrideProps} />
								</Fragment>
							);
						})}
					</Cell>
				</Grid>
			</Container>
		</div>
	);
};

// Separator
export const PropsTable = {
	editor: ({ value, onChange }) => {
		const currentValue = {
			addTableContent: false,
			heading: 'Props',
			...(value || {}),
		};

		const update = (changes) =>
			onChange({
				...currentValue,
				...changes,
			});
		return (
			<Fragment>
				<FieldContainer>
					<label css={{ display: 'flex', margin: '10px 20px 0 0' }}>
						<CheckboxPrimitive
							checked={currentValue.addTableContent}
							tabIndex="0"
							onChange={({ target }) => update({ addTableContent: target.checked })}
						/>
						<span>Include Props Table in table of contents?</span>
					</label>
				</FieldContainer>
			</Fragment>
		);
	},
	component: Component,
};
