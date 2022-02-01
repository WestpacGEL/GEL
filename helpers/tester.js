const { getPackages } = require('@manypkg/get-packages');
const Spawn = require('child_process');
const chalk = require('chalk');

/**
 * Convert hrtime to seconds
 *
 * @param {array} elapsedTime - The elapsed time started and stopped with process.hrtime
 */
function convertHrtime(elapsedTime) {
	if (Array.isArray(elapsedTime)) {
		return (elapsedTime[0] + elapsedTime[1] / 1e9).toFixed(3);
	} else {
		return elapsedTime;
	}
}

(async () => {
	const { packages } = await getPackages(process.cwd());

	const longestName =
		[...packages].sort((a, b) => b.packageJson.name.length - a.packageJson.name.length)[0]
			.packageJson.name.length -
		packages[0].packageJson.name.split('/')[0].length -
		1;

	packages
		.filter((pkg) => pkg.packageJson.name !== '@westpac/website')
		.filter((pkg) => pkg.packageJson.scripts && pkg.packageJson.scripts.test)
		.map((workspace) => {
			const time = process.hrtime();

			process.stdout.write(
				`${chalk.bold.yellow(workspace.packageJson.name.split('/')[1].padEnd(longestName, ' '))}  `
			);

			const command = Spawn.spawnSync('npm', ['test'], {
				cwd: workspace.dir,
				stdio: process.env.DEBUG ? [process.stdin, process.stdout, process.stderr] : [],
				encoding: 'utf-8',
			});

			const elapsedTime = process.hrtime(time);

			if (command.status) {
				process.stdout.write(
					`${chalk.bgRed.black(`🛑  failed `)} (${convertHrtime(elapsedTime)}s)\n`
				);
				console.error(command.stderr.toString());
				console.log(command.stdout);
				process.exit(1);
			} else {
				process.stdout.write(
					`${chalk.bgGreen.black(`✅  success `)} (${convertHrtime(elapsedTime)}s)\n`
				);
			}
		});

	console.log('Tests done 🎉');
	process.exit(0);
})();
