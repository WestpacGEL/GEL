/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as DoOrDoNotListItem from '../do-or-do-not-list-item/view';
import * as DoOrDoNot from '../view';

export let type = 'do-or-do-not-list';
import { Block } from 'slate';

const hasAncestorBlock = (editorState, type) => {
  return editorState.blocks.some(block => {
    return editorState.document.getClosest(block.key, parent => parent.type === type);
  });
};

const stripEmptyListItems = editor => {
  editor.value.document.nodes.forEach(node => {
    if (node.type === DoOrDoNot.type) {
      node.nodes.forEach(DoOrDoNotListBlock => {
        DoOrDoNotListBlock.nodes.forEach((node, i) => {
          if (i !== 0 && node.text === '') {
            console.log('remove 1', i, DoOrDoNotListBlock.nodes);
            editor.removeNodeByKey(node.key);
          }
        });
      });
    }
  });
};

export let getPlugins = () => [
  {
    onKeyDown(event, editor, next) {
      if (!hasAncestorBlock(editor.value, type)) {
        stripEmptyListItems(editor);
      }
      // If pressing enter on an empty line
      if (event.keyCode === 13 && hasAncestorBlock(editor.value, type)) {
        const DoOrDoNotBlock = editor.value.document.getClosest(
          editor.value.focusBlock.key,
          parent => parent.type === DoOrDoNot.type
        );

        const DoOrDoNotListBlock = editor.value.document.getClosest(
          editor.value.focusBlock.key,
          parent => parent.type === type
        );

        let isLastListItem =
          DoOrDoNotListBlock.nodes.indexOf(editor.value.focusBlock) ===
          DoOrDoNotListBlock.nodes.size - 1;
        if (editor.value.focusText.text === '' && isLastListItem) {
          // Check that you are in the 2nd col
          if (DoOrDoNotBlock.nodes.indexOf(DoOrDoNotListBlock) === 1) {
            let index = editor.value.document.nodes.indexOf(DoOrDoNotBlock);
            let block = Block.create({ type: 'paragraph' });
            // Insert paragraph after the parent block
            editor.insertNodeByKey(editor.value.document.key, index + 2, block);
            editor.moveTo(block.key, 0);
            stripEmptyListItems(editor);
            return;
          } else {
            editor.moveForward(1);
            return;
          }
          // focus after parent block
        }
      }
      next();
    },
  },
];

const Do = () => (
  <div
    css={{
      padding: '0 5px',
      borderTop: '15px solid #4caf50',
      color: '#2e7b32',
    }}
  >
    Do
  </div>
);
const Dont = () => (
  <div
    css={{
      padding: '0 5px',
      borderTop: '15px solid #d32F2f',
      color: '#d32F2f',
    }}
  >
    Don't
  </div>
);

export function Node({ attributes, children, node: { data } }) {
  const Heading = data.get('type') === 'do' ? Do : Dont;
  return (
    <div {...attributes}>
      <Heading />
      <ul
        css={{
          margin: 0,
          padding: '5px 5px 5px 15px',
          display: 'flex',
          listStylePosition: 'inside',
          flexDirection: 'column',
          '& > * + *': {
            marginTop: '5px',
          },
        }}
      >
        {children}
      </ul>
    </div>
  );
}

export const getSchema = () => ({
  nodes: [
    {
      match: { type: DoOrDoNotListItem.type },
      min: 1,
    },
  ],
  parent: { type: DoOrDoNot.type },
  normalize(editor, error) {
    switch (error.code) {
      case 'child_type_invalid': {
        editor.insertNodeByKey(error.node.key, 0, Block.create(DoOrDoNotListItem.type));
        return;
      }
    }
  },
});
