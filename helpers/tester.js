const { getPackages } = require('@manypkg/get-packages');
const Spawn = require('child_process');
const chalk = require('chalk');

(async () => {
	const { packages } = await getPackages(process.cwd());

	const longestName = [...packages].sort(
		(a, b) => a.packageJson.name.length < b.packageJson.name.length
	)[0].packageJson.name.length;

	packages
		.filter(pkg => pkg.packageJson.name !== '@westpac/website')
		.map(workspace => {
			process.stdout.write(
				`${chalk.bold.yellow(workspace.packageJson.name.split('/')[1].padEnd(longestName, ' '))}  `
			);

			const command = Spawn.spawnSync('npm', ['test'], {
				cwd: workspace.dir,
				stdio: process.env.DEBUG ? [process.stdin, process.stdout, process.stderr] : [],
				encoding: 'utf-8',
			});

			if (command.status) {
				process.stdout.write(chalk.bgRed.black('🛑  failed\n'));
				console.error(command.stderr.toString());
				console.log(command.stdout);
				process.exit(1);
			} else {
				process.stdout.write(chalk.bgGreen.black('✅  success\n'));
			}
		});

	console.log('Tests done 🎉');
	process.exit(0);
})();
