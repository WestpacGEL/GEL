/** @jsx jsx */
import React, { Suspense, Fragment } from 'react';
import { jsx } from '@westpac/core';
import Select from '@arch-ui/select';
import { CheckboxPrimitive } from '@arch-ui/controls';
import preval from 'preval.macro';
import importCodeExamples from './babel-dynamic-code-block-import.macro';

let data = preval`
const fs = require('fs');
const path = require('path');

let componentsDir = path.join(__dirname, '..', '..', 'components');
let packageDirectories = fs.readdirSync(componentsDir);
let examples = [];

packageDirectories.forEach(pkg => {
	const pkgFile = path.join(componentsDir, pkg, 'package.json');
	const packageExists = fs.existsSync(pkgFile);
	if (packageExists) {
		const packageJSON = require(pkgFile);
		fs.readdirSync(path.join(componentsDir, pkg, 'examples')).forEach(example => {
			const fullPath = path.join(componentsDir, pkg, 'examples', example);
			if (fs.lstatSync(fullPath).isFile() && path.extname(fullPath) === '.js') {
				const packageName = packageJSON.name;
				examples.push(path.join(packageName, 'examples', example));
			}
		});
	}
});
module.exports = examples;
`;

const options = data.map(o => ({ label: o, value: o }));
const codeExamples = importCodeExamples(data);
let valueCache = new Map();
let promiseCache = new Map();

function ShowCodeBlock({ showCode, showDemo, loadCodeBlock, context }) {
	let promise = promiseCache.get(loadCodeBlock);
	if (!promise) {
		promise = loadCodeBlock().then(mod => {
			valueCache.set(loadCodeBlock, mod.default);
		});

		promiseCache.set(loadCodeBlock, promise);
	}

	let CodeBlock = valueCache.get(loadCodeBlock);
	if (!CodeBlock) {
		throw promise;
	}
	return <CodeBlock context={context} code={showCode} demo={showDemo} />;
}

export const CodeExample = {
	editor: ({ value, onChange }) => {
		console.log(value);
		const currentValue = {
			codeExample: null,
			showCode: true,
			showDemo: true,
			...(value || {}),
		};

		const update = changes =>
			onChange({
				...currentValue,
				...changes,
			});

		return (
			<Fragment>
				<Select
					isSearchable={true}
					placeholder="Select a code example"
					options={options}
					value={options.find(o => o.value === currentValue.codeExample)}
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
					<label css={{ display: 'flex', margin: '10px 20px 0 0' }}>
						<CheckboxPrimitive
							checked={currentValue.showDemo}
							tabIndex="0"
							onChange={({ target }) => {
								update({ showDemo: target.checked });
							}}
						/>
						<span>Show demo</span>
					</label>
				</div>
			</Fragment>
		);
	},
	component: ({ codeExample, showCode, showDemo, context }) => {
		if (typeof window === 'undefined') {
			return <p>Loading...</p>;
		}
		const loadCodeBlock = codeExamples[codeExample];

		return (
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
		);
	},
};
