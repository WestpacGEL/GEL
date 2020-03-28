/** @jsx jsx */

import { Fragment, useMemo } from 'react';
import { Block, Document } from 'slate';
import { Editor } from 'slate-react';
import { jsx } from '@emotion/core';

import { colors, gridSize } from '@arch-ui/theme';

import AddBlock from './add-block';
import { type as defaultType } from './blocks/paragraph';
import { useStateWithEqualityCheck } from './hooks';
import { plugins as markPlugins } from './marks';
import Toolbar from './toolbar';

function getSchema(blocks) {
	const schema = {
		document: {
			last: { type: defaultType },
			normalize: (editor, { code, node }) => {
				switch (code) {
					case 'last_child_type_invalid': {
						const paragraph = Block.create(defaultType);
						return editor.insertNodeByKey(node.key, node.nodes.size, paragraph);
					}
				}
			},
		},
		blocks: {},
	};
	Object.keys(blocks).forEach(type => {
		if (typeof blocks[type].getSchema === 'function') {
			schema.blocks[type] = blocks[type].getSchema({ blocks });
		}
	});
	return schema;
}

function Stories({ value: editorState, onChange, blocks, id, item, className }) {
	let schema = useMemo(() => {
		return getSchema(blocks);
	}, [blocks]);
	let { focusBlock } = editorState;

	let plugins = useMemo(() => {
		const renderNode = props => {
			let block = blocks[props.node.type];
			if (block) {
				return <block.Node {...props} blocks={blocks} item={item} />;
			}
		};

		const renderBlock = props => {
			let block = blocks[props.node.type];
			let isFocused = focusBlock && props.node && focusBlock.key === props.node.key;

			if (!block) return null;

			if (block.CurrentlyEditingBlocksContext) {
				let { Consumer } = block.CurrentlyEditingBlocksContext;

				return (
					<Consumer>
						{({ currentlyEditingBlocks, ...rest }) => {
							let isEditing = currentlyEditingBlocks[props.node.key];

							return (
								<BlockLayout
									isEditing={isEditing}
									isFocused={isFocused}
									onClickDisclosureArea={e => {
										props.editor.moveToStartOfNode(props.node);
									}}
								>
									{renderNode(props)}
								</BlockLayout>
							);
						}}
					</Consumer>
				);
			}

			return props.parent instanceof Document ? (
				<BlockLayout
					isFocused={isFocused}
					onClickDisclosureArea={e => {
						props.editor.moveToStartOfNode(props.node);
					}}
				>
					{renderNode(props)}
				</BlockLayout>
			) : (
				renderNode(props)
			);
		};

		return Object.values(blocks).reduce(
			(combinedPlugins, block) => {
				if (typeof block.getPlugins !== 'function') {
					return combinedPlugins;
				}
				return [...combinedPlugins, ...block.getPlugins({ blocks })];
			},
			[
				...markPlugins,
				{
					renderBlock: renderBlock,
					renderInline: renderNode,
				},
			]
		);
	}, [blocks, focusBlock]);

	let [editor, setEditor] = useStateWithEqualityCheck(null);

	return (
		<Fragment>
			<Toolbar {...{ editorState, editor, blocks }} />
			<div
				className={className}
				id={id}
				css={{
					// ...inputStyles({ isMultiline: true }),
					padding: 0,
					position: 'relative',
					// overflow: 'scroll',
					zIndex: 0,
				}}
			>
				<Editor
					schema={schema}
					ref={setEditor}
					plugins={plugins}
					value={editorState}
					tabIndex={0}
					css={{
						width: '100%',
						minHeight: 250,
					}}
					onChange={({ value }) => {
						onChange(value);
					}}
				/>
				<AddBlock editor={editor} editorState={editorState} blocks={blocks} />
			</div>
		</Fragment>
	);
}

// Styled Components
// ------------------------------

const cancelEvent = event => {
	e.stopPropagation();
	e.preventDefault();
};

// This is the disclosure indicator (rounded-line) to the left of the block
// Plus the block node itself
const BlockLayout = ({ children, isEditing = false, isFocused = false, onClickDisclosureArea }) => {
	return (
		<div css={{ display: 'flex' }}>
			<div
				css={{
					borderLeft: '4px solid transparent',
					borderLeftColor: isFocused ? (isEditing ? colors.B.base : colors.N20) : colors.N05,
					boxSizing: 'border-box',
					flexShrink: 0,
					marginLeft: -gridSize * 2,
					width: gridSize * 2,
				}}
				onMouseDown={cancelEvent}
				onMouseUp={cancelEvent}
				onClick={onClickDisclosureArea}
			/>
			<div css={{ paddingBottom: 8, flexGrow: 1 }}>{children}</div>
		</div>
	);
};

export default Stories;
