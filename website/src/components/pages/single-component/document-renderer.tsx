/** @jsx jsx */
import React, { Fragment, ReactElement, ReactNode, useContext } from 'react';
import { useBrand } from '@westpac/core';
import dynamicComponents from '../../../../dynamic-blocks/';
import { Section } from '../../section';
import { Grid, Container, Cell } from '@westpac/grid';
import { jsx } from '@westpac/core';
import { NewWindowIcon } from '@westpac/icon/NewWindowIcon';

import { List, Item } from '../../list';
import { Body } from '../../body';

import { getShortCodes } from '../../../shortcodes';

type Node = Element | Text;

type Mark =
	| 'bold'
	| 'italic'
	| 'underline'
	| 'strikethrough'
	| 'code'
	| 'superscript'
	| 'subscript'
	| 'keyboard';

type Element = {
	children: Node[];
	[key: string]: unknown;
};

type Text = {
	text: string;
	[key: string]: unknown;
};

type Component<Props> = (props: Props) => ReactElement | null;

type OnlyChildrenComponent = Component<{ children: ReactNode }> | keyof JSX.IntrinsicElements;

type MarkRenderers = { [Key in Mark]: OnlyChildrenComponent };

interface Renderers {
	inline: {
		link: Component<{ children: ReactNode; href: string }> | 'a';
		relationship: Component<{
			relationship: string;
			data: { id: string; label: string | undefined; data: Record<string, any> | undefined } | null;
		}>;
	} & MarkRenderers;
	block: {
		block: OnlyChildrenComponent;
		paragraph: Component<{ children: ReactNode; textAlign: 'center' | 'end' | undefined }>;
		blockquote: OnlyChildrenComponent;
		code: Component<{ children: string }> | keyof JSX.IntrinsicElements;
		layout: Component<{ layout: [number, ...number[]]; children: ReactElement[] }>;
		divider: Component<{}> | keyof JSX.IntrinsicElements;
		heading: Component<{
			level: 1 | 2 | 3 | 4 | 5 | 6;
			children: ReactNode;
			textAlign: 'center' | 'end' | undefined;
		}>;
		list: Component<{ type: 'ordered' | 'unordered'; children: ReactElement[] }>;
	};
}

export const defaultRenderers: Renderers = {
	inline: {
		bold: 'strong',
		code: 'code',
		keyboard: 'kbd',
		strikethrough: 's',
		italic: 'em',
		link: ({ href, children }) => {
			return href.startsWith('/') ? (
				<a href={href}>{children}</a>
			) : (
				<a href={href} target="_blank">
					<span>{children}</span>
					<NewWindowIcon
						size="xsmall"
						color="inherit"
						assistiveText=", opens in a new tab"
						css={{ position: 'relative', marginLeft: '0.3em', top: '-0.125rem' }}
					/>
				</a>
			);
		},
		subscript: 'sub',
		superscript: 'sup',
		underline: 'u',
		relationship: ({ data }) => {
			return <span>{data?.label || data?.id}</span>;
		},
	},
	block: {
		block: 'div',
		blockquote: ({ children }) => {
			return (
				<Body>
					<blockquote>{children}</blockquote>
				</Body>
			);
		},
		paragraph: ({ children, textAlign }) => {
			return (
				<Body>
					<p style={{ textAlign }}>{children}</p>
				</Body>
			);
		},
		divider: 'hr',
		heading: ({ level, children, textAlign }) => {
			let Heading = `h${level}` as 'h1';
			return <Heading style={{ textAlign }} children={children} />;
		},
		code: ({ children }) => {
			return <dynamicComponents.CodeSnippet.component code={children} />;
		},
		list: ({ children, type }) => {
			const { SPACING } = useBrand();
			return (
				<List type={type === 'ordered' ? 'ordered' : 'bullet'} css={{ marginBottom: SPACING(2) }}>
					{children.map((x, i) => (
						<Item key={i}>{x}</Item>
					))}
				</List>
			);
		},
		layout: ({ children, layout }) => {
			return (
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: layout.map((x) => `${x}fr`).join(' '),
					}}
				>
					{children.map((element, i) => (
						<div key={i}>{element}</div>
					))}
				</div>
			);
		},
	},
};

function ShortCodes({ text }: { text: string }) {
	const { BRAND } = useBrand();
	const shortcodes = getShortCodes(BRAND);
	const matches = [...text.matchAll(/\[\[([A-Za-z0-9]*)\]\]/g)];
	const output = [];
	for (const [idx, part] of text.split(/\[\[[A-Za-z0-9]*\]\]/g).entries()) {
		output.push(part);
		const code = matches[idx]?.[1];
		const Comp = shortcodes[code];
		if (typeof Comp === 'function') {
			output.push(<Comp key={idx} />);
		}
		if (typeof Comp === 'string') {
			output.push(Comp);
		}
	}
	return <Fragment>{output}</Fragment>;
}

