var reactDocs = require('react-docgen');
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

const GEL = {
	brands: {},
	components: {},
};

let i = 0;

for (const component of components) {
	i++;
	process.stdout.write(`\x1b[2K\x1b[0G${i}/${total}`);
	if (component.isDirectory()) {
		const pkgJsonPath = path.normalize(
			`${__dirname}/../components/${component.name}/package.json`
		);
		if (!fs.existsSync(pkgJsonPath)) {
			return;
		}
		const pkg = require(pkgJsonPath);
		GEL.components[component.name] = {
			name: pkg.name,
			version: pkg.version,
			description: pkg.description,
			blender: pkg.blender,
			components: [],
		};
		if (pkg.components && Array.isArray(pkg.components)) {
			for (exportedComponent of pkg.components) {
				const componentPath = path.normalize(
					`${__dirname}/../components/${component.name}/src/${exportedComponent.src}`
				);
				const contents = fs.readFileSync(componentPath);
				const parsed = reactDocs
					.parse(contents, reactDocs.resolver.findAllExportedComponentDefinitions)
					.filter((cmp) => !/context/i.test(cmp.displayName)); // removing component context hooks

				GEL.components[component.name].components.push({
					[exportedComponent.name]: parsed[0],
				});
			}
		}
	}
}

for (const brand of brands) {
	i++;
	process.stdout.write(`\x1b[2K\x1b[0G${i}/${total}`);

	if (brand.isDirectory()) {
		const brandPkg = require(path.normalize(`${__dirname}/../brands/${brand.name}/package.json`));
		GEL.brands[brand.name] = {
			name: brandPkg.name,
			version: brandPkg.version,
			description: brandPkg.description,
			blender: brandPkg.blender,
		};
	}
}
process.stdout.write(`\x1b[2K\x1b[0G`);

const GELJson = path.normalize(`${__dirname}/../GEL.json`);
try {
	fs.writeFileSync(GELJson, JSON.stringify(GEL));
	console.log(`🎁  ${chalk.green('success')} GEL.json written to "${chalk.green(GELJson)}"\n`);
} catch (error) {
	console.error(`🛑  ${chalk.red('failed')} GEL.json not written to "${chalk.green(GELJson)}"\n`);
	console.error(error);
}
