/** @jsx jsx */

import { Fragment } from 'react';
import { Heading as WestpacHeading } from '@westpac/heading';
import { jsx, useMediaQuery } from '@westpac/core';
import { Body } from '@westpac/body';
import { Cell } from '@westpac/grid';

import { FieldContainer, FieldLabel, FieldInput } from '@arch-ui/fields';
import { CheckboxPrimitive } from '@arch-ui/controls';
import { Input } from '@arch-ui/input';
import Select from '@arch-ui/select';

import merge from 'lodash.merge';
import { levelOptions, sizeOptions, indentOptions } from './_utils';

export const Heading = {
	editor: ({ value, onChange }) => {
		const currentValue = {
			level: 'h2',
			size: 6,
			heading: '',
			addTableContent: true,
			indent: true,
			indentLevel: 2,
			subText: false,
			codeStyles: false,
			text: '',
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
					<FieldLabel htmlFor={'heading-text'} field={{ label: 'Heading text', config: {} }} />
					<FieldInput>
						<Input
							id="heading-text"
							value={currentValue.heading}
							onChange={(e) => update({ heading: e.target.value })}
						/>
					</FieldInput>
				</FieldContainer>
				<div css={{ display: 'flex' }}>
					<FieldContainer css={{ flexGrow: 1, marginRight: 30 }}>
						<FieldLabel htmlFor={'heading-level'} field={{ label: 'Heading level', config: {} }} />
						<Select
							id="heading-level"
							placeholder="Select a heading level"
							options={levelOptions}
							value={levelOptions.find((o) => o.value === currentValue.level)}
							onChange={({ value }) => update({ level: value })}
						/>
					</FieldContainer>
					<FieldContainer css={{ flexGrow: 1, marginRight: 30 }}>
						<FieldLabel htmlFor={'heading-size'} field={{ label: 'Heading size', config: {} }} />
						<Select
							id="heading-size"
							placeholder="Select a heading size"
							options={sizeOptions}
							value={sizeOptions.find((o) => o.value === currentValue.size)}
							onChange={({ value }) => update({ size: value })}
						/>
					</FieldContainer>
					<FieldContainer css={{ flexGrow: 1 }}>
						<FieldLabel htmlFor={'heading-indent'} field={{ label: 'Indent level', config: {} }} />
						<Select
							id="heading-indent"
							placeholder="Select a heading size"
							options={indentOptions}
							value={indentOptions.find((o) => o.value === currentValue.indentLevel)}
							onChange={({ value }) => update({ indentLevel: value })}
						/>
					</FieldContainer>
				</div>
				<div css={{ display: 'flex' }}>
					<FieldContainer css={{ marginRight: 42 }}>
						<label css={{ display: 'flex', margin: '10px 20px 0 0' }}>
							<CheckboxPrimitive
								checked={currentValue.subText}
								tabIndex="0"
								onChange={({ target }) => update({ subText: target.checked })}
							/>
							<span>Add sub text</span>
						</label>
					</FieldContainer>
					<FieldContainer css={{ marginRight: 42 }}>
						<label css={{ display: 'flex', margin: '10px 20px 0 0' }}>
							<CheckboxPrimitive
								checked={currentValue.addTableContent}
								tabIndex="0"
								onChange={({ target }) => update({ addTableContent: target.checked })}
							/>
							<span>Include in table of contents</span>
						</label>
					</FieldContainer>
					<FieldContainer css={{ marginRight: 42 }}>
						<label css={{ display: 'flex', margin: '10px 20px 0 0' }}>
							<CheckboxPrimitive
								checked={currentValue.codeStyles}
								tabIndex="0"
								onChange={({ target }) => update({ codeStyles: target.checked })}
							/>
							<span>Use code example styles</span>
						</label>
					</FieldContainer>
				</div>
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

	component: ({
		heading,
		size,
		level,
		addTableContent,
		indent = true,
		indentLevel = 2,
		codeStyles = false,
		subText,
		text,
	}) => {
		const mq = useMediaQuery();
		const id = heading.replace(/ /g, '-').toLowerCase();
		const widthMap = {
			1: 12,
			2: [12, null, null, 10],
			3: [12, null, null, 9],
		};

		const indentMap = {
			1: 1,
			2: [1, null, null, 2],
			3: [1, null, 2, 3],
		};

		return (
			<Cell width={widthMap[indentLevel]} left={indentMap[indentLevel]}>
				<WestpacHeading
					id={id}
					tabIndex="-1"
					tag={level}
					size={size <= 6 ? [7, null, size] : size}
					overrides={{
						Heading: {
							styles: (styles) =>
								merge({}, styles, {
									...mq({
										scrollMarginTop: '10.375rem',
										marginBottom: ['24px', null, '42px'],
										...((codeStyles || size > 6) && {
											marginBottom: ['12px', null, '18px'],
										}),
										...(size >= 9 && { marginBottom: '9px', textTransform: 'uppercase' }),
									})[0],
								}),
						},
					}}
				>
					{heading}
				</WestpacHeading>
				{subText && text && (
					<Body css={mq({ p: { margin: ['0 0 18px', null, '0 0 24px'] } })}>
						<p>{text}</p>
					</Body>
				)}
			</Cell>
		);
	},
};
