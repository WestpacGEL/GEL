const { Text } = require('@keystonejs/fields');

const categorySchema = {
	fields: {
		name: {
			type: Text,
		},
	},
};

module.exports = { categorySchema };
