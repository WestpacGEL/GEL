const path = require('path');
const fs = require('fs');

const DEMO_FOLDER = 'demos';
const componentsDir = path.normalize(`${__dirname}/../components/`);
const packageDirectories = fs.readdirSync(componentsDir);
const examples = [];

function findDemos(dir, packageName) {
	fs.readdirSync(dir).forEach((file) => {
		const fullPath = path.join(dir, file);
		if (fs.lstatSync(fullPath).isDirectory()) {
			findDemos(fullPath, packageName);
		} else if (
			fs.lstatSync(fullPath).isFile() &&
			path.extname(fullPath) === '.js' &&
			!file.startsWith('.') &&
			!file.startsWith('_')
		) {
			const trimPath = fullPath.match(/(demos.*)/)[1];
			examples.push(path.join(packageName, trimPath));
		}
	});
}

packageDirectories.forEach((pkg) => {
	const pkgFile = path.join(componentsDir, pkg, 'package.json');
	if (fs.existsSync(pkgFile)) {
		const packageJSON = require(pkgFile);
		const packageName = packageJSON.name;
		const demoPath = path.join(componentsDir, pkg, DEMO_FOLDER);
		if (fs.existsSync(demoPath) && fs.lstatSync(demoPath).isDirectory()) {
			findDemos(demoPath, packageName);
		}
	}
});

const jsBody = `
export const data = ${JSON.stringify(examples)};
export const codeExamples = {
${examples
	.map((example) => `	${JSON.stringify(example)}: () => import(${JSON.stringify(example)})`)
	.join(',\n')},
};
`;

const onlyDataJs = `export const data = ${JSON.stringify(examples)};
`;

try {
	fs.writeFileSync(
		path.normalize(`${__dirname}/../website/dynamic-blocks/dynamic-blocks-demos.js`),
		jsBody
	);
	fs.writeFileSync(
		path.normalize(`${__dirname}/../website-backend/admin/component-blocks/code-examples-data.ts`),
		onlyDataJs
	);
} catch (error) {
	console.error('🛑  Dynamic block importer failed', error);
}

console.log('✅  Dynamic block importer written');
