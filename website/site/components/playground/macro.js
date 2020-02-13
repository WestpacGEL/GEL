const { createMacro } = require('babel-plugin-macros');
const prettier = require('prettier');

module.exports = createMacro(prevalMacros);

function prevalMacros({ references, babel, state }) {
	if (references.Playground)
		references.Playground.forEach(referencePath => {
			if (referencePath.parentPath.type === 'JSXOpeningElement') {
				transformPlayground({
					identifierName: referencePath.node.name,
					path: referencePath.parentPath.parentPath,
					state,
					babel,
				});
			} else if (referencePath.parentPath.type !== 'JSXClosingElement') {
				throw new Error(
					`Playground must be used as a component but instead it was used as a ${referencePath.parentPath.type}`
				);
			}
		});
}

function transformPlayground({ path, identifierName, babel, state }) {
	let t = babel.types;
	state.file.path.node.body.unshift(
		t.importDeclaration(
			[t.importSpecifier(t.identifier(identifierName), t.identifier('Playground'))],
			t.stringLiteral(require.resolve('./index'))
		)
	);
	let attributes = path.node.openingElement.attributes;

	if (attributes.length && attributes.find(t => t.name.name === 'code')) {
		// If we have a code attribute just use this and ignore the inner content
		if (attributes.length && !attributes.find(t => t.name.name === 'inline')) {
			// If we have an inline attribute, ues this, if not assume code attribute implies inline
			attributes.push(
				t.jsxAttribute(t.jsxIdentifier('inline'), t.jsxExpressionContainer(t.booleanLiteral(true)))
			);
		}

		let codeAttr = attributes.find(t => t.name.name === 'code');
		let value = codeAttr.value.expression ? codeAttr.value.expression : codeAttr.value;

		// Warn if code is not string
		if (value.type !== 'StringLiteral') {
			console.log('Code attribute must be a string.');
		} else {
			// Warn if code has no render call
			if (value.value && value.value.includes('render(')) {
				console.log(
					'Inline code must include a render() call. See: https://github.com/FormidableLabs/react-live#api'
				);
			}
			// Replace the value
			let code = value.value;
			if (format) {
				code = prettier.format(code, prettierOpts);
			}
			codeAttr.value = t.jsxExpressionContainer(t.stringLiteral(code));
		}

		// Warn if both attribute and children
		if (path.node.children.length) {
			console.log(
				'Playground element has both a code attribute and children. Children will be ignored.'
			);
		}
	} else {
		// Otherwise parse the inner content as a string
		if (path.node.closingElement && path.node.children.length) {
			let code = state.file.code.substring(
				path.node.openingElement.end,
				path.node.closingElement.start
			);

			if (path.node.children.length > 1) {
				//Add children to a fragment
				code = `<>${code}</>`;
			}

			code = prettier.format(code, { parser: 'babel' });

			let jsxElementNode = path.node;
			let identifiers = new Set();
			path.traverse({
				ReferencedIdentifier(path) {
					let binding = path.scope.getBinding(path.node.name);
					if (binding && !binding.path.findParent(x => x.node === jsxElementNode)) {
						identifiers.add(path.node.name);
					}
				},
			});
			if (identifiers.size) {
				let objectProperties = [...identifiers].map(x =>
					t.objectProperty(t.identifier(x), t.identifier(x))
				);

				let maybeScopeAttribute = path.node.openingElement.attributes.find(
					x =>
						x.type === 'JSXAttribute' &&
						x.name.name === 'scope' &&
						x.value.type === 'JSXExpressionContainer'
				);
				if (maybeScopeAttribute) {
					if (maybeScopeAttribute.value.expression.type === 'ObjectExpression') {
						maybeScopeAttribute.value.expression.properties.push(...objectProperties);
					} else {
						maybeScopeAttribute.value.expression = t.objectExpression([
							t.spreadElement(maybeScopeAttribute.value.expression),
							...objectProperties,
						]);
					}
				} else {
					path.node.openingElement.attributes.push(
						t.jsxAttribute(
							t.jsxIdentifier('scope'),
							t.jsxExpressionContainer(t.objectExpression(objectProperties))
						)
					);
				}
			}

			// Add the code attribute
			attributes.push(
				t.jsxAttribute(t.jsxIdentifier('code'), t.jsxExpressionContainer(t.stringLiteral(code)))
			);
		} else {
			// With no closing tag there is no code :(
			console.log('Empty Playground element found.');
		}
	}
}
