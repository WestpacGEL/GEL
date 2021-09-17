const cfonts = require('cfonts');
const chalk = require('chalk');
const path = require('path');
const fs = require('fs');

/**
 * Getting all files from a directory
 *
 * @param  {string} svgPath   - The path to the folder containing all component svgs
 *
 * @return {array}           - an array of all files inside a folder with the ".js" extension stripped
 */
function getSvgs(svgPath) {
	const svgs = fs
		.readdirSync(path.normalize(`${process.cwd()}/${svgPath}`))
		.filter((name) => {
			return name.endsWith('.js') && !['Icon.js', 'Symbol.js', 'index.js'].includes(name);
		})
		.map((item) => item.replace('.js', ''));

	console.info(chalk.green(`✅ Got all ${svgPath} SVGs successfully`));
	return svgs;
}

/**
 * Insert an array of component svgs into a js export file
 *
 * @param  {object|array} svgs - An array of component svgs or an object of folder keys with svg component array values
 * @param  {string} indexPath  - The path to the export file
 */
function insertIndex(svgs, indexPath) {
	const index =
		Object.entries(svgs)
			.map(([folder, components]) =>
				components
					.map(
						(component) =>
							`export { ${component} } from './${folder ? `${folder}/${component}` : component}';`
					)
					.join('\n')
			)
			.join('\n') + '\n';

	try {
		fs.writeFileSync(path.normalize(`${process.cwd()}/${indexPath}`), index, { encoding: 'utf8' });
	} catch (error) {
		console.error(chalk.red(`❌ ${error}`));
		process.exit(1);
	}

	console.info(chalk.green('✅ Index file written successfully'));
}

/**
 * Only run this with flags so we can test the functions above
 */

if (process.argv.includes('export')) {
	cfonts.say(`Building svg exports`, {
		font: 'chrome',
		colors: ['red', 'green', 'white'],
	});

	let folders = process.argv.slice(3);

	// Handle if no subdirectory args are passed
	if (folders.length === 0) {
		folders = [''];
	}

	const svgs = {};
	folders.forEach((folder) => {
		svgs[folder] = getSvgs(`./src/${folder ? `${folder}/` : ''}`);
	});

	insertIndex(svgs, 'src/index.js');

	console.info();
}
