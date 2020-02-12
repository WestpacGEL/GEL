import React, { useState, Suspense } from 'react';
import Select from '@arch-ui/select';
import preval from 'preval.macro';
import importCodeExamples from '../../schema/babel-dynamic-code-block-import.macro';

import {} from '@westpac/tabcordion/examples/00-default';

let data = preval`
const fs = require('fs');
const path = require('path');

let componentsDir = path.join(__dirname, '..', '..', '..', 'components');
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

function ShowCodeBlock({ loadCodeBlock }) {
	let promise = promiseCache.get(loadCodeBlock);
	if (!promise) {
		promise = loadCodeBlock().then(mod => {
			cache.set(loadCodeBlock, mod.default);
		});

		promiseCache.set(loadCodeBlock, promise);
	}

	let CodeBlock = valueCache.get(loadCodeBlock);
	if (!CodeBlock) {
		throw promise;
	}
	return <CodeBlock context="editor" />;
}

export const CodeExample = {
	editor: ({ value, onChange }) => {
		return (
			<Select
				isSearchable={true}
				placeholder="Select a new package for these docs"
				options={options}
				value={options.find(o => o.value === value.value)}
				onChange={({ value }) => {
					onChange({ value });
				}}
			/>
		);
	},
	component: ({ value }) => {
		const loadCodeBlock = codeExamples[value];
		// const [loaded, setLoaded] = useState();
		// window.setTimeout(() => {
		// 	setLoaded(true);
		// }, 1500);
		return (
			<Suspense fallback={<p>Loading...</p>}>
				{loadCodeBlock && typeof window !== 'undefined' ? (
					<ShowCodeBlock loadCodeBlock={loadCodeBlock} />
				) : (
					'No Example found'
				)}
			</Suspense>
		);
	},
};
