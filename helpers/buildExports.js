const cfonts = require('cfonts');
const chalk = require('chalk');
const path = require('path');
const fs = require('fs');

/**
 * Getting all files from a directory
 *
 * @param  {string} svgPath   - The path to the folder containing all component svgs
 * @param  {string} component - The component name i.e. icons, symbols
 *
 * @return {array}           - an array of all files inside a folder with the ".js" extension stripped
 */
function getSvgs(svgPath, component) {
	const svgs = fs
		.readdirSync(path.normalize(`${process.cwd()}/${svgPath}`))
		.filter((name) => name.endsWith('.js'))
		.map((item) => item.replace('.js', ''));

	console.info(chalk.green(`✅ Got all ${component} successfully`));
	return svgs;
}

/**
 * Insert an array of component svgs into a js export file
 *
 * @param  {object} svgs      - An object of folder keys with svg component array values
 * @param  {string} indexPath - The path to the export file
 */
function insertIndex(svgs, indexPath) {
	const index =
		Object.entries(svgs)
			.map(([folder, components]) =>
				components
					.map((component) => `export { ${component} } from './${folder}/${component}';`)
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
 * Write a package.json file
 *
 * @param  {string} pkgPath - The path to the package.json
 * @param  {object} content - The content of the package.json as an object
 *
 * @return {boolean}        - True or false
 */
function writePkg(pkgPath, content) {
	try {
		fs.writeFileSync(pkgPath, JSON.stringify(content, null, '\t') + '\n', { encoding: 'utf8' });
	} catch (error) {
		console.error(chalk.red(`❌ ${error}`));
		process.exit(1);
	}

	return true;
}

/**
 * Insert an array of component svgs into the preconstruct entrypoint array of a package.json
 *
 * @param  {object} svgs    - An object of folder keys with svg component array values
 * @param  {string} pkgPath - The path to the package.json file
 */
function insertPkg(svgs, pkgPath) {
	pkgPath = path.normalize(`${process.cwd()}/${pkgPath}`);
	const pkg = require(pkgPath);

	if (!pkg.preconstruct) {
		pkg.preconstruct = {};
	}

	const svgList = Object.entries(svgs);
	const entrypoints = [];
	svgList.map(([folder, components]) => {
		components.forEach((component) => {
			entrypoints.push(svgList.length > 1 ? `${folder}/${component}` : component);
		});
	});

	pkg.preconstruct.entrypoints = ['.', ...entrypoints];

	writePkg(pkgPath, pkg);
	console.info(chalk.green('✅ package.json file written successfully'));
}

/**
 * Fix the source key inside each svgs package.json file
 *
 * @param  {object} svgs  - An object of folder keys with svg component array values
 */
function fixSource(svgs) {
	const svgList = Object.entries(svgs);
	svgList.map(([folder, components]) =>
		components.map((component) => {
			const pkgPath = path.normalize(
				`${process.cwd()}/${svgList.length > 1 ? `${folder}/${component}` : component}/package.json`
			);
			const pkg = require(pkgPath);

			if (!pkg.preconstruct) {
				pkg.preconstruct = {};
			}

			pkg.preconstruct.source = `${svgList.length > 1 ? '../..' : '..'}/src/${folder}/${component}`;

			writePkg(pkgPath, pkg);
		})
	);

	console.info(chalk.green('✅ "source" inside all package.json files written successfully'));
}

/**
 * Only run this with flags so we can test the functions above
 */
const components = process.argv.slice(3); // icons, symbols or pictograms

if (process.argv.includes('export')) {
	cfonts.say(`Building svg exports`, {
		font: 'chrome',
		colors: ['red', 'green', 'white'],
	});

	// Create an object containing all svgs
	const svgs = {};
	components.forEach((component) => {
		svgs[component] = getSvgs(`./src/${component}/`, component);
	});

	insertIndex(svgs, 'src/index.js');
	insertPkg(svgs, 'package.json');
	fixSource(svgs);

	console.info();
}
