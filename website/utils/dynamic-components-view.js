/** @jsx jsx */

import { jsx } from '@emotion/core';
import { Component, Fragment, useMemo, createContext, useContext, useState } from 'react';
import { Block } from 'slate';
import { PencilIcon, CheckIcon, TrashcanIcon } from '@arch-ui/icons';
import { colors, gridSize } from '@arch-ui/theme';

import { type as defaultType } from '../field-content/src/views/editor/blocks/paragraph';

import {
	BlockInsertMenuItem,
	BlockDisclosureMenuButton,
} from '@westpac/field-content/block-components';
import wbc from '@westpac/wbc';
import { GEL } from '@westpac/core';

export let type = 'dynamic-components';

let Context = createContext(null);

export let CurrentlyEditingBlocksContext = createContext({
	currentlyEditingBlocks: {},
	setCurrentlyEditingBlocks: () => {},
});

export let Provider = ({ value, children }) => {
	let [currentlyEditingBlocks, setCurrentlyEditingBlocks] = useState({});
	return (
		<GEL brand={wbc}>
			<CurrentlyEditingBlocksContext.Provider
				value={useMemo(
					() => ({ currentlyEditingBlocks, setCurrentlyEditingBlocks }),
					[currentlyEditingBlocks, setCurrentlyEditingBlocks]
				)}
			>
				<Context.Provider value={value}>{children}</Context.Provider>
			</CurrentlyEditingBlocksContext.Provider>
		</GEL>
	);
};

export function Sidebar({ editor }) {
	let { adminMeta, components } = useContext(Context);
	let [view] = adminMeta.readViews([components]);
	const { setCurrentlyEditingBlocks } = useContext(CurrentlyEditingBlocksContext);
	return Object.keys(view)
		.sort()
		.filter((compName) => !view[compName].archived)
		.map((compName) => {
			let svgPath = svgPathMap[compName];
			let icon = (
				<svg
					aria-hidden="true"
					fill="currentColor"
					focusable="false"
					height="16"
					viewBox="0 0 16 16"
					width="16"
				>
					<path d={svgPath} fillRule="evenodd" />
				</svg>
			);

			return (
				<BlockInsertMenuItem
					key={compName}
					icon={icon}
					text={componentNameToLabel(compName)}
					onClick={() => {
						let block = Block.create({
							type,
							data: {
								component: compName,
								props: {},
							},
						});
						setCurrentlyEditingBlocks((x) => ({ ...x, [block.get('key')]: true }));
						editor.insertBlock(block);
					}}
				/>
			);
		});
}

function componentNameToLabel(name) {
	let str = `${name.replace(/([A-Z])/g, ' $1')}`.trim();
	return str.charAt(0) + str.slice(1).toLowerCase();
}

export function Actions({ editor, node }) {
	const { currentlyEditingBlocks, setCurrentlyEditingBlocks } = useContext(
		CurrentlyEditingBlocksContext
	);
	if (!node) return null;
	let isEditing = currentlyEditingBlocks[node.key];

	return (
		<Fragment>
			<BlockDisclosureMenuButton
				variant="primary"
				onClick={() => {
					setCurrentlyEditingBlocks((x) => ({ ...x, [node.key]: !x[node.key] }));
				}}
				title={isEditing ? 'Done editing' : 'Edit block'}
			>
				{isEditing ? <CheckIcon /> : <PencilIcon />}
			</BlockDisclosureMenuButton>

			<BlockDisclosureMenuButton
				variant="danger"
				onClick={() => {
					editor.removeNodeByKey(node.key);
				}}
				title="Remove block"
			>
				<TrashcanIcon />
			</BlockDisclosureMenuButton>
		</Fragment>
	);
}

class ErrorBoundary extends Component {
	state = {
		hasError: false,
	};

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch(error, errorInfo) {
		console.log('Failed to render dynamic block', { error, errorInfo });
	}

	render() {
		if (this.state.hasError) {
			return <p>Unable to render a dynamic block.</p>;
		}

		return this.props.children;
	}
}

