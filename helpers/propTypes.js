const parsePropTypes = require('parse-prop-types').default;
const chalk = require('chalk');
const path = require('path');
const fs = require('fs');

const components = fs.readdirSync(path.normalize(`${__dirname}/../components`), {
	withFileTypes: true,
});

const propTypes = {};
let i = 0;

for (const comp of components) {
	i++;
	process.stdout.write(`\x1b[2K\x1b[0G${i}/${components.length}`);

	if (comp.isDirectory()) {
		const mod = require(`@westpac/${comp.name}`);
		propTypes[comp.name] = {};
		for (const key in mod) {
			const thing = mod[key];
			if (thing && thing.propTypes) {
				propTypes[comp.name][key] = parsePropTypes(thing);
			}
		}
	}
}
process.stdout.write(`\x1b[2K\x1b[0G`);

propTypeJson = path.normalize(`${__dirname}/../prop-types.json`);
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
