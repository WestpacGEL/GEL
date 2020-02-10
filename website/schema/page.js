const { Text } = require('@keystonejs/fields');
const { Content } = require('@keystonejs/field-content');

const pageSchema = {
	fields: {
		title: { type: Text },
		content: {
			type: Content,
			blocks: [Content.blocks.blockquote, Content.blocks.image],
		},
	},
};

module.exports = { pageSchema };
