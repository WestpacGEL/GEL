const { createMacro } = require('babel-plugin-macros');

module.exports = createMacro(prevalMacros);

function prevalMacros({ references, babel }) {
	references.default.forEach((referencePath) => {
		if (referencePath.parentPath.type === 'CallExpression') {
			importAllDeferred({ referencePath, babel });
		} else {
			throw new Error(
				`This is not supported: \`${referencePath
					.findParent(babel.types.isExpression)
					.getSource()}\`. Please see the documentation`
			);
		}
	});
}

function importAllDeferred({ referencePath, babel }) {
	const { types: t } = babel;
	const importSources = referencePath.parentPath.get('arguments')[0].evaluate().value;

	const objectProperties = importSources.map((source) => {
		return t.objectProperty(
			t.stringLiteral(source),
			t.functionExpression(
				null,
				[],
				t.blockStatement([
					t.returnStatement(t.callExpression(t.import(), [t.stringLiteral(source)])),
				])
			)
		);
	});
	const objectExpression = t.objectExpression(objectProperties);

	referencePath.parentPath.replaceWith(objectExpression);
}
