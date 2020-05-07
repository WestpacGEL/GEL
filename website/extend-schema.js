const fs = require('fs');
const path = require('path');

const isDev = process.env.NODE_ENV !== 'production';

const packages = fs
	.readdirSync('../components')
	// ToDo: Maybe warn if folder could not load?
	.filter((item) => fs.existsSync(path.join(__dirname, `../components/${item}/package.json`)))
	.map((item) => {
		const pkg = require(path.join(__dirname, `../components/${item}/package.json`));
		return { ...pkg, path: item };
	});

const getPackagesFromFileSystem = () => packages;
const getPackageFromFileSystem = (item) => packages.filter((pkg) => pkg.path === item);

// This is stubbed out for later
const getPackagesFromRemote = getPackagesFromFileSystem;
const getPackageFromRemote = getPackageFromFileSystem;

// Anything I rip from package becomes a required key. Sticking to standard npm keys.
const formatPackageData = (pkgData) => {
	return pkgData.map((pkg) => {
		const cleanName = pkg.name.split('/').reverse()[0];
		return { ...pkg, packageName: pkg.name, name: cleanName };
	});
};

const resolveComponents = (args) =>
	formatPackageData(isDev ? getPackagesFromFileSystem(args) : getPackagesFromRemote(args));

const resolveComponent = (args) =>
	formatPackageData(isDev ? getPackageFromFileSystem(args) : getPackageFromRemote(args))[0];

module.exports = {
	resolveComponent,
	resolveComponents,
};
