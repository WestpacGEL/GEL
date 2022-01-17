import fs from 'fs';
import fetch from 'node-fetch';

// const data = JSON.parse(fs.readFileSync('../website/data.json', 'utf8'));

function walkNode(node, visitor) {
	if (node.children) {
		for (const child of node.children) {
			walkNode(child, visitor);
		}
	}
	visitor(node);
}

function walkerForColorSwatch(document) {
	walkNode(document, (node) => {
		if (node.type === 'dynamic-components' && node.component === 'ColorSwatch') {
			node.type = 'component-block';
			node.props.colors = node.props.colors.map(({ value }) => value);
			node.component = (node.component[0] as string).toLowerCase() + node.component.slice(1);
			node.children = [
				{
					type: 'component-inline-prop',
					children: [
						{
							text: '',
						},
					],
				},
			];
		}
	});
	return document;
}
function walkerforCodeExampleLikeBlocks(document) {
	walkNode(document, (node) => {
		if (
			node.type === 'dynamic-components' &&
			['CodeExample', 'VisionFilters'].includes(node.component)
		) {
			node.type = 'component-block';
			node.component = (node.component[0] as string).toLowerCase() + node.component.slice(1);
			delete node.props.showDemo;
			node.props = { codeExample: node.props.codeExample, showCode: node.props.showCode };
			node.children = [
				{
					type: 'component-inline-prop',
					children: [{ text: '' }],
				},
			];
		}
	});
	return document;
}

function walkerforPrimitiveComponentBlocks(document) {
	walkNode(document, (node) => {
		if (
			node.type === 'dynamic-components' &&
			['Logos', 'Icons', 'Symbols', 'Pictograms', 'PropsTable'].includes(node.component)
		) {
			node.type = 'component-block';
			node.props = {};
			node.component = (node.component[0] as string).toLowerCase() + node.component.slice(1);
			node.children = [
				{
					type: 'component-inline-prop',
					children: [{ text: '' }],
				},
			];
		}
	});
	return document;
}

function counter() {
	const map = new Map();
	return {
		add(val: unknown) {
			map.set(val, (map.get(val) ?? 0) + 1);
		},
		map,
	};
}

const thingCounter = counter();

const passes = [
	(document) => {
		function walkNode(node) {
			if (node.nodes) {
				for (const child of node.nodes) {
					walkNode(child);
				}
			}
			if (node.nodes) {
				node.children = node.nodes;
				delete node.nodes;
			}
		}
		walkNode(document);
		return document;
	},
	(document) => {
		walkNode(document, (node) => {
			delete node.object;
		});
		return document;
	},
	(document) => {
		walkNode(document, (node) => {
			if (typeof node.text === 'string') {
				const { marks } = node;
				delete node.marks;
				for (const mark of marks) {
					if (mark.type !== '') {
						node[mark.type] = true;
					}
				}
			}
		});
		return document;
	},
	(document) => {
		walkNode(document, (node) => {
			if (typeof node.data === 'object') {
				const { data } = node;
				delete node.data;
				Object.assign(node, data);
			}
		});
		return document;
	},
	(document) => {
		walkNode(document, (node) => {
			if (node.type === 'list-item') {
				node.children = [{ type: 'list-item-content', children: node.children }];
			}
		});
		return document;
	},
	(document) => {
		function walkNode(node: { children: any[] }) {
			if (node.children) {
				let didModify = true;
				while (didModify) {
					didModify = false;
					for (const [idx, child] of node.children.entries()) {
						if (child.type === 'section') {
							const { children } = child;
							node.children.splice(idx, 1, ...children);
							didModify = true;
							break;
						}
						walkNode(child);
					}
				}
			}
		}
		walkNode(document);
		return document;
	},
	(document) => {
		function walkNode(node: { children: any[] }) {
			if (node.children) {
				let didModify = true;
				while (didModify) {
					didModify = false;
					for (const [idx, child] of node.children.entries()) {
						if (
							child.type === 'dynamic-components' &&
							(child.component === 'ScreenReaderText' ||
								(child.component === 'CodeExample' && child.props.codeExample == null))
						) {
							node.children.splice(idx, 1);
							didModify = true;
							break;
						}
						walkNode(child);
					}
				}
			}
		}
		walkNode(document);
		return document;
	},
	(document) => {
		walkNode(document, (node) => {
			if (node.type === 'dynamic-components' && node.component === 'Separator') {
				delete node.props;
				delete node.component;
				node.type = 'divider';
			}
		});
		return document;
	},
	walkerForIntroSection,
	walkerforPrimitiveComponentBlocks,
	walkerforCodeExampleLikeBlocks,
	walkerForColorSwatch,
	imageConverter,
	headingConverter,
	doAndAdvoidConverter,
	(document) => {
		walkNode(document, (node) => {
			if (node.type === 'dynamic-components' && node.component === 'CodeSnippet') {
				node.children = [{ text: node.props.code }];
				node.type = 'code';
				delete node.component;
				delete node.props;
			}
		});
		return document;
	},
	(document) => {
		for (const node of document.children) {
			if (typeof node.text === 'string') {
				const { text } = node;
				delete node.text;
				node.type = 'paragraph';
				node.children = [{ text }];
			}
		}
		return document;
	},
	(x) => x.children,
];