function DocumentNode({
	node: _node,
	componentBlocks,
	renderers,
}: {
	node: Element | Text;
	renderers: Renderers;
	// TODO: allow inferring from the component blocks
	componentBlocks: Record<string, Component<any>>;
}): ReactElement {
	if (typeof _node.text === 'string') {
		let child = <ShortCodes text={_node.text} />;
		(Object.keys(renderers.inline) as (keyof typeof renderers.inline)[]).forEach((markName) => {
			if (markName !== 'link' && markName !== 'relationship' && _node[markName]) {
				const Mark = renderers.inline[markName];
				child = <Mark>{child}</Mark>;
			}
		});

		return child;
	}
	const node = _node as Element;
	const children = node.children.map((x, i) => {
		let child = (
			<DocumentNode node={x} componentBlocks={componentBlocks} renderers={renderers} key={i} />
		);
		nodesForReactElements.set(child, x);
		return child;
	});
	switch (node.type as string) {
		case 'blockquote': {
			return <renderers.block.blockquote children={children} />;
		}
		case 'paragraph': {
			return <renderers.block.paragraph textAlign={node.textAlign as any} children={children} />;
		}
		case 'code': {
			if (
				node.children.length === 1 &&
				node.children[0] &&
				typeof node.children[0].text === 'string'
			) {
				return <renderers.block.code>{node.children[0].text}</renderers.block.code>;
			}
			break;
		}
		case 'layout': {
			return <renderers.block.layout layout={node.layout as any} children={children} />;
		}
		case 'divider': {
			return <renderers.block.divider />;
		}
		case 'heading': {
			return (
				<renderers.block.heading
					textAlign={node.textAlign as any}
					level={node.level as any}
					children={children}
				/>
			);
		}
		case 'component-block': {
			const Comp = componentBlocks[node.component as string];
			if (Comp) {
				const props = createComponentBlockProps(node, children);
				return <Comp {...props} />;
			}
			break;
		}
		case 'ordered-list':
		case 'unordered-list': {
			return (
				<renderers.block.list
					children={children}
					type={node.type === 'ordered-list' ? 'ordered' : 'unordered'}
				/>
			);
		}
		case 'relationship': {
			const data = node.data as any;
			return (
				<renderers.inline.relationship
					relationship={node.relationship as string}
					data={data ? { id: data.id, label: data.label, data: data.data } : null}
				/>
			);
		}
		case 'link': {
			return <renderers.inline.link href={node.href as string}>{children}</renderers.inline.link>;
		}
		case 'section': {
			return (
				<Section>
					<Container>
						<Grid rowGap="0 !important">
							{children.map((child, i) => {
								return nodesForReactElements.get(child)?.type === 'component-block' ? (
									child
								) : (
									<Cell key={i} width={[12, 11, 8, 7, 9]}>
										{child}
									</Cell>
								);
							})}
						</Grid>
					</Container>
				</Section>
			);
		}
	}
	return <Fragment>{children}</Fragment>;
}

function addSections(nodes: Node[]) {
	const headingIndexes: number[] = [];
	// Get the index of the introsection of the nodes in the document.
	const introSection = nodes.findIndex((x) => x.component === 'introSection');
	for (const [idx, node] of nodes.entries()) {
		// iterate through the nodes to get a list of relevant headings
		if (
			node.component === 'heading' &&
			(node.props as any).level === 'h2' &&
			(node.props as any).size === 6
		) {
			if (introSection !== -1 && headingIndexes.length === 0) {
				headingIndexes.push(introSection + 1);
				// If the next heading is close by the introSection don't make this into a separate section
				// if the next heading is **not** close by, then we turn this content into a new section.
				// by close by we explicitly mean less than 2 nodes away.
				if (idx <= 3) {
					continue;
				}
			}
			headingIndexes.push(idx);
		}
	}

	if (headingIndexes.length === 0 && introSection !== -1) {
		headingIndexes.push(introSection + 1);
	}

	const newNodes: Node[] =
		headingIndexes.length === 0 ? nodes : nodes.slice(0, Math.max(headingIndexes[0], 0));

	for (const [idx, headingIdx] of headingIndexes.entries()) {
		let endOfSection = headingIndexes[idx + 1] ?? nodes.length;
		// PropsTable is itself wrapped in a Section for reasons.
		// The section is also styled differently.
		// We check if the propsTable exists and is in the position we expect it to be
		// For document editor reasons, this is succeeded al;ways by an empty paragraph.
		// We ensure that these two are omitted from being wrapped in a section
		// And append them both into the end of the newNodes list.

		// if the next node is a propsTable,
		// omit it from the list
		let propsTableFun =
			endOfSection === nodes.length && nodes[nodes.length - 2].component === 'propsTable';

		if (propsTableFun) {
			endOfSection -= 2;
		}

		newNodes.push({ type: 'section', children: nodes.slice(headingIdx, endOfSection) });
		if (propsTableFun) {
			newNodes.push(...nodes.slice(endOfSection));
		}
	}
	return newNodes;
}

