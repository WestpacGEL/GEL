import path from 'path';
import fs from 'fs';
import chalk from 'chalk';
import glob from 'glob';
import prettier from 'prettier';
const prettierConfig = prettier.resolveConfig.sync(path.join(__dirname, '../.prettierrc'));

import { iconTemplate } from './.icon-template/icon-template';

const formatIconName = (icon: string) => {
	let name = icon.replace(/-(outlined|filled)$/, '');
	name = name.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
	return name[0].toUpperCase() + name.slice(1);
};

const formatSVG = (svg: Buffer, pathCount: number) => {
	const iconPaths = svg
		.toString()
		.replace(/<\/?svg[^>]*>/g, '')
		.replace(/fill="[^"]*"/g, 'fill="currentColor"')
		.trim();

	return pathCount > 1 ? `<Fragment>${iconPaths}</Fragment>` : iconPaths;
};

const main = async () => {
	const iconFiles = glob.sync('assets/icons/filled/*.svg');
	const iconCount = iconFiles.length;
	let i = 1;

	console.log(chalk.gray.bold('Building icons...'));

	for (const iconPath of iconFiles) {
		const iconFileName = path.basename(iconPath, path.extname(iconPath));
		const iconComponentName = formatIconName(iconFileName);
		const outlinedPath = iconPath.replace(/filled/g, 'outlined');

		console.log(chalk.gray(`[${i}/${iconCount}] ${iconComponentName}Icon`));

		const [filledSVG, outlinedSVG] = await Promise.all([
			fs.promises.readFile(iconPath),
			fs.promises.readFile(outlinedPath),
		]);

		const filledPathCount = filledSVG.toString().match(/path/g)?.length || 0;
		const outlinedPathCount = outlinedSVG.toString().match(/path/g)?.length || 0;

		const addFragment = filledPathCount > 1 || outlinedPathCount > 1;

		const filledPaths = formatSVG(filledSVG, filledPathCount);
		const outlinedPaths = formatSVG(outlinedSVG, outlinedPathCount);

		const iconComponent = prettier.format(
			iconTemplate(iconComponentName, filledPaths, outlinedPaths, addFragment),
			{
				parser: 'typescript',
				...(prettierConfig || {}),
			}
		);

		await fs.promises.writeFile(
			`./components/icon/src/${iconComponentName}Icon.tsx`,
			iconComponent
		);

		i++;
	}
};

main();