export function Node({ node, attributes, editor, item }) {
	let { adminMeta, components } = useContext(Context);
	let [view] = adminMeta.readViews([components]);
	const { currentlyEditingBlocks } = useContext(CurrentlyEditingBlocksContext);
	let isEditing = currentlyEditingBlocks[node.key];
	let componentName = node.get('data').get('component');

	if (!view[componentName]) {
		return (
			<p
				{...attributes}
				css={{ color: 'red' }}
			>{`Unable to render ${componentName} (the name of this block may have changed)`}</p>
		);
	}
	let Component = view[componentName].component;
	let Editor = view[componentName].editor;
	let isFocused = editor.value.focusBlock.key === node.key;

	return (
		<div
			{...attributes}
			onClick={(e) => {
				// we want to stop stopPropagation here so that focussing works
				e.stopPropagation();
			}}
		>
			<ErrorBoundary>
				<BlockLayout isEditing={isEditing} isFocused={isFocused}>
					{!!Editor && isEditing ? (
						<Editor
							item={item}
							_editorValue={JSON.parse(JSON.stringify(editor.value.document))}
							value={node.get('data').get('props')}
							onChange={(dynamicComponentProps) => {
								editor.setNodeByKey(node.key, {
									data: node.data.set('props', { ...dynamicComponentProps }),
								});
							}}
						/>
					) : (
						<Component
							{...node.get('data').get('props')}
							context={'admin'}
							item={item}
							_editorValue={JSON.parse(JSON.stringify(editor.value.document))}
						/>
					)}
				</BlockLayout>
			</ErrorBoundary>
		</div>
	);
}

export let getSchema = () => ({
	isVoid: true,
});

export let getPlugins = () => [
	{
		onKeyDown(event, editor, next) {
			// inject a new paragraph on "Enter"
			if (event.keyCode === 13 && editor.value.blocks.every((block) => block.type === type)) {
				editor.insertBlock({ type: defaultType });
			} else {
				return next();
			}
		},
	},
];

// Styled Components
// ------------------------------

// This is the disclosure indicator line to the left of the block
// Plus the block node itself
const BlockLayout = ({ children, isEditing = false, isFocused = false }) => {
	let lineColor = 'transparent';
	if (isFocused) lineColor = colors.N20;
	if (isEditing) lineColor = isFocused ? colors.B.base : colors.Y.base;

	return (
		<span css={{ display: 'flex' }}>
			<span
				css={{
					borderLeft: '4px solid transparent',
					borderLeftColor: lineColor,
					boxSizing: 'border-box',
					flexShrink: 0,
					marginLeft: -gridSize * 2,
					width: gridSize * 2,
				}}
			/>
			<span
				css={{
					paddingBottom: 8,
					flexGrow: 1,
					display: 'grid',
					gridAutoFlow: 'row',
				}}
			>
				{children}
			</span>
		</span>
	);
};

// Icons for the insert menu