const nodesForReactElements = new WeakMap<ReactElement, Node>();

function set(obj: Record<string, any>, propPath: (string | number)[], value: any) {
	if (propPath.length === 1) {
		obj[propPath[0]] = value;
	} else {
		let firstElement = propPath.shift()!;
		set(obj[firstElement], propPath, value);
	}
}

function createComponentBlockProps(node: Element, children: ReactElement[]) {
	const formProps = JSON.parse(JSON.stringify(node.props));
	node.children.forEach((child, i) => {
		if (child.propPath) {
			const propPath = [...(child.propPath as any)];
			set(formProps, propPath, children[i]);
		}
	});
	return formProps;
}

export type DocumentRendererProps<
	ComponentBlocks extends Record<string, Component<any>> = Record<string, Component<any>>
> = {
	document: Element[];
	renderers?: { inline?: Partial<Renderers['inline']>; block?: Partial<Renderers['block']> };
	componentBlocks?: ComponentBlocks;
	item?: any;
};

const WholeDocumentContext = React.createContext<{ document: Node[]; item: any }>({
	document: [],
	item: {},
});

const componentBlocks: import('@keystone-6/fields-document/component-blocks').InferRenderersForComponentBlocks<
	typeof import('../../../../../website-backend/admin/component-blocks/main').componentBlocks
> = {
	codeExample({ codeExample, showCode }) {
		return (
			<dynamicComponents.CodeExample.component
				codeExample={codeExample}
				showCode={showCode}
				context={'website'}
			></dynamicComponents.CodeExample.component>
		);
	},
	heading({ addTableContent, content, level, size, codeStyles, removeTopMargin }) {
		return (
			<dynamicComponents.Heading.component
				headingText={contentToString(nodesForReactElements.get(content as any)!)}
				heading={content}
				addTableContent={addTableContent}
				level={level}
				size={size}
				codeStyles={codeStyles}
				removeTopMargin={removeTopMargin}
			></dynamicComponents.Heading.component>
		);
	},
	colorSwatch({ colors }) {
		return (
			<dynamicComponents.ColorSwatch.component
				colors={colors.map((x) => ({ label: x, value: x }))}
			/>
		);
	},
	doAndAvoid({ dontImage, dontAlt, dontText, doImage, doAlt, doText }) {
		return (
			<dynamicComponents.DoAndAvoid.component
				dontImage={dontImage}
				dontAlt={dontAlt}
				dontText={dontText}
				doImage={doImage}
				doAlt={doAlt}
				doText={doText}
			/>
		);
	},

	icons() {
		return <dynamicComponents.Icons.component />;
	},
	pictograms() {
		return <dynamicComponents.Pictograms.component />;
	},
	logos() {
		return <dynamicComponents.Logos.component />;
	},
	symbols() {
		return <dynamicComponents.Symbols.component />;
	},
	introSection({ description, showPackageInfo, showTableOfContents }) {
		const { document, item } = useContext(WholeDocumentContext);
		const node = nodesForReactElements.get(description as any);
		return (
			<dynamicComponents.IntroSection.component
				description={
					(node.children as any).length === 1 && node.children[0].text === '' ? '' : description
				}
				showPackageInfo={showPackageInfo}
				showTableOfContents={showTableOfContents}
				document={document}
				item={item}
			/>
		);
	},
	propsTable() {
		return <dynamicComponents.PropsTable.component item={useContext(WholeDocumentContext).item} />;
	},
	visionFilters({ codeExample }) {
		return <dynamicComponents.VisionFilters.component codeExample={codeExample} />;
	},
	image({ alt, caption, image }) {
		return <dynamicComponents.Image.component alt={alt} caption={caption} image={image} />;
	},
};

export function contentToString(node: Node): string {
	if ('text' in node && typeof node.text === 'string') {
		return node.text;
	}
	return (node.children as Node[]).map((node) => contentToString(node)).join('');
}

export function DocumentRenderer<ComponentBlocks extends Record<string, Component<any>>>(
	props: DocumentRendererProps<ComponentBlocks>
) {
	const renderers = {
		inline: { ...defaultRenderers.inline, ...props.renderers?.inline },
		block: { ...defaultRenderers.block, ...props.renderers?.block },
	};
	return (
		<WholeDocumentContext.Provider value={{ document: props.document, item: props.item }}>
			{addSections(props.document).map((x, i) => (
				<DocumentNode node={x} componentBlocks={componentBlocks} renderers={renderers} key={i} />
			))}
		</WholeDocumentContext.Provider>
	);
}
