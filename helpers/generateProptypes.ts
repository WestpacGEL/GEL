import path from 'path';
import fs from 'fs';

import glob from 'glob';
import prettier from 'prettier';
import * as ttp from 'typescript-to-proptypes';


const prettierConfig = prettier.resolveConfig.sync(path.join(__dirname, '../.prettierrc'));

const componentFiles = glob.sync('components/a11y/src/*.{ts,tsx}', { absolute: true });
const program = ttp.createProgram(
	componentFiles,
	ttp.loadConfig('tsconfig.example.json')
);

for (const componentFile of componentFiles) {
	const extname = path.extname(componentFile);
	const basename = path.basename(componentFile);
	const dirname = path.join(path.dirname(componentFile), 'output');
	const outputPath = path.join(dirname, `${basename}.output${extname}`);
	const optionsPath = path.join(dirname, `${basename}.options.ts`);
	const inputJS = path.join(dirname, 'input.js');

	const options = fs.existsSync(optionsPath) ? require(optionsPath).default : {};

	const ast = ttp.parseFromProgram(componentFile, program, options.parser);

	const newAST = ttp.programNode(
		ast.body.map((component) => {
			return { ...component, propsFilename: undefined };
		})
	);

	let inputSource: any = null;
	if (componentFile.endsWith('.d.ts')) {
		try {
			inputSource = fs.readFileSync(inputJS, 'utf8');
		} catch (error) { }
	} else {
		// inputSource = fs.readFileSync(testCase, 'utf8')
		inputSource = ttp.ts.transpileModule(fs.readFileSync(componentFile, 'utf8'), {
			compilerOptions: {
				target: ttp.ts.ScriptTarget.ESNext,
				jsx: ttp.ts.JsxEmit.React,
			},
		}).outputText;
	}

	let result = '';
	// For d.ts files we just generate the AST
	if (!inputSource) {
		result = ttp.generate(ast, options.generator);
	}
	// For .tsx? files we transpile them and inject the proptypes
	else {
		const injected = ttp.inject(ast, inputSource, {
			babelOptions: {
				filename: inputSource,
			},
			comment: [
				'----------------------------- Warning --------------------------------',
				'| These PropTypes are generated from the TypeScript type definitions |',
				'|     To update them edit TypeScript types and run "yarn proptypes"  |',
				'----------------------------------------------------------------------',
			].join('\n'),
			reconcilePropTypes: (prop, previous, generated) => {
				const usedCustomValidator = previous !== undefined && !previous.startsWith('PropTypes');
				const ignoreGenerated =
					previous !== undefined &&
					previous.startsWith('PropTypes /* @typescript-to-proptypes-ignore */');

				if (
					ignoreGenerated &&
					// `ignoreGenerated` implies that `previous !== undefined`
					previous!
						.replace('PropTypes /* @typescript-to-proptypes-ignore */', 'PropTypes')
						.replace(/\s/g, '') === generated.replace(/\s/g, '')
				) {
					throw new Error(
						`Unused \`@typescript-to-proptypes-ignore\` directive for prop '${prop.name}'.`,
					);
				}

				if (usedCustomValidator || ignoreGenerated) {
					// `usedCustomValidator` and `ignoreGenerated` narrow `previous` to `string`
					return previous!;
				}

				return generated;
			},
		});

		if (!injected) {
			throw new Error('Injection failed');
		}

		result = injected;
	}

	//#region Check generated and/or injected proptypes
	const propTypes = prettier.format(result, {
		...prettierConfig,
		filepath: outputPath,
	});

	newAST.body.forEach(({ name }) => {
    const regexpForPropTypes = new RegExp(`${name}\.propTypes(.|\n)+?,\n};\n`);
		const newPropTypes = propTypes.match(regexpForPropTypes)?.[0];
		const source = prettier.format(fs.readFileSync(componentFile, 'utf8'), {
      ...prettierConfig || {},
    });
    let newFile = `${source}`;

    const propTypesFromSource = newFile.match(regexpForPropTypes)?.[0];
	if (propTypesFromSource) {
      newFile = newFile.replace(regexpForPropTypes, '');
    }
		if(newPropTypes){
			newFile = `${newFile}\n\n${newPropTypes}`;
		}
    
    const matchPropTypes = source.match('import PropTypes from \'prop-types\';');
    if(!matchPropTypes){
      newFile = `import PropTypes from \'prop-types\';\n${newFile}`
    }
		fs.writeFileSync(componentFile, prettier.format(newFile, {
      ...prettierConfig || {},
    }));
	});
	fs.writeFileSync(outputPath, propTypes);
}