// for (const page of data.allPages) {
// 	for (const key of ['design', 'code', 'accessibility', 'relatedInfo']) {
// 		if (page[key]) {
// 			let document = page[key].document;
// 			for (const pass of passes) {
// 				document = pass(document);
// 			}
// 			page[key] = document;
// 		} else {
// 			delete page[key];
// 		}
// 	}
// }

function walkerForIntroSection(document) {
	walkNode(document, (node) => {
		if (node.type === 'dynamic-components' && node.component === 'IntroSection') {
			node.type = 'component-block';
			node.component = 'introSection';
			node.props.showPackageInfo ??= false;
			node.props.showTableOfContents ??= false;
			let { description } = node.props;
			node.children = [
				{
					type: 'component-inline-prop',
					children: [{ text: description || '' }],
					propPath: ['description'],
				},
			];
			delete node.props.description;
		}
	});
	return document;
}

function imageConverter(document) {
	walkNode(document, (node) => {
		if (node.type === 'dynamic-components' && node.component === 'Image') {
			node.type = 'component-block';
			node.component = 'image';
			node.props.alt ??= '';
			node.props.image ??= '';

			node.children = [
				{
					type: 'component-inline-prop',
					children: [{ text: '' }],
				},
			];
		}
	});
	return document;
}

function doAndAdvoidConverter(document) {
	walkNode(document, (node) => {
		if (node.type === 'dynamic-components' && node.component === 'DoAndAvoid') {
			node.type = 'component-block';
			node.component = 'doAndAvoid';
			let { doText, dontText } = node.props;
			node.props.doAlt ??= '';
			node.props.dontAlt ??= '';
			node.props.doImage ??= '';
			node.props.dontImage ??= '';
			node.children = [
				{
					type: 'component-inline-prop',
					propPath: ['doText'],
					children: [{ text: doText }],
				},
				{
					type: 'component-inline-prop',
					propPath: ['dontText'],
					children: [{ text: dontText }],
				},
			];

			delete node.props.doText;
			delete node.props.dontText;
		}
	});
	return document;
}

function headingConverter(document) {
	walkNode(document, (node) => {
		if (node.type === 'dynamic-components' && node.component === 'Heading') {
			node.type = 'component-block';
			node.component = 'heading';
			node.children = [
				{
					type: 'component-inline-prop',
					propPath: ['content'],
					children: [{ text: node.props.heading }],
				},
			];
			for (const key of [
				'indent',
				'indentLevel',
				'subText',
				'text',
				'removeTopMargin',
				'codeStyles',
				'heading',
			]) {
				delete node.props[key];
			}
		}
	});
	return document;
}

const gql =
	([str]: TemplateStringsArray) =>
	(variables: unknown) =>
		fetch('http://localhost:3001/api/graphql', {
			method: 'POST',
			body: JSON.stringify({ query: str, variables }),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((x) => x.json())
			.then((val) => {
				if (val.errors) {
					throw new Error(`GraphQL errors:\n${val.errors.map((x) => x.message).join('\n')}`);
				}
				return val.data;
			});

// fs.writeFileSync('output.json', JSON.stringify(data, null, 2));

(async () => {
	const data = await gql`
		query {
			pages {
				id
				url
				designOld
				codeOld
				accessibilityOld
				relatedInfoOld
			}
		}
	`({});
	for (const { id, url, ...rest } of data.pages) {
		if (url === '/components/testing-blocks' || url === '/test' || url === '/components/adfgdfg') {
			continue;
		}

		console.log(url);
		const newStuff = {};
		for (const [key, val] of Object.entries(rest)) {
			if (val) {
				let document = val;
				for (const pass of passes) {
					document = pass(document);
				}
				newStuff[key.replace('Old', '')] = document;
			}
		}
		debugger;
		try {
			await gql`
				mutation ($id: ID!, $data: PageUpdateInput!) {
					updatePage(where: { id: $id }, data: $data) {
						id
					}
				}
			`({ id, data: newStuff });
		} catch (err) {
			debugger;
			throw err;
		}
	}
})();
