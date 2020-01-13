import React from 'react';

import { Body } from '@westpac/body';
export const Blockquote = ({ node }) => {
	const { text } = node.nodes[0].nodes[0];
	return <blockquote>{text}</blockquote>;
};
