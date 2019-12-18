/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Block } from 'slate';
import { BlockMenuItem } from '@keystonejs/field-content/block-components';

export let type = 'code-sample';

const insertBlock = (blocks, editor) => {
  let x = editor.value.document.nodes.indexOf(editor.value.focusBlock);
  let thing = Block.create({
    type,
    nodes: [],
  });
  editor.insertNodeByKey(editor.value.document.key, x, thing);
  editor.moveTo(thing.key, 0);
};

export function Sidebar({ blocks, editor, ...other }) {
  const icon = (
    <svg width={16} height={16} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path d="M480 416v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v208c0 44.112 35.888 80 80 80h336zm96-80V80c0-26.51-21.49-48-48-48H144c-26.51 0-48 21.49-48 48v256c0 26.51 21.49 48 48 48h384c26.51 0 48-21.49 48-48zM256 128c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-96 144l55.515-55.515c4.686-4.686 12.284-4.686 16.971 0L272 256l135.515-135.515c4.686-4.686 12.284-4.686 16.971 0L512 208v112H160v-48z" />
    </svg>
  );
  return (
    <BlockMenuItem icon={icon} text="CodeSample" insertBlock={() => insertBlock(blocks, editor)} />
  );
}

export function Node({ attributes, children }) {
  return <div {...attributes}>{children}</div>;
}

export let getSchema = ({ blocks }) => ({
  nodes: [{}],
  normalize(editor, error) {},
  data: {},
});
