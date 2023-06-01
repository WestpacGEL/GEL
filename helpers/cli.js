'use strict';

const shell = require('child_process').execSync;
const readline = require('readline');
const cfonts = require('cfonts');
const chalk = require('chalk');
const path = require('path');
const fs = require('fs');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const qName = () => {
	return new Promise((resolve, reject) => {
		rl.question('Enter component name: ', (answer) => {
			if (answer) {
				resolve(answer);
			} else {
				reject('Please enter a component name!!');
			}
		});
	});
};

const qDescription = () => {
	return new Promise((resolve, reject) => {
		rl.question('Enter component description: ', (answer) => {
			if (answer) {
				resolve(answer);
			} else {
				reject('Please enter a component description!!');
			}
		});
	});
};

const qConfirm = (name, description) => {
	return new Promise((resolve, reject) => {
		console.info(chalk.green.underline('\nCOMPONENT DETAILS'));
		console.info(chalk.cyan('Component Name: ') + name);
		console.info(chalk.cyan('Component Description: ') + description);
		rl.question('\nConfirm creation (y/N)? ', (answer) => {
			resolve(answer);
		});
	});
};

const updateReferences = (dir, component) => {
	fs.readdirSync(dir).forEach((file) => {
		let fullPath = path.join(dir, file);
		if (fs.lstatSync(fullPath).isDirectory()) {
			updateReferences(fullPath, component);
		} else {
			const { key, name, title, description } = component;
			let renamedPath = fullPath;
			if (/_COMPONENT_KEY_/.test(file)) {
				renamedPath = path.join(dir, file.replace('_COMPONENT_KEY_', key));
				fs.renameSync(fullPath, renamedPath);
			} else if (/_COMPONENT_NAME_/.test(file)) {
				renamedPath = path.join(dir, file.replace('_COMPONENT_NAME_', name));
				fs.renameSync(fullPath, renamedPath);
			}

			shell(`sed -i  '' 's/_COMPONENT_KEY_/${key}/g' ${renamedPath}`);
			shell(`sed -i  '' 's/_COMPONENT_NAME_/${name}/g' ${renamedPath}`);
			shell(`sed -i  '' 's/_COMPONENT_TITLE_/${title}/g' ${renamedPath}`);
			shell(`sed -i  '' 's/_COMPONENT_DESCRIPTION_/${description}/g' ${renamedPath}`);
		}
	});
};

const createComponent = (component) => {
	const src = `./helpers/.component-template`;
	const dest = `./components/${component.folderName}`;

	console.info(chalk.gray('[1/3] Copying template files...\n'));
	shell(`mkdir -p ${dest}`);
	shell(`cp -r ${src}/* ${dest}`);

	console.info(chalk.gray('[2/3] Updating template references...\n'));
	updateReferences(dest, component);
};

const main = async () => {
	cfonts.say('Create GEL Component', {
		font: 'chrome',
		gradient: ['red', 'blue'],
		space: false,
	});

	let packageName = process.argv.slice(2)[0],
		description;

	if (!packageName) {
		do {
			packageName = await qName().catch((e) => console.info(chalk.red(e)));
		} while (!packageName);
	}

	do {
		description = await qDescription().catch((e) => console.info(chalk.red(e)));
	} while (!description);

	const folderName = packageName.toLowerCase();

	const componentTitle = packageName
		.split('-')
		.map((part) => part[0].toUpperCase() + part.slice(1))
		.join(' ');

	const componentName = componentTitle.replaceAll(' ', '');

	const confirm = await qConfirm(packageName, description);
	rl.close();

	if (confirm === 'y') {
		const component = {
			folderName: folderName,
			key: packageName,
			title: componentTitle,
			name: componentName,
			description: description,
		};

		console.info(chalk.gray(`\nCreating ${component.key} component...\n`));
		createComponent(component);
		console.info(chalk.gray('[3/3] Installing dependencies...\n'));
		shell(`yarn manypkg fix`, { stdio: 'inherit' });
		console.info(chalk.green(`Successfully created at ./components/${component.key}`));
	}
};

main();