const svgPathMap = {
	CodeExample:
		'M15.71 7.29l-3-3a1.003 1.003 0 00-1.42 1.42L13.59 8l-2.29 2.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71zM5 5a1.003 1.003 0 00-1.71-.71l-3 3C.11 7.47 0 7.72 0 8c0 .28.11.53.29.71l3 3a1.003 1.003 0 001.42-1.42L2.41 8 4.7 5.71c.19-.18.3-.43.3-.71zm4-3c-.48 0-.87.35-.96.81l-2 10c-.01.06-.04.12-.04.19 0 .55.45 1 1 1 .48 0 .87-.35.96-.81l2-10c.01-.06.04-.12.04-.19 0-.55-.45-1-1-1z',
	CodeSnippet:
		'M15.71 7.29l-3-3a1.003 1.003 0 00-1.42 1.42L13.59 8l-2.29 2.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71zM5 5a1.003 1.003 0 00-1.71-.71l-3 3C.11 7.47 0 7.72 0 8c0 .28.11.53.29.71l3 3a1.003 1.003 0 001.42-1.42L2.41 8 4.7 5.71c.19-.18.3-.43.3-.71zm4-3c-.48 0-.87.35-.96.81l-2 10c-.01.06-.04.12-.04.19 0 .55.45 1 1 1 .48 0 .87-.35.96-.81l2-10c.01-.06.04-.12.04-.19 0-.55-.45-1-1-1z',
	ColorSwatch:
		'M7.88 1s-4.9 6.28-4.9 8.9c.01 2.82 2.34 5.1 4.99 5.1 2.65-.01 5.03-2.3 5.03-5.13C12.99 7.17 7.88 1 7.88 1z',
	DoAndAvoid:
		'M14 3c-.28 0-.53.11-.71.29L6 10.59l-3.29-3.3a1.003 1.003 0 00-1.42 1.42l4 4c.18.18.43.29.71.29s.53-.11.71-.29l8-8A1.003 1.003 0 0014 3z',
	Heading:
		'M13 1c-.55 0-1 .45-1 1v5H4V2c0-.55-.45-1-1-1s-1 .45-1 1v12c0 .55.45 1 1 1s1-.45 1-1V9h8v5c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1z',
	Icons:
		'M2 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6C.9 6 0 6.9 0 8s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6C.9 0 0 .9 0 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM8 0C6.9 0 6 .9 6 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM8 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
	Image:
		'M11.99 6.99c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm3-5h-14c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-10c0-.55-.45-1-1-1zm-1 9l-5-3-1 2-3-4-3 5v-7h12v7z',
	IntroSection:
		'M1 8h3.76l2-2H1c-.55 0-1 .45-1 1s.45 1 1 1zm14.49-4.01c.31-.32.51-.76.51-1.24C16 1.78 15.22 1 14.25 1c-.48 0-.92.2-1.24.51l-1.44 1.44 2.47 2.47 1.45-1.43zM1 4h7.76l2-2H1c-.55 0-1 .45-1 1s.45 1 1 1zm0 6c-.55 0-1 .45-1 1 0 .48.35.86.8.96L2.76 10H1zm9.95-6.43l-6.69 6.69 2.47 2.47 6.69-6.69-2.47-2.47zm4.25 2.47L13.24 8H15c.55 0 1-.45 1-1 0-.48-.35-.86-.8-.96zM2 15l3.86-1.39-2.46-2.44L2 15zm13-5h-3.76l-2 2H15c.55 0 1-.45 1-1s-.45-1-1-1z',
	PropsTable:
		'M15 1H1c-.6 0-1 .5-1 1v12c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V2c0-.5-.4-1-1-1zM6 13H2v-2h4v2zm0-3H2V8h4v2zm0-3H2V5h4v2zm8 6H7v-2h7v2zm0-3H7V8h7v2zm0-3H7V5h7v2z',
	ScreenReaderText:
		'M9 4H5c-.55 0-1 .45-1 1s.45 1 1 1h1v3c0 .55.45 1 1 1s1-.45 1-1V6h1c.55 0 1-.45 1-1s-.45-1-1-1zm6.56 9.44l-2.67-2.67C13.59 9.68 14 8.39 14 7c0-3.87-3.13-7-7-7S0 3.13 0 7s3.13 7 7 7c1.39 0 2.68-.41 3.77-1.11l2.67 2.67a1.498 1.498 0 102.12-2.12zM7 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z',
	Separator: 'M13 7H3c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1z',
	VisionFilters:
		'M16 7.97v-.02-.01-.02-.02a.672.672 0 00-.17-.36c-.49-.63-1.07-1.2-1.65-1.72l-3.16 2.26a2.978 2.978 0 01-2.98 2.9c-.31 0-.6-.06-.88-.15L5.09 12.3c.44.19.9.36 1.37.47.97.23 1.94.24 2.92.05.88-.17 1.74-.54 2.53-.98 1.25-.7 2.39-1.67 3.38-2.75.18-.2.37-.41.53-.62.09-.1.15-.22.17-.36v-.02-.02-.01-.02-.03c.01-.02.01-.03.01-.04zm-.43-4.17c.25-.18.43-.46.43-.8 0-.55-.45-1-1-1-.22 0-.41.08-.57.2l-.01-.01-2.67 1.91c-.69-.38-1.41-.69-2.17-.87a6.8 6.8 0 00-2.91-.05c-.88.18-1.74.54-2.53.99-1.25.7-2.39 1.67-3.38 2.75-.18.2-.37.41-.53.62-.23.29-.23.63-.01.92.51.66 1.11 1.25 1.73 1.79.18.16.38.29.56.44l-2.09 1.5.01.01c-.25.18-.43.46-.43.8 0 .55.45 1 1 1 .22 0 .41-.08.57-.2l.01.01 14-10-.01-.01zm-10.41 5a3.03 3.03 0 01-.11-.8 2.99 2.99 0 012.99-2.98c.62 0 1.19.21 1.66.53L5.16 8.8z',
	Symbols:
		'M2 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6C.9 6 0 6.9 0 8s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6C.9 0 0 .9 0 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM8 0C6.9 0 6 .9 6 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM8 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
	Logos:
		'M2 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6C.9 6 0 6.9 0 8s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6C.9 0 0 .9 0 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM8 0C6.9 0 6 .9 6 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM8 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
	Pictograms:
		'M2 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6C.9 6 0 6.9 0 8s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6C.9 0 0 .9 0 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM8 0C6.9 0 6 .9 6 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM8 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
};
