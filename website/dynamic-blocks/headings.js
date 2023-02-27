import { Fragment } from 'react';
import { Heading as GELHeading } from '@westpac/heading';
import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Cell } from '@westpac/grid';
import { FieldContainer, FieldLabel, FieldInput } from '@arch-ui/fields';
import { CheckboxPrimitive } from '@arch-ui/controls';
import { Input } from '@arch-ui/input';
import Select from '@arch-ui/select';
import merge from 'lodash.merge';

import { Body, getTypeScaleMargin } from '../src/components/body';
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
			removeTopMargin: false,
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
					<FieldContainer css={{ marginRight: 42 }}>
						<label css={{ display: 'flex', margin: '10px 20px 0 0' }}>
							<CheckboxPrimitive
								checked={currentValue.removeTopMargin}
								tabIndex="0"
								onChange={({ target }) => update({ removeTopMargin: target.checked })}
							/>
							<span>Remove top margin</span>
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
		headingText,
		size,
		level,
		addTableContent,
		indent = true,
		indentLevel = 2,
		codeStyles = false,
		removeTopMargin = false,
		subText,
		text,
	}) => {
		const mq = useMediaQuery();
		const { SPACING } = useBrand();
		const id = headingText.replace(/ /g, '-').toLowerCase();

		return (
			<Fragment>
				<Cell width={[12, null, null, 11]}>
					<GELHeading
						id={id}
						tabIndex="-1" //TODO: set only if a jumplink heading
						tag={level}
						size={size <= 6 ? [7, null, size] : size}
						uppercase={size === 10}
						overrides={{
							Heading: {
								styles: (styles) =>
									merge({}, styles, {
										...mq({
											scrollMarginTop: [
												`calc(66px + 66px + ${SPACING(7)})`,
												null,
												`calc(66px + 90px + ${SPACING(10)})`,
											],
											marginTop: !removeTopMargin && getTypeScaleMargin(size).top,
											marginBottom: codeStyles
												? getTypeScaleMargin(size).bottomTight
												: getTypeScaleMargin(size).bottom,
										})[0],
									}),
							},
						}}
					>
						{heading}
					</GELHeading>
				</Cell>
				{subText && text && (
					<Cell width={[12, 11, 8, 7, 9]}>
						<Body>
							<p>{text}</p>
						</Body>
					</Cell>
				)}
			</Fragment>
		);
	},
};
