const { readdir, readFile, writeFile, stat } = require('fs/promises');
const { normalize } = require('path');

const WHITELIST = [
	'blender',
	'demos',
	'dist',
	'examples',
	'node_modules',
	'src',
	'tests',
];

async function getFolders( root ) {
	const folders = [];
	try {
		const files = await readdir(root);
		for (const file of files) {
			const subPath = normalize(`${root}/${file}`);
			const thisFile = await stat( subPath );
			if( thisFile.isDirectory() && !WHITELIST.includes(file) ) {
				folders.push( subPath );
			}
		}
	} catch (error) {
		console.error(error);
	}
	return folders;
}

async function fixPkg(folder) {
	const pkgPath = normalize(`${folder}/package.json`);

	const pkg = await readFile(pkgPath);
	const name = folder.replace(/\//g,'-');
	const main = `dist/westpac-${name}.cjs.js`;
	const newPkg = { main };
	// console.log(newPkg);
	await writeFile(pkgPath, JSON.stringify(newPkg, null, '\t'), { encoding: 'utf8' });
}

async function main(folder) {
	const folders = await getFolders(folder);

	await Promise.all(folders.map((folder) => (async () => {
		await fixPkg(folder);
	})()));
}

main('./pictogram/informative');
