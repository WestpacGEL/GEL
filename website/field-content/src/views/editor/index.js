/** @jsx jsx */

import { Fragment, useMemo } from 'react';
import { Editor } from 'slate-react';
import { jsx } from '@emotion/react';
import { Block } from 'slate';

import { type as defaultType } from './blocks/paragraph';
import { useStateWithEqualityCheck } from './hooks';
import { plugins as markPlugins } from './marks';
import AddBlock from './add-block';
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
	Object.keys(blocks).forEach((type) => {
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
		const renderNode = (props) => {
			let block = blocks[props.node.type];
			if (block) {
				return <block.Node {...props} blocks={blocks} item={item} />;
			}
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
					renderBlock: renderNode,
					renderInline: renderNode,
				},
			]
		);
	}, [blocks, focusBlock]);

	let [editor, setEditor] = useStateWithEqualityCheck(null);

	let editorHasFocus = editorState?.selection?.isFocused;

	return (
		<Fragment>
			<Toolbar
				blocks={blocks}
				editor={editor}
				editorHasFocus={editorHasFocus}
				editorState={editorState}
			/>
			<div className={className} id={id}>
				<Editor
					schema={schema}
					ref={setEditor}
					plugins={plugins}
					placeholder="Start writing..."
					value={editorState}
					tabIndex={0}
					css={{
						boxShadow: '0px 2px 0px rgba(23,43,77,0.1)',
						minHeight: 220,
						paddingBottom: '1em',
						width: '100%',
					}}
					onChange={({ value }) => {
						onChange(value);
					}}
				/>
				<AddBlock
					editor={editor}
					editorState={editorState}
					editorHasFocus={editorHasFocus}
					blocks={blocks}
				/>
			</div>
		</Fragment>
	);
}

export default Stories;
