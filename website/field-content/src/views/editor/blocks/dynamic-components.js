/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useMemo, createContext, useContext, useState, useRef } from 'react';
import { Block } from 'slate';
import { PencilIcon, CheckIcon } from '@arch-ui/icons';
import { BlockMenuItem } from '../block-menu-item';

export let type = 'dynamic-components';

let Context = createContext(null);

let CurrentlyEditingBlocksContext = createContext({
	currentlyEditingBlocks: {},
	setCurrentlyEditingBlocks: () => {},
});

export let Provider = ({ value, children }) => {
	let [currentlyEditingBlocks, setCurrentlyEditingBlocks] = useState({});
	return (
		<CurrentlyEditingBlocksContext.Provider
			value={useMemo(() => ({ currentlyEditingBlocks, setCurrentlyEditingBlocks }), [
				currentlyEditingBlocks,
				setCurrentlyEditingBlocks,
			])}
		>
			<Context.Provider value={value}>{children}</Context.Provider>
		</CurrentlyEditingBlocksContext.Provider>
	);
};

export function Sidebar({ blocks, editor, ...other }) {
	let { adminMeta, components } = useContext(Context);
	let [view] = adminMeta.readViews([components]);
	const icon = (
		<svg width={16} height={16} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
			<path d="M480 416v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v208c0 44.112 35.888 80 80 80h336zm96-80V80c0-26.51-21.49-48-48-48H144c-26.51 0-48 21.49-48 48v256c0 26.51 21.49 48 48 48h384c26.51 0 48-21.49 48-48zM256 128c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-96 144l55.515-55.515c4.686-4.686 12.284-4.686 16.971 0L272 256l135.515-135.515c4.686-4.686 12.284-4.686 16.971 0L512 208v112H160v-48z" />
		</svg>
	);
	const { setCurrentlyEditingBlocks } = useContext(CurrentlyEditingBlocksContext);
	return Object.keys(view).map(compName => (
		<BlockMenuItem
			key={compName}
			icon={icon}
			text={`Insert ${compName}`}
			insertBlock={() => {
				let block = Block.create({
					type,
					data: {
						component: compName,
						props: {},
					},
				});
				setCurrentlyEditingBlocks(x => ({ ...x, [block.get('key')]: true }));
				editor.insertBlock(block);
			}}
		/>
	));
}

let thing = new Set();

export function Node(props) {
	let { adminMeta, components } = useContext(Context);
	let [view] = adminMeta.readViews([components]);
	const { currentlyEditingBlocks, setCurrentlyEditingBlocks } = useContext(
		CurrentlyEditingBlocksContext
	);
	let isEditing = currentlyEditingBlocks[props.node.key];
	let componentName = props.node.get('data').get('component');
	let Editor = view[componentName].editor;
	let Component = view[componentName].component;

	thing.add(useRef());

	console.log(thing);

	return (
		<div
			{...props.attributes}
			onClick={e => {
				// we want to stop stopPropagation here so that focussing works
				e.stopPropagation();
			}}
			css={{
				position: 'relative',
				'&:hover #add-edit-button': {
					opacity: 1,
				},
			}}
			contentEditable={false}
		>
			<div id="add-edit-button" css={{ opacity: 0, position: 'absolute', top: 0, left: -32 }}>
				<button
					type="button"
					css={{
						border: 'none',
						background: '#efefef',
						color: '#aaa',
						width: 24,
						height: 24,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						marginLeft: 4,
						':hover': {
							color: '#888',
						},
					}}
					onClick={() => {
						setCurrentlyEditingBlocks(x => ({ ...x, [props.node.key]: !x[props.node.key] }));
					}}
					title={isEditing ? 'Show rendered component' : 'Edit component'}
				>
					{isEditing ? <CheckIcon /> : <PencilIcon />}
				</button>
			</div>
			{isEditing ? (
				<Editor
					value={props.node.get('data').get('props')}
					onChange={dynamicComponentProps => {
						props.editor.setNodeByKey(props.node.key, {
							data: props.node.data.set('props', dynamicComponentProps),
						});
					}}
				/>
			) : (
				<Component {...props.node.get('data').get('props')} context={'admin'} />
			)}
		</div>
	);
}

export let getSchema = () => ({
	isVoid: true,
});
