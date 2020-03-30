/** @jsx jsx */
import { jsx } from '@emotion/core';

export let type = 'paragraph';

export function Node({ attributes, children }) {
	return <p {...attributes}>{children}</p>;
}
