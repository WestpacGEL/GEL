import React from 'react';
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

export const CodeExample = {
	editor: ({ value, onChange }) => {
		console.log(value.value);
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
		const CodeBlock = codeExamples[value]; // () => import('jkndkbhjsdf')
		console.log({ value, CodeBlock, codeExamples });
		return CodeBlock ? <CodeBlock editor="editor" /> : <pre>Example Missing.</pre>;
	},
};
