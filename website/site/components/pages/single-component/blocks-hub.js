import React from 'react';

import { Blockquote, NoMatch, Paragraph, YesNo } from './blocks';

export const BlocksHub = ({ blocks }) => {
	return blocks.map((node, index) => {
		switch (node.type) {
			case 'do-or-do-not':
				return <YesNo key={index} yes={node.nodes[0]} no={node.nodes[1]} />;
			case 'paragraph':
				return <Paragraph key={index} node={node} />;
			case 'blockquote':
				return <Blockquote key={index} node={node} />;
			default:
				return <NoMatch key={index} />;
		}
	});
};
