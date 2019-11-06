const cfonts = require('cfonts');
const chalk = require('chalk');
const path = require('path');
const fs = require('fs');

/**
 * Getting all files from a directory
 *
 * @param  {string} svgPath - The path to the folder containing all component svgs
 *
 * @param	{string} component - The component name i.e. icons, symbols
 *
 * @return {array}           - an array of all files inside a folder with the ".js" extension stripped
 */
function getSvgs(svgPath, component) {
	const svgs = fs
		.readdirSync(path.normalize(`${process.cwd()}/${svgPath}`))
		.map(item => item.replace('.js', ''));

	console.info(chalk.green(`✅ Got all ${component} successfully`));
	return svgs;
}

/**
 * Insert an array of component svgs into a js export file
 *
 * @param  {array}  svgs     - An array of component svgs
 * @param  {string} indexPath - The path to the export file
 * @param  {string} component - The component name
 */
function insertIndex(svgs, indexPath, component) {
	const index =
		svgs.map(svg => `export { ${svg} } from './${component}/${svg}';`).join('\n') + '\n';

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
 * @param  {array}  svgs   - An array of component svgs
 * @param  {string} pkgPath - The path to the package.json file
 */
function insertPkg(svgs, pkgPath) {
	pkgPath = path.normalize(`${process.cwd()}/${pkgPath}`);
	const pkg = require(pkgPath);

	if (!pkg.preconstruct) {
		pkg.preconstruct = {};
	}

	pkg.preconstruct.entrypoints = ['.', ...svgs];

	writePkg(pkgPath, pkg);

	console.info(chalk.green('✅ package.json file written successfully'));
}

/**
 * Fix the source key inside each svgs package.json file
 *
 * @param  {array} svgs - An array of all component svgs
 */
function fixSource(svgs, component) {
	svgs.map(svg => {
		// check if package exists
		const folderPath = path.normalize(`${process.cwd()}/${svg}`);
		if (!fs.existsSync(folderPath)) {
			// have a log about creating folder here
			// need to have error handlers here
			try {
				fs.mkdirSync(folderPath);
			} catch (error) {
				console.error(chalk.red(`❌ ${error}`));
				process.exit(1);
			}

			const package = {
				main: `dist/${component}.cjs.js`,
				module: `dist/${component}.esm.js`,
				preconstruct: {
					source: `../src/${component}/${svg}`,
				},
			};

			try {
				fs.writeFileSync(`${folderPath}/package.json`, JSON.stringify(package), {
					encoding: 'utf8',
				});
			} catch (error) {
				console.error(chalk.red(`❌ ${error}`));
				process.exit(1);
			}
		} else {
			const pkgPath = path.normalize(`${process.cwd()}/${svg}/package.json`);
			const pkg = require(pkgPath);

			if (!pkg.preconstruct) {
				pkg.preconstruct = {};
			}
			pkg.preconstruct.source = `../src/${component}/${svg}`;

			writePkg(pkgPath, pkg);
		}
	});

	console.info(chalk.green('✅ "source" inside all package.json files written successfully'));
}

/**
 * Only run this with flags so we can test the functions above
 */
const component = process.argv[3]; // icons or symbols

if (process.argv.includes('export')) {
	cfonts.say(`Building ${component} exports`, {
		font: 'chrome',
		colors: ['red', 'green', 'white'],
	});

	const svgs = getSvgs(`./src/${component}/`, component);
	insertIndex(svgs, 'src/index.js', component);
	insertPkg(svgs, 'package.json');
	fixSource(svgs, component);

	console.info();
}
