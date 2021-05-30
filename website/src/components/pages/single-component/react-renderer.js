/**
 * forked from: https://github.com/ianstormtaylor/slate/blob/slate@0.47.4/packages/slate-html-serializer/src/index.js
 */

const serializeNode = (rules, { node, parents, path, value }) => {
	const nodeParents = [...parents, node];
	if (node.object === 'text') {
		// Convert the flat array of marks into a nested object of nodes, then
		// recurse so it's handled like everything else.
		// If it has no marks, it will be the original text object, so no special
		// casing is required.
		node = node.marks.reverse().reduce(
			(newNode, mark) => ({
				...mark,
				nodes: [newNode],
			}),
			{
				...node,
				// Avoid infinite recursion
				marks: [],
			}
		);
	}

	for (const rule of rules) {
		const ret = rule({
			node,
			parents: nodeParents,
			path,
			serializeChildren: (children = []) => {
				return children.map((childNode, index) =>
					serializeNode(rules, {
						node: childNode,
						parents: nodeParents,
						path: `${path}.nodes[${index}]`,
						value,
					})
				);
			},
			value,
		});
		if (ret === null) return;
		if (ret) return ret;
	}

	console.warn(`No serializer defined for node of type "${node.type}".`);
};

const Serializer = (rules) => (doc) => {
	let document = doc && doc.document ? JSON.parse(doc.document) : null;
	if (!document || !document.nodes) {
		return [];
	}

	let value = { document };
	const elements = document.nodes
		.map((childNode, index) =>
			serializeNode(rules, {
				node: childNode,
				parents: [document],
				path: `document.nodes[${index}]`,
				value,
			})
		)
		.filter((el) => el);
	return elements;
};

export default Serializer;
