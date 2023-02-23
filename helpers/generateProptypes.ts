import path from 'path';
import fs from 'fs';

import glob from 'glob';
import prettier from 'prettier';
import * as ttp from 'typescript-to-proptypes';

const prettierConfig = prettier.resolveConfig.sync(path.join(__dirname, '../.prettierrc'));

const componentFiles = glob.sync('components/**/src/*.tsx', { absolute: true });
const program = ttp.createProgram(componentFiles, ttp.loadConfig('tsconfig.example.json'));

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
		} catch (error) {}
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
						`Unused \`@typescript-to-proptypes-ignore\` directive for prop '${prop.name}'.`
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
		parser: 'typescript',
		filepath: outputPath,
	});

	newAST.body.forEach(({ name, types }) => {
		const regexpForPropTypes = new RegExp(`${name}\.propTypes(.|\n)+?,\n};\n`);
		const regexpForDefaultProps = new RegExp(`${name}\.defaultProps(.|\n)+?};`);
		const newPropTypes = propTypes.match(regexpForPropTypes)?.[0];
		const source = prettier.format(fs.readFileSync(componentFile, 'utf8'), {
			parser: 'typescript',
			...(prettierConfig || {}),
		});

		let newFile = source;
		// Removing propTypes and defaultProps
		newFile = newFile.replace(regexpForPropTypes, '');
		newFile = newFile.replace(regexpForDefaultProps, '');

		if (newPropTypes) {
			newFile = `${newFile}\n\n${newPropTypes}`;
		}

		// Generating the defaultProps
		const regexpForFunctionComponentProps = new RegExp(`${name}\\(\{((.|\n)+?)\}\: ${name}Props`);
		const regexpForConstComponentProps = new RegExp(
			`${name}\\s\=\\s\\(\{((.|\n)+?)\}\: ${name}Props`
		);
		const regexpForConstForwardComponentProps = new RegExp(
			`${name}\\s\\=\\sforwardRef(.|\n)+{((.|\n)+)}:\\s${name}Props`
		);

		const regexpForComponentPropsPiece =
			newFile.match(regexpForFunctionComponentProps)?.[1] ||
			newFile.match(regexpForConstForwardComponentProps)?.[2] ||
			newFile.match(regexpForConstComponentProps)?.[1];

		const __REPLACE_BY_ARROW_FUNCTION__ = '__REPLACE_BY_ARROW_FUNCTION__';
		if (regexpForComponentPropsPiece) {
			const parsedString = regexpForComponentPropsPiece.replace(/\:\s\w+\s\=\s/g, ' = ');
			const defaultValues = types.reduce((acc: Record<string, any>, { name }) => {
				const x = `
					const {${parsedString}} = {};
					return ${name};
				`;
				try {
					const defaultValue = new Function(x)();
					return typeof defaultValue !== 'undefined'
						? {
								...acc,
								[name]:
									typeof defaultValue === 'function' ? __REPLACE_BY_ARROW_FUNCTION__ : defaultValue,
						  }
						: acc;
				} catch {
					return acc;
				}
			}, {});
			if (Object.keys(defaultValues).length > 0) {
				// Replace the functions values with the defaulArrowFunction
				const defaultPropObjectAsString = JSON.stringify(defaultValues).replace(
					new RegExp(`"${__REPLACE_BY_ARROW_FUNCTION__}"`, 'gi'),
					'() => {}'
				);
				const defaultPropsString = `${name}.defaultProps = ${defaultPropObjectAsString};`;
				newFile = `${newFile}\n\n${defaultPropsString}`;
			}
		}

		// Adding proptypes in case there is no import
		const matchPropTypes = newFile.match("import PropTypes from 'prop-types';");
		if (!matchPropTypes) {
			newFile = `import PropTypes from \'prop-types\';\n${newFile}`;
		}

		fs.writeFileSync(
			componentFile,
			prettier.format(newFile, {
				parser: 'typescript',
				...(prettierConfig || {}),
			})
		);
	});
}
