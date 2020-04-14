/** @jsx jsx */
import React, { Suspense, Fragment } from 'react';
import { jsx } from '@westpac/core';
import Select from '@arch-ui/select';
import preval from 'preval.macro';
import importCodeExamples from '../utils/babel-dynamic-code-block-import.macro';
import { VisionFilter } from '../src/components/a11y-filter';

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

const options = data.map(o => ({ label: o, value: o }));
const codeExamples = importCodeExamples(data);
let valueCache = new Map();
let promiseCache = new Map();

function ShowCodeBlock({ loadCodeBlock, context }) {
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
	return (
		<VisionFilter>
			<CodeBlock context={context} showCode={false} showDemo={false} />
		</VisionFilter>
	);
}

export const VisionFilters = {
	editor: ({ value, onChange }) => {
		const currentValue = {
			codeExample: null,
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
			</Fragment>
		);
	},
	component: ({ codeExample, context }) => {
		if (typeof window === 'undefined') {
			return <p>Loading...</p>;
		}
		const loadCodeBlock = codeExamples[codeExample];

		return (
			<Suspense fallback={<p>Loading...</p>}>
				{loadCodeBlock && typeof window !== 'undefined' ? (
					<ShowCodeBlock loadCodeBlock={loadCodeBlock} context={context} />
				) : (
					'Example not found.'
				)}
			</Suspense>
		);
	},
};
