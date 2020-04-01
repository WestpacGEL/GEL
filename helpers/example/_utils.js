const path = require('path');
const fs = require('fs');

/**
 * Make a file name more human readable
 *
 * @param  {string} filename - The file name
 *
 * @return {string}          - A name without the slashes
 */
const slugFromFilename = filename => {
	if (filename.match(/^[0-9][0-9]-/)) {
		return filename.slice(3, -3);
	} else if (filename.match(/.js$/)) {
		return filename.slice(0, -3);
	} else {
		return filename;
	}
};

/**
 * Make a slug more human readable
 *
 * @param  {string} slug - The slug string
 *
 * @return {string}      - Uppercased with spaces
 */
const labelFromSlug = slug => {
	return slug.replace(/-/g, ' ').replace(slug[0], slug[0].toUpperCase());
};

/**
 * Find all example files in a given directory
 *
 * @param  {string} component - The component path
 * @param  {string} parent    - The parent slug, optional
 *
 * @return {array}            - An array of objects with information about the example file
 */
const EXAMPLE_FOLDER = 'examples';

const findExampleFiles = (component, parent = '') => {
	const exampleDir = path.resolve(`${__dirname}/../../components/${component}/${EXAMPLE_FOLDER}`);

	if (fs.existsSync(exampleDir)) {
		const files = fs
			.readdirSync(exampleDir)
			.filter(file => !file.startsWith('.') && !file.startsWith('_') && file.endsWith('.js'));

		const { version } = require(path.normalize(
			`${__dirname}/../../components/${component}/package.json`
		));

		return files.map(filename => {
			const slug = `${component}/${slugFromFilename(filename)}`;
			const label = labelFromSlug(slug);

			return {
				component,
				version,
				filename,
				slug,
				label,
				parent,
				landing: parent.length > 0 ? false : true,
				relativePath: path.relative(__dirname, `${exampleDir}/${filename}`),
				absolutePath: `${exampleDir}/${filename}`,
				path: exampleDir,
				type: 'example',
			};
		});
	} else {
		console.error(`Package doesn't exist: ${exampleDir}`);
	}
};

/**
 * Find all demo files in a given directory
 *
 * @param  {string} component - The component path
 * @param  {string} parent    - The parent slug, optional
 *
 * @return {array}            - An array of objects with information about the example file
 */
const DEMO_FOLDER = 'demos';

const findDemoFiles = (component, parent = '') => {
	const demoDir = path.resolve(`${__dirname}/../../components/${component}/${DEMO_FOLDER}`);

	if (fs.existsSync(demoDir)) {
		const files = fs
			.readdirSync(demoDir)
			.filter(file => !file.startsWith('.') && !file.startsWith('_') && file.endsWith('.js'));

		const { version } = require(path.normalize(
			`${__dirname}/../../components/${component}/package.json`
		));

		return files.map(filename => {
			const slug = `${component}/demos/${slugFromFilename(filename)}`;
			const label = labelFromSlug(slug);

			return {
				component,
				version,
				filename,
				slug,
				label,
				parent,
				landing: parent.length > 0 ? false : true,
				relativePath: path.relative(__dirname, `${demoDir}/${filename}`),
				absolutePath: `${demoDir}/${filename}`,
				path: demoDir,
				type: 'demo',
			};
		});
	} else {
		console.error(`Package doesn't exist: ${demoDir}`);
	}
};

/**
 * Generate the code with all components for temp file
 *
 * @param  {array}  components - An array of all components
 * @param  {string} entry      - The entry file we will use
 * @param  {String} name       - The name of the component, optional
 *
 * @return {string}            - A string of code to be saved into a temp file for webpack
 */
function makeCode(components, entry, name = ' ', version = '') {
	return `
		import app from '${__dirname}/${entry}';

		const components = [
			${components
				.map(
					example => `{
					${Object.entries(example)
						.map(([key, value]) => `"${key}": ${JSON.stringify(value)}`)
						.join(',\n')},
					${example.absolutePath ? `Module: require('${example.absolutePath}'),` : ''}
				}`
				)
				.join(',\n')}
		];

		app(components, "${labelFromSlug(name)}", "${name}", "${version}");
	`;
}

module.exports = {
	slugFromFilename,
	labelFromSlug,
	findExampleFiles,
	findDemoFiles,
	makeCode,
};
