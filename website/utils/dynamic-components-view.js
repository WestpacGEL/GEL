/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Component } from 'react';
import { useMemo, createContext, useContext, useState, useEffect } from 'react';
import { Block } from 'slate';
import { PencilIcon, CheckIcon } from '@arch-ui/icons';
import { BlockMenuItem, BlockIcon } from '@keystonejs/field-content/block-components';
import wbc from '@westpac/wbc';
import { GEL } from '@westpac/core';

export let type = 'dynamic-components';

let Context = createContext(null);

let CurrentlyEditingBlocksContext = createContext({
	currentlyEditingBlocks: {},
	setCurrentlyEditingBlocks: () => {},
});

export let Provider = ({ value, children }) => {
	let [currentlyEditingBlocks, setCurrentlyEditingBlocks] = useState({});
	return (
		<GEL brand={wbc}>
			<CurrentlyEditingBlocksContext.Provider
				value={useMemo(() => ({ currentlyEditingBlocks, setCurrentlyEditingBlocks }), [
					currentlyEditingBlocks,
					setCurrentlyEditingBlocks,
				])}
			>
				<Context.Provider value={value}>{children}</Context.Provider>
			</CurrentlyEditingBlocksContext.Provider>
		</GEL>
	);
};

export function Sidebar({ editor }) {
	let { adminMeta, components } = useContext(Context);
	let [view] = adminMeta.readViews([components]);
	const icon = (
		<svg width={16} height={16} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
			<path d="M480 416v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v208c0 44.112 35.888 80 80 80h336zm96-80V80c0-26.51-21.49-48-48-48H144c-26.51 0-48 21.49-48 48v256c0 26.51 21.49 48 48 48h384c26.51 0 48-21.49 48-48zM256 128c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-96 144l55.515-55.515c4.686-4.686 12.284-4.686 16.971 0L272 256l135.515-135.515c4.686-4.686 12.284-4.686 16.971 0L512 208v112H160v-48z" />
		</svg>
	);
	const { setCurrentlyEditingBlocks } = useContext(CurrentlyEditingBlocksContext);
	return (
		<div
			css={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'left',
				alignItems: 'center',
			}}
		>
			{Object.keys(view).map(compName => (
				<BlockMenuItem
					key={compName}
					icon={icon}
					text={`${compName.replace(/([A-Z])/g, ' $1')}`}
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
			))}
		</div>
	);
}

export function Actions({ node }) {
	const { currentlyEditingBlocks, setCurrentlyEditingBlocks } = useContext(
		CurrentlyEditingBlocksContext
	);
	if (!node) return null;
	let isEditing = currentlyEditingBlocks[node.key];
	return (
		<BlockIcon
			onClick={() => {
				setCurrentlyEditingBlocks(x => ({ ...x, [node.key]: !x[node.key] }));
			}}
			title={isEditing ? 'Show rendered component' : 'Edit component'}
		>
			{isEditing ? <CheckIcon /> : <PencilIcon />}
		</BlockIcon>
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

	// useEffect(() => {
	// 	editor.setNodeByKey(node.key, {
	// 		data: node.data.set('props', { item, ...node.get('data').get('props') }),
	// 	});
	// 	node.data.set('props', { item, ...node.get('data').get('props') });
	// 	console.log({ p: node.get('data').get('props'), item });
	// }, []);

	return (
		<div
			{...attributes}
			onClick={e => {
				// we want to stop stopPropagation here so that focussing works
				e.stopPropagation();
			}}
		>
			<ErrorBoundary>
				{!!Editor && isEditing ? (
					<Editor
						item={item}
						value={node.get('data').get('props')}
						onChange={dynamicComponentProps => {
							editor.setNodeByKey(node.key, {
								data: node.data.set('props', { ...dynamicComponentProps }),
							});
						}}
					/>
				) : (
					<Component {...node.get('data').get('props')} context={'admin'} item={item} />
				)}
			</ErrorBoundary>
		</div>
	);
}

export let getSchema = () => ({
	isVoid: true,
});
