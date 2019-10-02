const getWorkspaces = require('get-workspaces').default;
const fs = require('fs-extra');

const build = require('./transformers/web');

(async () => {
	const workspaces = await getWorkspaces();

	workspaces
		.filter(workspace => workspace.dir.includes('brand'))
		.map(workspace => {
			const { name, dir } = workspace;
			const BRAND = name.replace('@westpac/', '').toUpperCase();

			// Remove the dist folder
			fs.removeSync(`${dir}/dist`);

			build(BRAND, dir);
		});
})();
