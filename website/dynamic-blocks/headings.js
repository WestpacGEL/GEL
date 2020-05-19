/** @jsx jsx */

import { Fragment } from 'react';
import { jsx, useMediaQuery } from '@westpac/core';
import { Heading as WestpacHeading } from '@westpac/heading';
import { Body } from '@westpac/body';
import { Cell, Grid, Container } from '@westpac/grid';
import Select from '@arch-ui/select';
import { FieldContainer, FieldLabel, FieldInput } from '@arch-ui/fields';
import { CheckboxPrimitive } from '@arch-ui/controls';
import { Input } from '@arch-ui/input';
import { blocksContainerStyle } from '../src/components/_utils';

export const Heading = {
	editor: ({ value, onChange }) => {
		const currentValue = {
			level: 'h2',
			size: 5,
			heading: '',
			addTableContent: true,
			indent: true,
			subText: false,
			text: '',
			...(value || {}),
		};

		const update = (changes) =>
			onChange({
				...currentValue,
				...changes,
			});

		const levelOptions = [
			{ label: 'H1', value: 'h1' },
			{ label: 'H2', value: 'h2' },
			{ label: 'H3', value: 'h3' },
			{ label: 'H4', value: 'h4' },
			{ label: 'H5', value: 'h5' },
			{ label: 'H6', value: 'h6' },
		];

		const sizeOptions = [
			{ label: '1', value: 1 },
			{ label: '2', value: 2 },
			{ label: '3', value: 3 },
			{ label: '4', value: 4 },
			{ label: '5', value: 5 },
			{ label: '6', value: 6 },
			{ label: '7', value: 7 },
			{ label: '8', value: 8 },
			{ label: '9', value: 9 },
		];

		return (
			<Fragment>
				<FieldContainer>
					<FieldLabel htmlFor={'heading-text'} field={{ label: 'Heading Text', config: {} }} />
					<FieldInput>
						<Input
							id="heading-text"
							value={currentValue.heading}
							onChange={(e) => update({ heading: e.target.value })}
						/>
					</FieldInput>
				</FieldContainer>
				<FieldContainer>
					<FieldLabel htmlFor={'heading-level'} field={{ label: 'Heading Level', config: {} }} />
					<Select
						id="heading-level"
						placeholder="Select a heading level"
						options={levelOptions}
						value={levelOptions.find((o) => o.value === currentValue.level)}
						onChange={({ value }) => update({ level: value })}
					/>
				</FieldContainer>
				<FieldContainer>
					<FieldLabel htmlFor={'heading-size'} field={{ label: 'Heading Size', config: {} }} />
					<Select
						id="heading-size"
						placeholder="Select a heading size"
						options={sizeOptions}
						value={sizeOptions.find((o) => o.value === currentValue.size)}
						onChange={({ value }) => update({ size: value })}
					/>
				</FieldContainer>
				<FieldContainer>
					<label css={{ display: 'flex', margin: '10px 20px 0 0' }}>
						<CheckboxPrimitive
							checked={currentValue.addTableContent}
							tabIndex="0"
							onChange={({ target }) => update({ addTableContent: target.checked })}
						/>
						<span>Include in table of contents</span>
					</label>
				</FieldContainer>
				<FieldContainer>
					<label css={{ display: 'flex', margin: '10px 20px 0 0' }}>
						<CheckboxPrimitive
							checked={currentValue.indent}
							tabIndex="0"
							onChange={({ target }) => update({ indent: target.checked })}
						/>
						<span>Indent heading & subtext</span>
					</label>
				</FieldContainer>
				<FieldContainer>
					<label css={{ display: 'flex', margin: '10px 20px 0 0' }}>
						<CheckboxPrimitive
							checked={currentValue.subText}
							tabIndex="0"
							onChange={({ target }) => update({ subText: target.checked })}
						/>
						<span>Add sub text</span>
					</label>
				</FieldContainer>
				{currentValue.subText && (
					<FieldContainer>
						<FieldLabel htmlFor={'heading-subtext'} field={{ label: 'Sub Text', config: {} }} />
						<Input
							id={'heading-subtext'}
							isMultiline
							value={currentValue.text}
							onChange={(e) => update({ text: e.target.value })}
						/>
					</FieldContainer>
				)}
			</Fragment>
		);
	},

	component: ({ heading, size, level, addTableContent, indent = true, subText, text }) => {
		const id = heading.replace(/ /g, '-').toLowerCase();
		const indentWidth = indent ? [12, 12, 12, 10, 10] : 12;
		const indentLeft = indent ? [1, 1, 1, 2, 2] : 0;
		const mq = useMediaQuery();

		return (
			<Cell width={indentWidth} left={indentLeft}>
				<WestpacHeading
					id={id}
					tabIndex="-1"
					tag={level}
					size={size}
					{...(addTableContent && { 'data-toc': true })}
					overrides={{
						Heading: {
							styles: (styles) =>
								mq({
									...styles,
									scrollMarginTop: '10.375rem',
									marginBottom:
										size < 7
											? ['24px', null, null, null, '42px']
											: ['12px', null, null, null, '18px'],
								}),
						},
					}}
				>
					{heading}
				</WestpacHeading>
				{subText && text && (
					<Body css={{ p: { marginTop: 0 } }}>
						<p css={{ lineHeight: 2 }}>{text}</p>
					</Body>
				)}
			</Cell>
		);
	},
};
