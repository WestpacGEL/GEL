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
					data={{ type: { name: item.name }, required: false, defaultValue: item.defaultValue }}
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
		value = data.type.value ? data.type.value.map((val, i) => <Code key={i}>"{val}"</Code>) : null;
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
	const { SPACING } = useBrand();
	return (
		<Table css={{ marginBottom: SPACING(4, true), borderColor: 'white' }} bordered striped>
			{caption && (
				<Caption css={{ margin: `${SPACING(4, true)}  0 ${SPACING(3, true)} 0` }}>
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

const SeparatorComponent = () => {
	const { COLORS, SPACING } = useBrand();
	return (
		<div
			css={{
				marginBottom: '0 !important',
			}}
		>
			<button
				css={{
					display: 'block',
					border: 0,
					background: 'transparent',
					cursor: 'pointer',
					textAlign: 'right',
					width: '100%',
					paddingRight: '18px !important',
				}}
				onClick={e => {
					e.preventDefault();
					const el = document.querySelector('main') || window;
					el.scroll({
						top: 0,
						left: 0,
						behavior: 'smooth',
					});
				}}
			>
				Top <span css={{ color: COLORS.primary }}>&uarr;</span>
			</button>
			<hr
				css={{
					border: 'none',
					borderTop: `solid 1px ${COLORS.border}`,
					margin: `${SPACING(2)} 0 0 0`,
				}}
			/>
		</div>
	);
};

const Component = ({ item, addTableContent }) => {
	const mq = useMediaQuery();
	const { SPACING, COLORS } = useBrand();
	const tableData = Object.keys(PropTypes.components[item.packageName])
		.filter(
			key => typeof PropTypes.components[item.packageName][key] === 'object' && key !== 'blender'
		)
		.map(key => {
			const { overrides, ...normalProps } = PropTypes.components[item.packageName][key].propTypes;
			return {
				name: key,
				overrideProps: { overrides: overrides },
				normalProps,
			};
		});

	return (
		<Fragment>
			<SeparatorComponent />
			<Container
				css={{
					...blocksContainerStyle,
					backgroundColor: '#fff',
					paddingBottom: SPACING(5),
					marginTop: '0 !important',
					marginBottom: '-20px !important',
				}}
			>
				<Grid
					css={mq({
						...blocksGridStyle,
						marginTop: [SPACING(6), SPACING(6), SPACING(10)],
					})}
					columns={12}
				>
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
				</Grid>
				<Grid
					columns={12}
					css={mq({
						...blocksGridStyle,
						marginTop: [SPACING(3), SPACING(3), SPACING(6)],
					})}
				>
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
		</Fragment>
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

		const update = changes =>
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
