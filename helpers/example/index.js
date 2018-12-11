#!/usr/bin/env node

const path = require('path');
const fs = require('fs');

const exampleFolder = path.normalize(`${__dirname}/../../packages/${process.argv[2]}/examples/`);

if (fs.existsSync(exampleFolder)) {
	const files = fs
		.readdirSync(exampleFolder)
		.filter(file => !file.startsWith('.') && !file.startsWith('_'));

	console.log(files);
} else {
	console.error(`Package doesn't exist: ${exampleFolder}`);
}
