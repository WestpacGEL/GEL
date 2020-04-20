const parsePropTypes = require('parse-prop-types').default;
const chalk = require('chalk');
const path = require('path');
const fs = require('fs');

const components = fs.readdirSync(path.normalize(`${__dirname}/../components`), {
	withFileTypes: true,
});

const brands = fs.readdirSync(path.normalize(`${__dirname}/../brands`), {
	withFileTypes: true,
});

const total = components.length + brands.length;

const propTypes = {
	brands: {},
	components: {},
};
let i = 0;

for (const component of components) {
	i++;
	process.stdout.write(`\x1b[2K\x1b[0G${i}/${total}`);

	if (component.isDirectory()) {
		const requiredComponent = require(`@westpac/${component.name}`);
		const pkg = require(path.normalize(
			`${__dirname}/../components/${component.name}/package.json`
		));
		propTypes.components[component.name] = {};
		for (const key in requiredComponent) {
			propTypes.components[component.name][key] = {
				name: pkg.name,
				version: pkg.version,
				blender: pkg.blender,
				propTypes: {},
			};
			const exportedComponent = requiredComponent[key];
			if (exportedComponent && exportedComponent.propTypes) {
				propTypes.components[component.name][key].propTypes = parsePropTypes(exportedComponent);
			}
		}
	}
}

for (const brand of brands) {
	i++;
	process.stdout.write(`\x1b[2K\x1b[0G${i}/${total}`);

	if (brand.isDirectory()) {
		const brandPkg = require(path.normalize(`${__dirname}/../brands/${brand.name}/package.json`));
		propTypes.brands[brand.name] = {
			name: brandPkg.name,
			version: brandPkg.version,
			blender: brandPkg.blender,
		};
	}
}
process.stdout.write(`\x1b[2K\x1b[0G`);

propTypeJson = path.normalize(`${__dirname}/../GEL.json`);
try {
	fs.writeFileSync(propTypeJson, JSON.stringify(propTypes, null, '\t'));
	console.log(
		`🎁  ${chalk.green('success')} PropTypes json file written to "${chalk.green(propTypeJson)}"\n`
	);
} catch (error) {
	console.error(
		`🛑  ${chalk.red('failed')} PropTypes json file not writen to "${chalk.green(propTypeJson)}"\n`
	);
	console.error(error);
}
