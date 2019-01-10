const Spawn = require('child_process');
const CFonts = require('cfonts');
const Bolt = require('bolt');

(async () => {
	const workspaces = await Bolt.getWorkspaces();

	workspaces.map(workspace => {
		CFonts.say(`${workspace.name.split('/')[1]}`, {
			colors: ['redBright', 'magenta', 'whiteBright'],
		});

		const command = Spawn.spawnSync('npm', ['test'], {
			cwd: workspace.dir,
			// stdio: [process.stdin, process.stdout, process.stderr],
			encoding: 'utf-8',
		});

		if (command.status) {
			console.error(`The test for ${workspace.name} failed!\n`, command.stderr.toString());
			console.log(command.stdout);
			process.exit(1);
		} else {
			console.log(`✅ success`);
		}
	});

	console.log('Tests done 🎉');
	process.exit(0);
})();
