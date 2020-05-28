/** @jsx jsx */

import React, { Suspense, Fragment } from 'react';

import { jsx, useMediaQuery } from '@westpac/core';
import { Heading } from '@westpac/heading';
import { Body } from '@westpac/body';
import { Cell } from '@westpac/grid';

import { FieldContainer, FieldLabel, FieldInput } from '@arch-ui/fields';
import { CheckboxPrimitive } from '@arch-ui/controls';
import { Input } from '@arch-ui/input';
import Select from '@arch-ui/select';

import preval from 'preval.macro';

import importCodeExamples from '../utils/babel-dynamic-code-block-import.macro';
import { exampleLevelOptions, exampleSizeOptions } from './_utils';

let data = preval`
const fs = require('fs');
const path = require('path');
const DEMO_FOLDER = 'demos';

let componentsDir = path.join(__dirname, '..', '..', 'components');
let packageDirectories = fs.readdirSync(componentsDir);
let examples = [];

function findDemos(dir, packageName) {
	fs.readdirSync(dir).forEach((file) => {
	  const fullPath = path.join(dir, file);
	  if (fs.lstatSync(fullPath).isDirectory()) {
		findDemos(fullPath, packageName);
	  } else if (fs.lstatSync(fullPath).isFile() && path.extname(fullPath) === '.js' && !file.startsWith('.') && !file.startsWith('_')) {
		const trimPath = fullPath.match(/(demos.*)/)[1];
		examples.push(path.join(packageName, trimPath));
	  }
	});
}

packageDirectories.forEach(pkg => {
	const pkgFile = path.join(componentsDir, pkg, 'package.json');
	if (fs.existsSync(pkgFile)) {
		const packageJSON = require(pkgFile);
		const packageName = packageJSON.name;
		const demoPath = path.join(componentsDir, pkg, DEMO_FOLDER);
		if(fs.existsSync(demoPath) && fs.lstatSync(demoPath).isDirectory()) {
			findDemos(demoPath, packageName);
		}
	}
});

module.exports = examples;
`;

const options = data.map((o) => ({ label: o, value: o }));
const codeExamples = importCodeExamples(data);
let valueCache = new Map();
let promiseCache = new Map();

function ShowCodeBlock({ showCode, showDemo, loadCodeBlock, context }) {
	let promise = promiseCache.get(loadCodeBlock);
	if (!promise) {
		promise = loadCodeBlock().then((mod) => {
			valueCache.set(loadCodeBlock, mod.default);
		});

		promiseCache.set(loadCodeBlock, promise);
	}

	let CodeBlock = valueCache.get(loadCodeBlock);
	if (!CodeBlock) {
		throw promise;
	}
	return <CodeBlock context={context} showCode={showCode} showDemo={false} />;
}

export const CodeExample = {
	editor: ({ value, onChange }) => {
		const currentValue = {
			codeExample: null,
			showCode: false,
			showDemo: false,
			level: 'h2',
			size: 6,
			heading: '',
			addSubText: false,
			subText: '',
			addTableContent: false,
			editHeader: false,
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
							checked={currentValue.editHeader}
							tabIndex="0"
							onChange={({ target }) => update({ editHeader: target.checked })}
						/>
						<span>Edit header</span>
					</label>
				</FieldContainer>
				{currentValue.editHeader && (
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
						<div css={{ display: 'flex' }}>
							<FieldContainer css={{ flexGrow: 1, marginRight: 30 }}>
								<FieldLabel
									htmlFor={'heading-level'}
									field={{ label: 'Heading Level', config: {} }}
								/>
								<Select
									id="heading-level"
									placeholder="Select a heading level"
									options={exampleLevelOptions}
									value={exampleLevelOptions.find((o) => o.value === currentValue.level)}
									onChange={({ value }) => update({ level: value })}
								/>
							</FieldContainer>
							<FieldContainer css={{ flexGrow: 1 }}>
								<FieldLabel
									htmlFor={'heading-size'}
									field={{ label: 'Heading Size', config: {} }}
								/>
								<Select
									id="heading-size"
									placeholder="Select a heading size"
									options={exampleSizeOptions}
									value={exampleSizeOptions.find((o) => o.value === currentValue.size)}
									onChange={({ value }) => update({ size: value })}
								/>
							</FieldContainer>
						</div>
						<div css={{ display: 'flex' }}>
							<FieldContainer css={{ marginRight: 42 }}>
								<label css={{ display: 'flex', margin: '10px 20px 0 0' }}>
									<CheckboxPrimitive
										checked={currentValue.addSubText}
										tabIndex="0"
										onChange={({ target }) => update({ addSubText: target.checked })}
									/>
									<span>Add sub text</span>
								</label>
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
						</div>
						{currentValue.addSubText && (
							<FieldContainer>
								<FieldLabel htmlFor={'heading-subtext'} field={{ label: 'Sub Text', config: {} }} />
								<Input
									id={'heading-subtext'}
									isMultiline
									value={currentValue.subText}
									onChange={(e) => update({ subText: e.target.value })}
								/>
							</FieldContainer>
						)}
					</Fragment>
				)}
				<Select
					isSearchable={true}
					placeholder="Select a code example"
					options={options}
					value={options.find((o) => o.value === currentValue.codeExample)}
					onChange={({ value }) => {
						update({ codeExample: value });
					}}
				/>
				<div css={{ display: 'flex' }}>
					<label css={{ display: 'flex', margin: '10px 20px 0 0' }}>
						<CheckboxPrimitive
							checked={currentValue.showCode}
							tabIndex="0"
							onChange={({ target }) => {
								update({ showCode: target.checked });
							}}
						/>
						<span>Show code</span>
					</label>
				</div>
			</Fragment>
		);
	},
	component: ({
		codeExample,
		showCode,
		showDemo = false,
		context,
		heading = '',
		size = 6,
		level = 'h2',
		addTableContent = false,
		subText = '',
	}) => {
		if (typeof window === 'undefined') {
			return <p>Loading...</p>;
		}

		const mq = useMediaQuery();
		const id = heading.replace(/ /g, '-').toLowerCase();
		const loadCodeBlock = codeExamples[codeExample];

		return (
			<Cell
				width={[12, null, null, 10]}
				left={[1, null, null, 2]}
				css={mq({
					marginBottom: ['30px', null, null, null, '48px'],
					height: 'auto',
					':last-child': { marginBottom: 0 },
				})}
			>
				<div css={mq({ marginBottom: ['18px', null, null, null, '24px'] })}>
					{heading && (
						<Heading
							id={id}
							tabIndex="-1"
							tag={level}
							size={[7, 7, 7, 7, size]}
							{...(addTableContent && { 'data-toc': true })}
							overrides={{
								Heading: {
									styles: (styles) =>
										mq({
											...styles,
											scrollMarginTop: '10.375rem',
											marginBottom: ['12px', null, null, null, '18px'],
										}),
								},
							}}
						>
							{heading}
						</Heading>
					)}
					{subText && (
						<Body css={{ p: { margin: 0 } }}>
							<p>{subText}</p>
						</Body>
					)}
				</div>
				<Suspense fallback={<p>Loading...</p>}>
					{loadCodeBlock && typeof window !== 'undefined' ? (
						<ShowCodeBlock
							loadCodeBlock={loadCodeBlock}
							context={context}
							showCode={showCode}
							showDemo={showDemo}
						/>
					) : (
						'Example not found.'
					)}
				</Suspense>
			</Cell>
		);
	},
};
