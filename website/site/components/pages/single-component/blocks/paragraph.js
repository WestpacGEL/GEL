import React from 'react';

export const Paragraph = ({ node }) => {
	const { text } = node.nodes[0];
	return <p>{text}</p>;
};
