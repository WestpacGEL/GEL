'use strict';

const shell = require('child_process').execSync;
const fs = require('fs');
const path = require('path');
const readline = require('readline');
const chalk = require('chalk');
const cfonts = require('cfonts');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const qName = () => {
	return new Promise((resolve, reject) => {
		rl.question(chalk.blue('Enter component name: '), answer => {
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
		rl.question(chalk.blue('Enter component description: '), answer => {
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
		console.log(chalk.green.underline('\nCOMPONENT DETAILS'));
		console.log(chalk.cyan('Component Name: ') + name);
		console.log(chalk.cyan('Component Description: ') + description);
		rl.question(chalk.blue('\nConfirm creation (y/N)? '), answer => {
			resolve(answer);
		});
	});
};

const updateReferences = (dir, component) => {
	fs.readdirSync(dir).forEach(file => {
		let fullPath = path.join(dir, file);
		if (fs.lstatSync(fullPath).isDirectory()) {
			updateReferences(fullPath, component);
		} else {
			const { key, name, title, description } = component;
			let renamedPath = fullPath;
			if (/__COMPONENT_KEY__/.test(file)) {
				renamedPath = path.join(dir, file.replace('__COMPONENT_KEY__', key));
				fs.renameSync(fullPath, renamedPath);
			} else if (/__COMPONENT_NAME__/.test(file)) {
				renamedPath = path.join(dir, file.replace('__COMPONENT_NAME__', name));
				fs.renameSync(fullPath, renamedPath);
			}

			shell(`sed -i  '' 's/__COMPONENT_KEY__/${key}/g' ${renamedPath}`);
			shell(`sed -i  '' 's/__COMPONENT_NAME__/${name}/g' ${renamedPath}`);
			shell(`sed -i  '' 's/__COMPONENT_TITLE__/${title}/g' ${renamedPath}`);
			shell(`sed -i  '' 's/__COMPONENT_DESCRIPTION__/${description}/g' ${renamedPath}`);
		}
	});
};

const createComponent = component => {
	const src = `./helpers/.component-template`;
	const dest = `./components/${component.key}`;

	console.log(chalk.gray('[1/3] Copying template files...\n'));
	shell(`mkdir -p ${dest}`);
	shell(`cp -r ${src}/* ${dest}`);

	console.log(chalk.gray('[2/3] Updating template references...\n'));
	updateReferences(dest, component);
};

const main = async () => {
	cfonts.say('Create GEL Component', {
		font: 'chrome',
		colors: ['redBright', 'redBright', 'redBright'],
		space: false,
	});

	let name, description;

	do {
		name = await qName().catch(e => console.log(chalk.red(e)));
	} while (!name);

	do {
		description = await qDescription().catch(e => console.log(chalk.red(e)));
	} while (!description);

	const confirm = await qConfirm(name, description);
	rl.close();

	if (confirm === 'y') {
		const component = {
			key: name.charAt(0).toLowerCase() + name.slice(1),
			title: name.charAt(0).toLowerCase() + name.slice(1),
			name: name.charAt(0).toUpperCase() + name.slice(1),
			description: description,
		};

		console.log(chalk.gray(`\nCreating ${component.key} component...\n`));
		createComponent(component);
		console.log(chalk.gray('[3/3] Installing dependencies...\n'));
		shell(`bolt`);
		console.log(chalk.green(`Successfully created at ./components/${component.key}`));
	}
};

main();
